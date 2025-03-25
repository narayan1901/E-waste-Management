from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import yaml
import uuid
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure MySQL from environment variables
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', '')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'ewaste_db')
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# Secret key for session
app.secret_key = os.getenv('SECRET_KEY', 'your_secret_key')

# Initialize MySQL
mysql = MySQL(app)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/drop-off-locations')
def drop_off_locations():
    # Get locations from database
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM recycling_centers ORDER BY name")
    locations = cur.fetchall()
    cur.close()
    
    return render_template('drop_off_locations.html', locations=locations)

@app.route('/request-pickup', methods=['GET', 'POST'])
def request_pickup():
    if request.method == 'POST':
        try:
            # Get form data
            name = request.form['name']
            email = request.form['email']
            phone = request.form['phone']
            address = request.form['address']
            city = request.form['city']
            state = request.form['state']
            zip_code = request.form['zip_code']
            pickup_date = request.form['pickup_date']
            item_type = request.form['item_type']
            item_description = request.form['item_description']
            
            # Generate unique ID
            request_id = str(uuid.uuid4())
            
            # Insert into database
            cur = mysql.connection.cursor()
            cur.execute("""
                INSERT INTO pickup_requests 
                (id, name, email, phone, address, city, state, zip_code, 
                 pickup_date, item_type, item_description, status, created_at) 
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, (
                request_id, name, email, phone, address, city, state, zip_code,
                pickup_date, item_type, item_description, 'pending', datetime.now()
            ))
            mysql.connection.commit()
            cur.close()
            
            flash('Your pickup request has been submitted successfully!', 'success')
            return redirect(url_for('request_pickup'))
        except Exception as e:
            # Log the error
            print(f"Error submitting pickup request: {str(e)}")
            flash('An error occurred while submitting your request. Please try again.', 'danger')
            return redirect(url_for('request_pickup'))
            
    # Pass today's date to the template for the date picker min attribute
    today = datetime.now().strftime('%Y-%m-%d')
    return render_template('request_pickup.html', today=today)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", [email])
        user = cur.fetchone()
        cur.close()
        
        if user and check_password_hash(user['password'], password):
            session['logged_in'] = True
            session['user_id'] = user['id']
            session['user_email'] = user['email']
            session['is_admin'] = user['is_admin']
            
            flash('You are now logged in', 'success')
            
            if user['is_admin']:
                return redirect(url_for('admin_dashboard'))
            else:
                return redirect(url_for('user_dashboard'))
        else:
            flash('Invalid login credentials', 'danger')
            
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out', 'success')
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        
        if password != confirm_password:
            flash('Passwords do not match', 'danger')
            return redirect(url_for('register'))
        
        # Check if email already exists
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", [email])
        user = cur.fetchone()
        
        if user:
            flash('Email already exists', 'danger')
            cur.close()
            return redirect(url_for('register'))
        
        # Hash password
        hashed_password = generate_password_hash(password)
        
        # Insert new user
        cur.execute("""
            INSERT INTO users (name, email, password, is_admin, created_at) 
            VALUES (%s, %s, %s, %s, %s)
        """, (name, email, hashed_password, False, datetime.now()))
        mysql.connection.commit()
        cur.close()
        
        flash('You are now registered and can log in', 'success')
        return redirect(url_for('login'))
        
    return render_template('register.html')

@app.route('/user-dashboard')
def user_dashboard():
    if 'logged_in' not in session:
        flash('Please login first', 'danger')
        return redirect(url_for('login'))
    
    # Get user's pickup requests
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM pickup_requests WHERE email = %s ORDER BY created_at DESC", [session['user_email']])
    requests = cur.fetchall()
    cur.close()
    
    return render_template('user_dashboard.html', requests=requests)

@app.route('/admin-dashboard')
def admin_dashboard():
    if 'logged_in' not in session or not session.get('is_admin'):
        flash('Unauthorized access', 'danger')
        return redirect(url_for('login'))
    
    # Get all pickup requests
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM pickup_requests ORDER BY created_at DESC")
    requests = cur.fetchall()
    
    # Get counts by status
    cur.execute("""
        SELECT status, COUNT(*) as count FROM pickup_requests GROUP BY status
    """)
    status_counts = cur.fetchall()
    
    # Convert to dict for easier access
    counts = {
        'pending': 0,
        'scheduled': 0,
        'completed': 0,
        'cancelled': 0
    }
    
    for item in status_counts:
        counts[item['status']] = item['count']
    
    # Get total count
    cur.execute("SELECT COUNT(*) as total FROM pickup_requests")
    total = cur.fetchone()['total']
    
    cur.close()
    
    return render_template('admin_dashboard.html', 
                          requests=requests, 
                          counts=counts,
                          total=total)

@app.route('/update-request-status', methods=['POST'])
def update_request_status():
    if 'logged_in' not in session or not session.get('is_admin'):
        return jsonify({'success': False, 'message': 'Unauthorized'}), 403
    
    request_id = request.form['request_id']
    status = request.form['status']
    
    cur = mysql.connection.cursor()
    cur.execute("UPDATE pickup_requests SET status = %s WHERE id = %s", (status, request_id))
    mysql.connection.commit()
    cur.close()
    
    return jsonify({'success': True})

# Add this route to test database connection
@app.route('/test-db')
def test_db():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT 1")
        result = cur.fetchone()
        cur.close()
        return "Database connection successful!"
    except Exception as e:
        return f"Database connection failed: {str(e)}"

# Run the app
if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, render_template, request, jsonify
# from flask_mysqldb import MySQL
# from werkzeug.security import generate_password_hash, check_password_hash
# import uuid
# from datetime import datetime
# import os
# from dotenv import load_dotenv

# # Load environment variables
# load_dotenv()

# app = Flask(__name__)

# # Configure MySQL from environment variables
# app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
# app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
# app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', '')
# app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'ewaste_db')
# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# mysql = MySQL(app)

# @app.route('/request-pickup', methods=['POST'])
# def request_pickup():
#     try:
#         data = request.get_json()
#         request_id = str(uuid.uuid4())
        
#         # Extract form data safely
#         name = data.get('name')
#         email = data.get('email')
#         phone = data.get('phone')
#         address = data.get('address')
#         city = data.get('city')
#         state = data.get('state')
#         zip_code = data.get('zip_code')
#         pickup_date = data.get('pickup_date')
#         item_type = data.get('item_type')
#         item_description = data.get('item_description')
        
#         if not all([name, email, phone, address, city, state, zip_code, pickup_date, item_type, item_description]):
#             return jsonify({"error": "All fields are required"}), 400
        
#         cur = mysql.connection.cursor()
#         query = '''INSERT INTO pickup_requests (id, name, email, phone, address, city, state, zip_code, pickup_date, item_type, item_description, status, created_at) 
#                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''
        
#         cur.execute(query, (request_id, name, email, phone, address, city, state, zip_code, pickup_date, item_type, item_description, 'pending', datetime.now()))
#         mysql.connection.commit()
#         cur.close()
        
#         return jsonify({"message": "Pickup request submitted successfully", "request_id": request_id}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
