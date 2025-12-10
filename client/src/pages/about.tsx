import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Users, Globe, Award, ArrowRight } from "lucide-react";
import rewaLogo from "@assets/ChatGPT_Image_Dec_10,_2025,_12_06_48_AM_1765380204742.png";
import teamImage from "@assets/stock_images/modern_office_team_c_4f4b26bb.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push boundaries to create cutting-edge solutions that address real needs.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a connected ecosystem where businesses and customers thrive together.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making essential services available to everyone, everywhere in Nigeria.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality experience in everything we do.",
  },
];

const milestones = [
  { year: "2023", title: "Founded in Abia State", description: "REWA was born with a vision to transform Nigeria's service ecosystem." },
  { year: "2024", title: "Marketplace Launch", description: "Expanded to include marketplace features connecting thousands of SMEs." },
  { year: "2024", title: "AI Integration", description: "Introduced AI-powered assistant for personalized recommendations." },
  { year: "2025", title: "Nationwide Expansion", description: "Now serving all 36 states with comprehensive services." },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#064F33] to-[#0AB39C]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                About REWA
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building Nigeria's <span className="text-white/90">digital future</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                REWA is an AI-powered multi-service ecosystem headquartered in Abia State, Nigeria. 
                We're on a mission to connect Nigerians with essential services, empower SMEs, 
                and streamline access to government resources - all through one intelligent platform.
              </p>
              <Link href="/contact" data-testid="about-link-contact">
                <Button className="bg-white text-[#064F33] hover:bg-white/90">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="REWA Team" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 flex items-center gap-3">
                <img src={rewaLogo} alt="REWA" className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-bold text-foreground">REWA</p>
                  <p className="text-sm text-muted-foreground">Since 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower Nigerians with seamless access to essential services through 
                  innovative technology, fostering economic growth and improving quality of life 
                  across all communities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#0AB39C]/20 bg-[#0AB39C]/5">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-[#0AB39C]/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-[#0AB39C]" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's most trusted digital ecosystem, where every Nigerian can 
                  access the services they need, grow their business, and connect with their 
                  community effortlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What drives us <span className="text-[#0AB39C]">forward</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-border/50" data-testid={`value-card-${value.title.toLowerCase()}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Milestones & <span className="text-[#0AB39C]">achievements</span>
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6" data-testid={`milestone-${index}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the REWA ecosystem
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Whether you're a customer looking for services or a business seeking growth, REWA is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" data-testid="about-cta-get-started">
              <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90 px-8">
                Get Started Free
              </Button>
            </Link>
            <Link href="/partners" data-testid="about-cta-partners">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
