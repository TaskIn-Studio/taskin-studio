import { FC } from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy — TaskIn Studio",
  description: "Privacy Policy for TaskIn Studio and its services.",
};

const PrivacyPolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <div className="prose prose-purple dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to TaskIn Studio. We respect your privacy and are committed
            to protecting your personal data. This privacy policy will inform
            you about how we look after your personal data when you visit our
            website and tell you about your privacy rights.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you:
          </p>
          <ul>
            <li>Identity Data: includes first name, last name, username</li>
            <li>Contact Data: includes email address</li>
            <li>
              Technical Data: includes internet protocol (IP) address, browser
              type and version
            </li>
            <li>
              Usage Data: includes information about how you use our website and
              services
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our service
            </li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>4. Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies to serve ads based on your prior visits
            to our website and other sites. You can opt out of personalized
            advertising by visiting Google's Ads Settings page.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at support@taskin.studio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
