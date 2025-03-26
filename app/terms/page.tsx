
"use client";
import React from "react";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <section className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-500">Terms of Service</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Please read our Terms of Service carefully before using our e-waste management platform.
        </p>

        {/* Terms Content Box */}
        <div className="mt-6 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg max-h-96 overflow-y-auto text-left border border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-500">1. Acceptance of Terms</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            By using our platform, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h3 className="text-xl font-semibold text-green-700 dark:text-green-500 mt-4">2. Proper Disposal</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Users must ensure that all e-waste provided for disposal is legal and does not contain hazardous substances beyond permissible limits.
          </p>

          <h3 className="text-xl font-semibold text-green-700 dark:text-green-500 mt-4">3. No Liability for Data</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            We are not responsible for any personal or business data left on electronic devices. Please ensure data is removed before disposal.
          </p>

          <h3 className="text-xl font-semibold text-green-700 dark:text-green-500 mt-4">4. Recycling Process</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            We follow industry-standard recycling practices, but we do not guarantee the resale, refurbishment, or reuse of e-waste materials.
          </p>

          <h3 className="text-xl font-semibold text-green-700 dark:text-green-500 mt-4">5. Changes to Terms</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification.
          </p>
        </div>

        {/* Link to Home Page */}
        <div className="mt-6">
          <Link href="/">
            <span className="text-green-600 dark:text-green-400 hover:underline text-lg">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
