import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ArrowRight, TrendingUp } from "lucide-react";
import testimonial1 from "@assets/stock_images/happy_nigerian_afric_2ca49476.jpg";
import testimonial2 from "@assets/stock_images/happy_nigerian_afric_7bca4680.jpg";
import testimonial3 from "@assets/stock_images/happy_nigerian_afric_39288174.jpg";
import smeImage from "@assets/stock_images/small_business_owner_19d741f5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Chidi Okoro",
    role: "Restaurant Owner",
    company: "Mama Chidi's Kitchen",
    location: "Lagos",
    image: testimonial1,
    content: "REWA transformed how I manage my restaurant. The SME tools helped me track inventory, manage orders, and even get AI-powered recommendations for menu pricing. My customer base has doubled in just 3 months!",
    rating: 5,
    metrics: { label: "Revenue Growth", value: "+120%" },
    category: "SME",
  },
  {
    id: 2,
    name: "Amina Mohammed",
    role: "Frequent Traveler",
    company: "Tech Professional",
    location: "Abuja",
    image: testimonial2,
    content: "I travel between Lagos and Abuja every week for work. REWA makes it so easy to book flights and hotels together. The AI assistant even remembers my preferences and suggests the best options. I've saved so much time!",
    rating: 5,
    metrics: { label: "Time Saved", value: "5hrs/week" },
    category: "Travel",
  },
  {
    id: 3,
    name: "Tunde Adeleke",
    role: "E-commerce Entrepreneur",
    company: "TechHub Electronics",
    location: "Port Harcourt",
    image: testimonial3,
    content: "The REWA Marketplace connected me with thousands of customers I couldn't reach before. The payment integration is seamless, and the analytics help me understand what products are trending. My sales increased by 150%!",
    rating: 5,
    metrics: { label: "Sales Increase", value: "+150%" },
    category: "Marketplace",
  },
  {
    id: 4,
    name: "Ngozi Eze",
    role: "Accountant",
    company: "EzeFinance Consulting",
    location: "Enugu",
    image: smeImage,
    content: "The government services portal on REWA has been a game-changer for my clients. Tax filing, permit applications, and document verification - all in one place. It's saved my firm countless hours of administrative work.",
    rating: 5,
    metrics: { label: "Efficiency Gain", value: "40%" },
    category: "Government",
  },
  {
    id: 5,
    name: "Emeka Nwachukwu",
    role: "Logistics Manager",
    company: "SwiftMove Logistics",
    location: "Onitsha",
    image: testimonial1,
    content: "REWA's transport booking system has streamlined our operations. We can now coordinate deliveries, track vehicles in real-time, and manage our fleet more efficiently. Our delivery times have improved by 30%.",
    rating: 5,
    metrics: { label: "Faster Deliveries", value: "30%" },
    category: "Transport",
  },
  {
    id: 6,
    name: "Fatima Bello",
    role: "Fashion Designer",
    company: "Fatima Couture",
    location: "Kano",
    image: testimonial2,
    content: "Selling my designs on REWA Marketplace opened up a whole new market for me. The platform's reach extends across Nigeria, and I now have customers in states I've never even visited. The invoicing tools make transactions smooth.",
    rating: 5,
    metrics: { label: "Customer Reach", value: "15 States" },
    category: "Marketplace",
  },
];

const stats = [
  { label: "Happy Customers", value: "500K+" },
  { label: "Businesses Served", value: "10K+" },
  { label: "Transactions Processed", value: "₦2B+" },
  { label: "Average Rating", value: "4.8/5" },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-white/90">thousands</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Discover how REWA is helping individuals and businesses across Nigeria achieve their goals.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-2xl md:text-3xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border/50" data-testid={`testimonial-card-${testimonial.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company} - {testimonial.location}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">{testimonial.category}</Badge>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
                    <p className="text-muted-foreground pl-4 italic">"{testimonial.content}"</p>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-[#0AB39C]" />
                    <div>
                      <p className="text-xs text-muted-foreground">{testimonial.metrics.label}</p>
                      <p className="font-bold text-[#0AB39C]">{testimonial.metrics.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Video Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hear from our <span className="text-[#0AB39C]">community</span>
          </h2>
          
          <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary ml-1" />
              </div>
              <p className="text-muted-foreground">Video testimonials coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join thousands of happy customers and growing businesses on REWA.
          </p>
          <Link href="/get-started" data-testid="testimonials-cta-get-started">
            <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90 px-8">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
