import mysql.connector
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database configuration
config = {
    'host': os.getenv('MYSQL_HOST', 'localhost'),
    'user': os.getenv('MYSQL_USER', 'root'),
    'password': os.getenv('MYSQL_PASSWORD', ''),
}

def setup_database():
    # Connect to MySQL server
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    
    # Create database if it doesn't exist
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {os.getenv('MYSQL_DB', 'ewaste_db')}")
    cursor.execute(f"USE {os.getenv('MYSQL_DB', 'ewaste_db')}")
    
    # Create users table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at DATETIME NOT NULL
    )
    """)
    
    # Create pickup_requests table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS pickup_requests (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zip_code VARCHAR(20) NOT NULL,
        pickup_date DATE NOT NULL,
        item_type VARCHAR(50) NOT NULL,
        item_description TEXT NOT NULL,
        status ENUM('pending', 'scheduled', 'completed', 'cancelled') DEFAULT 'pending',
        created_at DATETIME NOT NULL
    )
    """)
    
    # Create recycling_centers table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS recycling_centers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zip_code VARCHAR(20) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        hours TEXT NOT NULL,
        accepted_items TEXT NOT NULL,
        latitude DECIMAL(10, 8),
        longitude DECIMAL(11, 8)
    )
    """)
    
    # Insert sample recycling centers
    centers = [
        ('EcoDispose Main Center', '123 Green Street', 'Eco City', 'EC', '12345', '(123) 456-7890', 
         'Mon-Fri: 9am-6pm, Sat: 10am-4pm', 'Computers,Phones,TVs,Appliances,Batteries', 40.7128, -74.0060),
        ('City Recycling Facility', '456 Recycle Avenue', 'Eco City', 'EC', '12346', '(123) 456-7891', 
         'Mon-Sat: 8am-5pm', 'Computers,Printers,Batteries', 40.7135, -74.0070),
        ('Tech Store Recycling Program', '789 Tech Blvd', 'Eco City', 'EC', '12347', '(123) 456-7892', 
         'Mon-Sun: 10am-8pm', 'Phones,Tablets,Laptops,Accessories', 40.7140, -74.0080),
        ('Community E-Waste Center', '101 Community Lane', 'Eco City', 'EC', '12348', '(123) 456-7893', 
         'Wed-Sun: 9am-4pm', 'All Electronics,Batteries,Light Bulbs', 40.7150, -74.0090),
        ('County Environmental Services', '202 County Road', 'Eco City', 'EC', '12349', '(123) 456-7894', 
         'Mon-Fri: 8am-4pm', 'Large Appliances,TVs,Computers,Hazardous Waste', 40.7160, -74.0100)
    ]
    
    # Check if centers already exist
    cursor.execute("SELECT COUNT(*) FROM recycling_centers")
    count = cursor.fetchone()[0]
    
    if count == 0:
        cursor.executemany("""
        INSERT INTO recycling_centers 
        (name, address, city, state, zip_code, phone, hours, accepted_items, latitude, longitude)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, centers)
    
    # Create admin user if it doesn't exist
    cursor.execute("SELECT COUNT(*) FROM users WHERE email = 'admin@ecodispose.com'")
    count = cursor.fetchone()[0]
    
    if count == 0:
        from werkzeug.security import generate_password_hash
        admin_password = generate_password_hash('admin123')
        
        cursor.execute("""
        INSERT INTO users (name, email, password, is_admin, created_at)
        VALUES (%s, %s, %s, %s, NOW())
        """, ('Admin User', 'admin@ecodispose.com', admin_password, True))
    
    # Commit changes and close connection
    conn.commit()
    cursor.close()
    conn.close()
    
    print("Database setup completed successfully!")

if __name__ == "__main__":
    setup_database()

