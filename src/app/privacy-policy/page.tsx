import { FC } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Privacy Policy - Taskin Studio',
  description: 'Privacy Policy for Taskin Studio - Learn how we collect, use, and protect your data.',
};

const PrivacyPolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-none shadow-none">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold">Privacy Policy for Taskin Studio</CardTitle>
          <p className="text-muted-foreground italic">Last Updated: May 16, 2025</p>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Taskin Studio ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website (https://taskin.studio)
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Data We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Usage data (how you interact with our tools)</li>
                  <li>Technical data (browser type, device information)</li>
                  <li>Analytics data (pages visited, time spent)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Time zone setting</li>
                  <li>Browser plug-in types and versions</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">How We Use Your Data</h2>
            <p className="text-muted-foreground">We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information.
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service may contain links to third-party websites and services that are not operated by us.
              We strongly advise you to review the Privacy Policy of every site you visit.
              We have no control over and assume no responsibility for the content, privacy policies,
              or practices of any third-party sites or services.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
              used, or accessed in an unauthorized way, altered, or disclosed.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Your Rights Under Indian Law</h2>
            <p className="text-muted-foreground">
              Under the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules, 2011, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Right to access your personal data</li>
              <li>Right to correct your personal data</li>
              <li>Right to withdraw consent</li>
              <li>Right to file a complaint with the appropriate authority</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service does not address anyone under the age of 13.
              We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time.
              We will notify you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
            <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>By email: support@taskin.studio</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
