import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-lg text-white/90">
            Last updated: December 10, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="border-border/50">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using REWA's platform and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>Description of Services</h2>
              <p>
                REWA provides an AI-powered multi-service ecosystem platform that includes:
              </p>
              <ul>
                <li>Flight and hotel booking services</li>
                <li>Transport and ride-hailing services</li>
                <li>Meal ordering and food delivery</li>
                <li>E-commerce marketplace</li>
                <li>SME business tools and analytics</li>
                <li>Government services integration</li>
                <li>AI-powered assistant</li>
              </ul>

              <h2>User Accounts</h2>
              <p>
                To access certain features, you must create an account. You agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2>Payment Terms</h2>
              <p>
                By making a purchase through REWA, you agree to:
              </p>
              <ul>
                <li>Pay all fees and charges at the prices in effect when incurred</li>
                <li>Provide valid payment information</li>
                <li>Authorize us to charge your payment method</li>
              </ul>
              <p>
                All payments are processed securely through our payment partners. Prices are displayed in Nigerian Naira (₦) unless otherwise stated.
              </p>

              <h2>Booking and Cancellation</h2>
              <p>
                Booking terms vary by service:
              </p>
              <ul>
                <li><strong>Flights:</strong> Subject to airline terms and conditions. Cancellation policies vary by fare type.</li>
                <li><strong>Hotels:</strong> Cancellation policies vary by property. Free cancellation available on select bookings.</li>
                <li><strong>Transport:</strong> Cancellations may incur fees if made after driver dispatch.</li>
                <li><strong>Meals:</strong> Orders cannot be cancelled once confirmed by the restaurant.</li>
              </ul>

              <h2>Marketplace Terms</h2>
              <p>For marketplace transactions:</p>
              <ul>
                <li>REWA acts as an intermediary between buyers and sellers</li>
                <li>Sellers are responsible for their product listings and fulfillment</li>
                <li>Buyers are protected by our buyer protection policy</li>
                <li>Disputes will be handled according to our dispute resolution process</li>
              </ul>

              <h2>SME Tools</h2>
              <p>
                Business users accessing SME tools agree to:
              </p>
              <ul>
                <li>Provide accurate business information</li>
                <li>Comply with all applicable Nigerian business laws</li>
                <li>Use the tools for legitimate business purposes only</li>
                <li>Maintain accurate financial records</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All content on REWA, including logos, designs, text, and software, is the property of REWA or its licensors and is protected by intellectual property laws.
              </p>

              <h2>Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the platform for illegal purposes</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Transmit viruses or malicious code</li>
                <li>Engage in fraudulent activities</li>
                <li>Violate the rights of others</li>
                <li>Interfere with the proper working of the platform</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, REWA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless REWA and its affiliates from any claims, damages, or expenses arising from your violation of these terms or your use of our services.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform constitutes acceptance of the modified terms.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: legal@rewa.ng</li>
                <li>Address: REWA Headquarters, Abia State, Nigeria</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
