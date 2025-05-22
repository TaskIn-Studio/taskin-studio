import { FC } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Terms of Service — Taskin Studio',
  description: 'Terms of Service for Taskin Studio and its services.',
};

const TermsOfService: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Terms of Service
        </h1>
        <div className="prose prose-purple dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using Taskin Studio, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use Taskin Studio for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of title, and
            under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on Taskin Studio</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Taskin Studio are provided on an 'as is' basis. Taskin Studio makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or other
            violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Taskin Studio or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on Taskin Studio.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Taskin Studio could include technical, typographical, or
            photographic errors. Taskin Studio does not warrant that any of the materials on its
            website are accurate, complete, or current. Taskin Studio may make changes to the
            materials contained on its website at any time without notice.
          </p>

          <h2>6. Links</h2>
          <p>
            Taskin Studio has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does
            not imply endorsement by Taskin Studio of the site. Use of any such linked website is
            at the user's own risk.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Taskin Studio may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current version
            of these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at
            support@taskin.studio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
