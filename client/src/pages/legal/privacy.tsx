import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-white/90">
            Last updated: December 10, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="border-border/50">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                REWA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
              <p>
                We are compliant with the Nigeria Data Protection Regulation (NDPR) and are committed to ensuring that your privacy is protected.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <ul>
                <li>Name, email address, phone number</li>
                <li>Date of birth and gender</li>
                <li>Government-issued ID for verification</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Business information (for SME accounts)</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>Device information and identifiers</li>
                <li>IP address and location data</li>
                <li>Browser type and settings</li>
                <li>Usage data and interaction with our services</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Personalize your experience through AI-powered recommendations</li>
                <li>Detect, prevent, and address fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Partners necessary to complete transactions (airlines, hotels, etc.)</li>
                <li>Government authorities when required by law</li>
                <li>Business partners for joint offerings (with your consent)</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information, including encryption, secure servers, and regular security assessments.
              </p>

              <h2>Your Rights (NDPR)</h2>
              <p>Under the Nigeria Data Protection Regulation, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2>Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@rewa.ng</li>
                <li>Address: REWA Headquarters, Abia State, Nigeria</li>
                <li>Phone: +234 800 REWA NOW</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
