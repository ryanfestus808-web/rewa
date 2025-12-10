import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, X, ArrowRight, Zap, Users, Building2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for individuals and small businesses getting started",
    price: { monthly: 0, annual: 0 },
    icon: Zap,
    popular: false,
    features: [
      { name: "Access to all booking services", included: true },
      { name: "Marketplace access", included: true },
      { name: "Basic AI assistant", included: true },
      { name: "Up to 5 invoices/month", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
      { name: "API access", included: false },
      { name: "Custom branding", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started Free",
  },
  {
    name: "Premium",
    description: "For growing SMEs who need more power and features",
    price: { monthly: 9999, annual: 7999 },
    icon: Users,
    popular: true,
    features: [
      { name: "Access to all booking services", included: true },
      { name: "Marketplace access", included: true },
      { name: "Advanced AI assistant", included: true },
      { name: "Unlimited invoices", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Custom branding", included: false },
      { name: "Dedicated account manager", included: false },
      { name: "White-label solution", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: { monthly: null, annual: null },
    icon: Building2,
    popular: false,
    features: [
      { name: "Access to all booking services", included: true },
      { name: "Marketplace access", included: true },
      { name: "Custom AI solutions", included: true },
      { name: "Unlimited everything", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Full API access", included: true },
      { name: "Custom branding", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "White-label solution", included: true },
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "Is there a free trial for Premium?",
    answer: "Yes, we offer a 14-day free trial of our Premium plan. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and mobile money payments including Paystack and Flutterwave.",
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund.",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, transparent <span className="text-white/90">pricing</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your needs. Start free, upgrade when you grow.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="billing-toggle" className={!isAnnual ? "font-semibold" : "text-white/70"}>Monthly</Label>
            <Switch 
              id="billing-toggle" 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              data-testid="switch-billing-toggle"
            />
            <Label htmlFor="billing-toggle" className={isAnnual ? "font-semibold" : "text-white/70"}>
              Annual <Badge className="ml-2 bg-white/20">Save 20%</Badge>
            </Label>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-background -mt-16 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative border-2 ${plan.popular ? "border-[#0AB39C] shadow-xl" : "border-border/50"}`}
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0AB39C]">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    {plan.price.monthly !== null ? (
                      <>
                        <span className="text-4xl font-bold text-foreground">
                          ₦{(isAnnual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                        {isAnnual && plan.price.annual > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Billed annually (₦{(plan.price.annual * 12).toLocaleString()}/year)
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-foreground">Custom Pricing</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-[#0AB39C] flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.name === "Enterprise" ? "/contact" : "/get-started"} data-testid={`cta-${plan.name.toLowerCase()}`}>
                    <Button 
                      className={`w-full ${plan.popular ? "bg-[#0AB39C] hover:bg-[#0AB39C]/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta} {plan.name !== "Enterprise" && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently asked <span className="text-[#0AB39C]">questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50" data-testid={`faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join thousands of Nigerian businesses using REWA. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" data-testid="pricing-cta-get-started">
              <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90 px-8">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="pricing-cta-contact">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
