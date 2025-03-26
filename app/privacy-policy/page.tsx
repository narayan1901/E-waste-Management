"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function PrivacyPolicy() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

    return (
        <div className={`min-h-screen p-6 transition-colors duration-300 ${
            currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}>
            <h1 className={`text-3xl font-bold ${
                currentTheme === "dark" ? "text-green-300" : "text-green-700"
            }`}>Privacy Policy</h1>
            <p className="mt-2">Effective Date: [Insert Date]</p>
            
            <section className="mt-4">
                <h2 className="text-2xl font-semibold">1. Introduction</h2>
                <p>Welcome to [Your Company]! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.</p>
            </section>
            
            <section className="mt-4">
                <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                <ul className="list-disc ml-6">
                    <li><strong>Personal Information:</strong> Name, email, phone number, and address.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, and device information.</li>
                    <li><strong>Transaction Data:</strong> Pickup requests, drop-off locations, and payment details.</li>
                </ul>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
                <p>We use the collected information to provide and improve our services, process requests, and ensure security.</p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">4. Data Sharing and Security</h2>
                <p>We do not sell or rent your personal information. We may share it with third-party service providers for operational purposes while ensuring strict confidentiality. We implement security measures to protect your data from unauthorized access.</p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">5. Cookies and Tracking Technologies</h2>
                <p>We use cookies to enhance user experience, analyze website traffic, and personalize content. You can manage cookie preferences in your browser settings.</p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
                <p>You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.</p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.</p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl font-semibold">8. Contact Us</h2>
                <p>If you have any questions, contact us at [Your Contact Email].</p>
            </section>
        </div>
    );
}
