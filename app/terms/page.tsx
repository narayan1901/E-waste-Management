
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const TermsOfService = () => {
//   const [accepted, setAccepted] = useState(false);

//   return (
//     <section className="p-12 bg-gray-100 text-gray-800">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-green-700">Terms of Service</h2>
//         <p className="text-lg text-gray-600 mt-4">
//           Please read our Terms of Service carefully before using our e-waste management platform.
//         </p>

//         {/* Terms Content Box */}
//         <div className="mt-6 p-6 bg-white shadow-md rounded-lg max-h-60 overflow-y-auto text-left border border-gray-300">
//           <h3 className="text-xl font-semibold text-green-700">1. Acceptance of Terms</h3>
//           <p className="text-gray-700 mt-2">
//             By using our platform, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.
//           </p>

//           <h3 className="text-xl font-semibold text-green-700 mt-4">2. Proper Disposal</h3>
//           <p className="text-gray-700 mt-2">
//             Users must ensure that all e-waste provided for disposal is legal and does not contain hazardous substances beyond permissible limits.
//           </p>

//           <h3 className="text-xl font-semibold text-green-700 mt-4">3. No Liability for Data</h3>
//           <p className="text-gray-700 mt-2">
//             We are not responsible for any personal or business data left on electronic devices. Please ensure data is removed before disposal.
//           </p>

//           <h3 className="text-xl font-semibold text-green-700 mt-4">4. Recycling Process</h3>
//           <p className="text-gray-700 mt-2">
//             We follow industry-standard recycling practices, but we do not guarantee the resale, refurbishment, or reuse of e-waste materials.
//           </p>

//           <h3 className="text-xl font-semibold text-green-700 mt-4">5. Changes to Terms</h3>
//           <p className="text-gray-700 mt-2">
//             We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification.
//           </p>
//         </div>

//         {/* Accept Terms Checkbox */}
//         <div className="mt-6 flex items-center justify-center">
//           <input
//             type="checkbox"
//             id="acceptTerms"
//             checked={accepted}
//             onChange={() => setAccepted(!accepted)}
//             className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
//           />
//           <label htmlFor="acceptTerms" className="ml-3 text-gray-700 text-lg">
//             I agree to the Terms of Service
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6">
//           <button
//             className={`px-6 py-3 text-lg font-semibold rounded-lg transition ${
//               accepted
//                 ? "bg-green-600 text-white hover:bg-green-700"
//                 : "bg-gray-400 text-gray-200 cursor-not-allowed"
//             }`}
//             disabled={!accepted}
//           >
//             Continue
//           </button>
//         </div>

//         {/* Link to Home Page */}
//         <div className="mt-6">

//           <Link href="">
//             <span className="text-green-600 hover:underline text-lg">
//               Back to Home
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TermsOfService;



"use client";
import React from "react";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <section className="p-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-700">Terms of Service</h2>
        <p className="text-lg text-gray-600 mt-4">
          Please read our Terms of Service carefully before using our e-waste management platform.
        </p>

        {/* Terms Content Box */}
        <div className="mt-6 p-6 bg-white shadow-md rounded-lg max-h-96 overflow-y-auto text-left border border-gray-300">
          <h3 className="text-xl font-semibold text-green-700">1. Acceptance of Terms</h3>
          <p className="text-gray-700 mt-2">
            By using our platform, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-4">2. Proper Disposal</h3>
          <p className="text-gray-700 mt-2">
            Users must ensure that all e-waste provided for disposal is legal and does not contain hazardous substances beyond permissible limits.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-4">3. No Liability for Data</h3>
          <p className="text-gray-700 mt-2">
            We are not responsible for any personal or business data left on electronic devices. Please ensure data is removed before disposal.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-4">4. Recycling Process</h3>
          <p className="text-gray-700 mt-2">
            We follow industry-standard recycling practices, but we do not guarantee the resale, refurbishment, or reuse of e-waste materials.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-4">5. Changes to Terms</h3>
          <p className="text-gray-700 mt-2">
            We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification.
          </p>
        </div>

        {/* Link to Home Page */}
        <div className="mt-6">
          <Link href="/">
            <span className="text-green-600 hover:underline text-lg">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
