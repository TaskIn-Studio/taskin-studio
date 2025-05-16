import { FC } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Terms of Service - Taskin Studio',
  description: 'Terms of Service for Taskin Studio - Learn about the terms and conditions for using our services.',
};

const TermsOfService: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-none shadow-none">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold">Terms of Service for Taskin Studio</CardTitle>
          <p className="text-muted-foreground italic">Last Updated: May 16, 2025</p>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Taskin Studio's website and services (collectively, the "Service"),
              you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part
              of the terms, you may not access the Service.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Taskin Studio provides utility tools and services including but not limited to currency converters,
              AI generators, and other developer tools. These services may be free or offered under a freemium model.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Use of Service</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Acceptable Use</h3>
                <p className="text-muted-foreground mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the Service in any way that violates any applicable law or regulation</li>
                  <li>Use the Service for any harmful or malicious purpose</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Third-Party APIs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Some of our tools may utilize third-party APIs and services. We are not responsible for the availability,
                  accuracy, or reliability of these third-party services.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content, features, and functionality are owned by Taskin Studio and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              IN NO EVENT SHALL TASKIN STUDIO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
              LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material,
              we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard
              to its conflict of law provisions. Any disputes relating to these Terms or the Service will be subject
              to the exclusive jurisdiction of the courts of India.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Future Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may introduce new features, services, or payment options in the future. These will be subject to
              these Terms and any additional terms that may be provided at the time of their introduction.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Contact Information</h2>
            <p className="text-muted-foreground">For any questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>By email: support@taskin.studio</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision shall be changed
              and interpreted to accomplish the objectives of such provision to the greatest extent possible under
              applicable law, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
