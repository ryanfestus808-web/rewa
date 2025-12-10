import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Building2, ArrowRight, FileText, Shield, Clock, CheckCircle, 
  Upload, AlertCircle, Calculator, Receipt, FileCheck, Search
} from "lucide-react";
import governmentImage from "@assets/stock_images/government_building__44405301.jpg";

const services = [
  {
    icon: Calculator,
    title: "Tax Services",
    description: "File your taxes, calculate obligations, and stay compliant with FIRS requirements.",
    status: "Available",
  },
  {
    icon: FileText,
    title: "Permit Applications",
    description: "Apply for business permits, environmental clearances, and operational licenses.",
    status: "Available",
  },
  {
    icon: FileCheck,
    title: "License Renewals",
    description: "Renew your business registration, professional licenses, and certifications.",
    status: "Available",
  },
  {
    icon: Upload,
    title: "Document Verification",
    description: "Upload and verify official documents, certificates, and credentials.",
    status: "Coming Soon",
  },
];

const taxReformHighlights = [
  "Simplified tax filing process for SMEs",
  "Reduced compliance burden for small businesses",
  "New digital payment integration",
  "Automated tax calculation tools",
  "Real-time filing status tracking",
  "Integration with FIRS systems",
];

const applicationSteps = [
  { step: 1, title: "Select Service", description: "Choose the government service you need" },
  { step: 2, title: "Fill Application", description: "Complete the online application form" },
  { step: 3, title: "Upload Documents", description: "Submit required supporting documents" },
  { step: 4, title: "Pay Fees", description: "Pay applicable fees securely online" },
  { step: 5, title: "Track Status", description: "Monitor your application progress" },
];

export default function Government() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governmentImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Government Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Access government services <span className="text-[#0AB39C]">digitally</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Tax filing, permit applications, license renewals, and document verification - all streamlined through REWA.
            </p>
            <Link href="#services" data-testid="gov-link-explore">
              <Button size="lg" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90 text-white">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2026 Tax Reform Banner */}
      <section className="py-8 bg-[#0AB39C]/10 border-y border-[#0AB39C]/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0AB39C] flex items-center justify-center">
                <Receipt className="h-6 w-6 text-white" />
              </div>
              <div>
                <Badge className="bg-[#0AB39C] mb-1">New</Badge>
                <h3 className="font-bold text-foreground">2026 Tax Reform Tools</h3>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">
                Get ready for Nigeria's 2026 tax reforms with our updated tools. Simplified filing, automated calculations, and compliance guidance.
              </p>
            </div>
            <Button className="bg-[#064F33] hover:bg-[#064F33]/90" data-testid="button-learn-tax-reform">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Available Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Digital government <span className="text-[#0AB39C]">services</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="border-border/50" data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                        <Badge variant={service.status === "Available" ? "secondary" : "outline"} className="text-xs">
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Button 
                        className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" 
                        size="sm"
                        disabled={service.status !== "Available"}
                        data-testid={`button-access-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Access Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calculator Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Tax Tools</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready for <span className="text-[#0AB39C]">2026 reforms</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our tax tools are updated with the latest 2026 reform guidelines to help your business stay compliant.
              </p>
              <div className="space-y-3">
                {taxReformHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0AB39C] flex-shrink-0" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Tax Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Annual Revenue (₦)</Label>
                  <Input id="revenue" placeholder="e.g. 10,000,000" data-testid="input-revenue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expenses">Deductible Expenses (₦)</Label>
                  <Input id="expenses" placeholder="e.g. 3,000,000" data-testid="input-expenses" />
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Estimated Tax</span>
                    <span className="text-lg font-bold text-[#0AB39C]">₦1,750,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Based on current tax rates. Subject to verification.
                  </p>
                </div>
                <Button className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-calculate-tax">
                  Calculate Tax
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple application <span className="text-[#0AB39C]">process</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="text-center" data-testid={`step-${step.step}`}>
                <div className="relative">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  {index < applicationSteps.length - 1 && (
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

      {/* Track Application */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Search className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Track your application
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Enter your application reference number to check the status of your submission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              placeholder="Enter reference number (e.g. REF-2024-001234)" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              data-testid="input-reference"
            />
            <Button className="bg-white text-[#064F33] hover:bg-white/90" data-testid="button-track">
              Track Status
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
