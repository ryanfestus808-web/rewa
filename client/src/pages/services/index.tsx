import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Hotel, Car, UtensilsCrossed, Store, Briefcase, Building2, Bot, ArrowRight } from "lucide-react";

const services = [
  { 
    name: "Flight Booking", 
    description: "Book domestic and international flights with competitive prices, flexible options, and instant confirmation. Compare airlines and find the best deals.",
    icon: Plane,
    href: "/services/flights",
    color: "bg-blue-500",
    features: ["Price comparison", "Instant booking", "E-tickets", "24/7 support"]
  },
  { 
    name: "Hotel Booking", 
    description: "Find and book accommodation across Nigeria and beyond. From budget stays to luxury hotels, we have options for every traveler.",
    icon: Hotel,
    href: "/services/hotels",
    color: "bg-purple-500",
    features: ["Best price guarantee", "Free cancellation", "Verified reviews", "Loyalty rewards"]
  },
  { 
    name: "Transport & Rides", 
    description: "Get rides, book car rentals, or arrange logistics services. Convenient transportation at your fingertips whenever you need it.",
    icon: Car,
    href: "/services/transport",
    color: "bg-orange-500",
    features: ["Real-time tracking", "Multiple vehicles", "Scheduled rides", "Safe drivers"]
  },
  { 
    name: "Meals Ordering", 
    description: "Order delicious meals from top restaurants in your area. Fast delivery, live tracking, and a wide variety of cuisines to choose from.",
    icon: UtensilsCrossed,
    href: "/services/meals",
    color: "bg-red-500",
    features: ["Live tracking", "Multiple cuisines", "Special offers", "Scheduled delivery"]
  },
  { 
    name: "Marketplace", 
    description: "Discover products and services from verified Nigerian vendors. Shop securely with buyer protection and multiple payment options.",
    icon: Store,
    href: "/services/marketplace",
    color: "bg-green-500",
    features: ["Verified sellers", "Secure payments", "Buyer protection", "Easy returns"]
  },
  { 
    name: "SME Tools", 
    description: "Powerful business management tools designed for Nigerian entrepreneurs. Invoicing, analytics, payment processing, and AI-powered insights.",
    icon: Briefcase,
    href: "/services/sme-tools",
    color: "bg-indigo-500",
    features: ["Invoicing", "Analytics dashboard", "Payment gateway", "AI insights"]
  },
  { 
    name: "Government Services", 
    description: "Access government services digitally. Tax filing, permit applications, license renewals, and document verification made easy.",
    icon: Building2,
    href: "/services/government",
    color: "bg-teal-500",
    features: ["Tax services", "Permit applications", "Document upload", "Status tracking"]
  },
  { 
    name: "AI Assistant", 
    description: "Get intelligent help with any service or question. Our AI understands your needs and provides personalized recommendations.",
    icon: Bot,
    href: "/ai-assistant",
    color: "bg-pink-500",
    features: ["Natural language", "Smart recommendations", "24/7 available", "Multi-service help"]
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need, <span className="text-white/90">one platform</span>
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
            From booking flights and hotels to managing your business and accessing government services - 
            REWA brings together all essential services for modern Nigerian life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.name} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow" data-testid={`service-card-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`${service.color} p-6 md:p-8 flex items-center justify-center md:w-1/3`}>
                      <service.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Link href={service.href} data-testid={`link-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90">
                          Explore <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Create your free REWA account and unlock access to all services.
          </p>
          <Link href="/get-started" data-testid="services-cta-get-started">
            <Button size="lg" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90 px-8">
              Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
