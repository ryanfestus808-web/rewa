import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Cookies() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-lg text-white/90">
            Last updated: December 10, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="border-border/50">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
              </p>

              <h2>How We Use Cookies</h2>
              <p>REWA uses cookies for the following purposes:</p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the platform to function properly. They enable core functionality such as:
              </p>
              <ul>
                <li>User authentication and session management</li>
                <li>Security features</li>
                <li>Remembering items in your cart</li>
                <li>Processing transactions</li>
              </ul>
              <p>You cannot opt out of essential cookies as they are required for the platform to work.</p>

              <h3>Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our platform by collecting anonymous information:
              </p>
              <ul>
                <li>Pages visited and time spent</li>
                <li>Error messages encountered</li>
                <li>Loading times and performance metrics</li>
              </ul>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies remember your preferences and choices:
              </p>
              <ul>
                <li>Language preferences</li>
                <li>Theme settings (light/dark mode)</li>
                <li>Previously viewed items</li>
                <li>Search history</li>
              </ul>

              <h3>Targeting/Advertising Cookies</h3>
              <p>
                These cookies are used to deliver relevant advertisements:
              </p>
              <ul>
                <li>Track which ads you've seen</li>
                <li>Limit repetitive advertisements</li>
                <li>Measure campaign effectiveness</li>
                <li>Personalize ad content</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                We use cookies from trusted third-party services including:
              </p>
              <ul>
                <li><strong>Analytics:</strong> Google Analytics to understand user behavior</li>
                <li><strong>Payments:</strong> Paystack and Flutterwave for secure transactions</li>
                <li><strong>Chat:</strong> Support chat functionality</li>
                <li><strong>Social Media:</strong> Sharing features on social platforms</li>
              </ul>

              <h2>Managing Cookies</h2>
              <p>
                You can control and manage cookies in several ways:
              </p>
              <h3>Browser Settings</h3>
              <p>
                Most browsers allow you to view, delete, and block cookies. Instructions vary by browser:
              </p>
              <ul>
                <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
                <li>Firefox: Options &gt; Privacy & Security &gt; Cookies</li>
                <li>Safari: Preferences &gt; Privacy &gt; Cookies</li>
                <li>Edge: Settings &gt; Privacy & Security &gt; Cookies</li>
              </ul>

              <h3>Opt-Out Tools</h3>
              <p>
                You can opt out of targeted advertising through:
              </p>
              <ul>
                <li>Digital Advertising Alliance: www.aboutads.info</li>
                <li>Network Advertising Initiative: www.networkadvertising.org</li>
              </ul>

              <h2>Cookie Retention</h2>
              <p>
                Cookie retention periods vary:
              </p>
              <ul>
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until expiration date or deletion</li>
                <li><strong>Authentication cookies:</strong> Valid for 30 days</li>
                <li><strong>Preference cookies:</strong> Valid for 1 year</li>
              </ul>

              <h2>Impact of Disabling Cookies</h2>
              <p>
                Disabling certain cookies may affect your experience:
              </p>
              <ul>
                <li>You may need to log in more frequently</li>
                <li>Some features may not work properly</li>
                <li>Your preferences may not be remembered</li>
                <li>Content may be less personalized</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@rewa.ng</li>
                <li>Address: REWA Headquarters, Abia State, Nigeria</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
