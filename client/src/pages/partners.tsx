import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Handshake, ArrowRight, CheckCircle, Zap, Shield, Globe, TrendingUp, Users, Code } from "lucide-react";
import partnersImage from "@assets/stock_images/modern_office_team_c_4f4b26bb.jpg";

const partnerCategories = [
  { name: "Banks & Fintech", count: 15, examples: ["First Bank", "GTBank", "Flutterwave", "Paystack"] },
  { name: "Airlines", count: 6, examples: ["Air Peace", "Dana Air", "Ibom Air", "Green Africa"] },
  { name: "Transport", count: 8, examples: ["Bolt", "Uber", "InDrive", "Gokada"] },
  { name: "Logistics", count: 12, examples: ["GIG Logistics", "Kwik", "Sendbox", "Kobo360"] },
  { name: "Government", count: 5, examples: ["FIRS", "CAC", "NIMC"] },
  { name: "Technology", count: 10, examples: ["AWS", "Google Cloud", "Microsoft Azure"] },
];

const benefits = [
  {
    icon: Users,
    title: "Access Millions of Users",
    description: "Reach our growing base of over 500,000 active users across Nigeria.",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Our APIs make it easy to connect your services to the REWA ecosystem.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.",
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "Benefit from our marketing reach and expand your customer base.",
  },
];

const integrationSteps = [
  { step: 1, title: "Apply", description: "Submit your partnership application" },
  { step: 2, title: "Review", description: "Our team evaluates your proposal" },
  { step: 3, title: "Onboard", description: "Technical integration and testing" },
  { step: 4, title: "Launch", description: "Go live on the REWA platform" },
];

export default function Partners() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#064F33] to-[#0AB39C]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Partners & Integrations
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build with <span className="text-white/90">REWA</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Join our ecosystem of trusted partners. Integrate your services, reach millions of users, 
                and grow your business alongside Nigeria's leading multi-service platform.
              </p>
              <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90" data-testid="button-become-partner">
                Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={partnersImage} alt="Partners" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Partners</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by <span className="text-[#0AB39C]">industry leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with the best companies across banking, travel, logistics, and government sectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((category) => (
              <Card key={category.name} className="border-border/50" data-testid={`partner-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                    <Badge variant="secondary">{category.count} partners</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((partner) => (
                      <span key={partner} className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {partner}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Partner With Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership <span className="text-[#0AB39C]">benefits</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center border-border/50" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="outline" className="mb-4">For Developers</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Easy API <span className="text-[#0AB39C]">integration</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our well-documented APIs make it simple to integrate your services with REWA. 
                From payments to bookings, we provide everything you need.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "RESTful APIs with comprehensive documentation",
                  "Webhooks for real-time event notifications",
                  "Sandbox environment for testing",
                  "Dedicated technical support team",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0AB39C] flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-[#064F33] hover:bg-[#064F33]/90" data-testid="button-view-api-docs">
                <Code className="mr-2 h-4 w-4" /> View API Documentation
              </Button>
            </div>
            <Card className="border-border/50 shadow-xl overflow-hidden">
              <div className="bg-[#1e1e1e] p-4 text-sm font-mono">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-green-400 overflow-x-auto">
{`// REWA API Example
const response = await fetch(
  'https://api.rewa.ng/v1/bookings',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'flight',
      from: 'LOS',
      to: 'ABV',
      date: '2024-03-15'
    })
  }
);

const data = await response.json();
console.log(data.booking_id);`}
                </pre>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership <span className="text-[#0AB39C]">process</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {integrationSteps.map((step, index) => (
              <div key={step.step} className="text-center" data-testid={`integration-step-${step.step}`}>
                <div className="relative">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  {index < integrationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Handshake className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to partner?
            </h2>
            <p className="text-lg text-white/90">
              Fill out the form below and our partnerships team will get in touch.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <form className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company Name</Label>
                  <Input id="company" placeholder="Your company" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" data-testid="input-company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Contact Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input id="phone" placeholder="+234..." className="bg-white/10 border-white/20 text-white placeholder:text-white/50" data-testid="input-phone" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-white">Partnership Proposal</Label>
                  <Textarea id="message" placeholder="Tell us about your company and how you'd like to partner with REWA..." className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32" data-testid="input-message" />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-white text-[#064F33] hover:bg-white/90" data-testid="button-submit-partnership">
                    Submit Partnership Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
