import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, Hotel, Car, UtensilsCrossed, Store, Briefcase, Building2, Bot,
  ArrowRight, Star, CheckCircle, Users, Globe, Zap, Shield
} from "lucide-react";
import { SiVisa, SiMastercard } from "react-icons/si";
import rewaLogo from "@assets/ChatGPT_Image_Dec_10,_2025,_12_06_48_AM_1765380204742.png";
import heroImage from "@assets/stock_images/modern_city_skyline__d91329ca.jpg";
import testimonial1 from "@assets/stock_images/happy_nigerian_afric_2ca49476.jpg";
import testimonial2 from "@assets/stock_images/happy_nigerian_afric_7bca4680.jpg";
import testimonial3 from "@assets/stock_images/happy_nigerian_afric_39288174.jpg";

const services = [
  { 
    name: "Flights", 
    description: "Book domestic and international flights at competitive prices",
    icon: Plane,
    href: "/services/flights",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
  },
  { 
    name: "Hotels", 
    description: "Find and book the perfect accommodation for your trips",
    icon: Hotel,
    href: "/services/hotels",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  },
  { 
    name: "Transport", 
    description: "Rides, car rentals, and logistics at your fingertips",
    icon: Car,
    href: "/services/transport",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
  },
  { 
    name: "Meals", 
    description: "Order delicious meals from local restaurants",
    icon: UtensilsCrossed,
    href: "/services/meals",
    color: "bg-red-500/10 text-red-600 dark:text-red-400"
  },
  { 
    name: "Marketplace", 
    description: "Discover products and services from verified vendors",
    icon: Store,
    href: "/services/marketplace",
    color: "bg-green-500/10 text-green-600 dark:text-green-400"
  },
  { 
    name: "SME Tools", 
    description: "Powerful tools to manage and grow your business",
    icon: Briefcase,
    href: "/services/sme-tools",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
  },
  { 
    name: "Government", 
    description: "Access government services, tax tools, and permits",
    icon: Building2,
    href: "/services/government",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
  },
  { 
    name: "AI Assistant", 
    description: "Get intelligent help with any service or question",
    icon: Bot,
    href: "/ai-assistant",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400"
  },
];

const stats = [
  { label: "Active Users", value: "500K+", icon: Users },
  { label: "Transactions", value: "2M+", icon: Zap },
  { label: "States Covered", value: "36+", icon: Globe },
  { label: "Verified Partners", value: "10K+", icon: Shield },
];

const testimonials = [
  {
    name: "Chidi Okoro",
    role: "Restaurant Owner, Lagos",
    image: testimonial1,
    content: "REWA has transformed how I manage my restaurant. The SME tools helped me double my customer base in just 3 months!",
    rating: 5,
  },
  {
    name: "Amina Mohammed",
    role: "Travel Enthusiast, Abuja",
    image: testimonial2,
    content: "Booking flights and hotels has never been easier. The AI assistant even helps me plan the perfect itinerary!",
    rating: 5,
  },
  {
    name: "Tunde Adeleke",
    role: "E-commerce Seller, Port Harcourt",
    image: testimonial3,
    content: "The marketplace feature connected me with thousands of customers I couldn't reach before. My sales are up 150%!",
    rating: 5,
  },
];

const partners = [
  "First Bank", "GTBank", "Flutterwave", "Paystack", "Interswitch",
  "Dana Air", "Air Peace", "Bolt", "Uber", "Jumia"
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#064F33]/90 via-[#064F33]/80 to-[#0AB39C]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center text-white lg:px-8">
          <div className="flex justify-center mb-8">
            <img 
              src={rewaLogo} 
              alt="REWA" 
              className="h-24 w-24 md:h-32 md:w-32 rounded-full shadow-2xl ring-4 ring-white/30" 
            />
          </div>
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            AI-Powered Ecosystem
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Everything. <span className="text-[#0AB39C]">One platform.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            AI-powered ecosystem connecting Nigerians to services, SMEs, and government tools. 
            Book flights, hotels, transport, order meals, shop the marketplace, and manage your business - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" data-testid="hero-link-get-started">
              <Button size="lg" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90 text-white px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services" data-testid="hero-link-explore">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                <stat.icon className="h-6 w-6 text-[#0AB39C] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need, <span className="text-[#0AB39C]">one ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From travel booking to business management, REWA brings together all essential services for modern Nigerian life.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.name} href={service.href} data-testid={`service-card-${service.name.toLowerCase()}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why REWA</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for <span className="text-[#0AB39C]">Nigeria's future</span>
              </h2>
              <div className="space-y-4">
                {[
                  "AI-powered recommendations tailored to your preferences",
                  "Secure payments with multiple payment options",
                  "24/7 customer support in multiple languages",
                  "Seamless integration with local banks and services",
                  "Real-time tracking and updates for all services",
                  "Business tools designed for Nigerian SMEs",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0AB39C] mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-8 inline-block" data-testid="link-learn-more">
                <Button className="bg-[#064F33] hover:bg-[#064F33]/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-[#064F33] to-[#0AB39C] p-8 md:p-12">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <img src={rewaLogo} alt="REWA" className="h-10 w-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-foreground">REWA Dashboard</p>
                        <p className="text-xs text-muted-foreground">Your command center</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-24 bg-gradient-to-r from-[#0AB39C]/20 to-[#064F33]/20 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Analytics Dashboard Preview</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-card rounded-lg border flex items-center justify-center">
                          <p className="text-xs text-muted-foreground">Bookings</p>
                        </div>
                        <div className="h-16 bg-card rounded-lg border flex items-center justify-center">
                          <p className="text-xs text-muted-foreground">Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by <span className="text-[#0AB39C]">thousands</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our users are saying about their experience with REWA.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/testimonials" data-testid="link-all-stories">
              <Button variant="outline">
                View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Trusted Partners
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Working with Nigeria's leading brands
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div 
                key={partner} 
                className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors"
                data-testid={`partner-${partner.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8 text-muted-foreground/50">
            <SiVisa className="h-8 w-auto" />
            <SiMastercard className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to experience the future?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join over 500,000 Nigerians who trust REWA for their daily needs. Get started for free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" data-testid="cta-link-get-started">
              <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90 px-8">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="cta-link-contact">
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
