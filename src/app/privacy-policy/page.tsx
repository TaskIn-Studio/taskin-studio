export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>Welcome to Taskin Studio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.</p>

        <h2>1. INFORMATION WE COLLECT</h2>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following: email address, name, and usage data.</p>

        <h2>2. HOW WE USE YOUR INFORMATION</h2>
        <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>To respond to user inquiries/offer support to users.</li>
          <li>To send you marketing and promotional communications.</li>
        </ul>

        <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h2>4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>

        <h2>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>

        <h2>6. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

        <h2>7. UPDATES TO THIS NOTICE</h2>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.</p>

        <h2>8. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments about this notice, you may email us at [contact@taskin.studio]</p>
      </div>
    </div>
  );
}
