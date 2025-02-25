import SectionTitle from "../Common/SectionTitle";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <SectionTitle
          title="Privacy Policy for Accotomate"
          paragraph=""
          center
          mb="40px"
        />


        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600">
            At Accotomate, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us. By using our website, you agree to the terms outlined below.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, business name, and other details you provide when contacting us or signing up for our services.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type, operating system, and other details collected through cookies and analytics tools.
            </li>
            <li>
              <strong>Financial Information:</strong> Limited details required for invoicing or payment processing if you engage in our services.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provide and improve our bookkeeping, automation, and tax services.</li>
            <li>Respond to your inquiries and communicate about our offerings.</li>
            <li>Process payments securely and manage your account.</li>
            <li>Send updates, newsletters, or promotional material (only with your consent).</li>
            <li>Analyze website usage to enhance user experience and functionality.</li>
          </ul>
        </div>

        {/* Sharing Your Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-600 mb-4">
            We will never sell or rent your personal information. We may share your data:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>With trusted third-party service providers for payment processing, email delivery, or analytics.</li>
            <li>To comply with legal obligations or respond to lawful requests.</li>
            <li>To protect our rights, privacy, safety, or property.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-600">
            We implement advanced security measures, including encryption and secure servers, to protect your data. However, no system is entirely foolproof, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Cookies and Tracking Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            Our website uses cookies to improve functionality and analyze site traffic. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving marketing communications.</li>
            <li>Restrict or object to certain data processing activities.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            To exercise these rights, contact us at <a href="mailto:Maryam@accotomate.com" className="text-blue-600 hover:underline">Maryam@accotomate.com</a>.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and recommend reviewing their policies.
          </p>
        </div>

        {/* Updates to This Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy periodically. Changes will be posted on this page, and the &quot;Effective Date&quot; will be updated accordingly.
          </p>

        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For questions or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:Maryam@accotomate.com" className="text-blue-600 hover:underline">Maryam@accotomate.com</a>
          </p>
          {/* <p className="text-gray-600">
            Address: [Insert Business Address]
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;