import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, ArrowRight, BarChart3, FileText, CreditCard, Users, 
  TrendingUp, PieChart, Receipt, Zap, CheckCircle, Bot 
} from "lucide-react";
import smeImage from "@assets/stock_images/small_business_owner_19d741f5.jpg";

const features = [
  {
    icon: FileText,
    title: "Invoicing",
    description: "Create and send professional invoices. Track payments and manage receivables.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your business performance with interactive charts.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description: "Accept payments via cards, bank transfer, USSD, and mobile money.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "CRM tools to manage customer relationships and track interactions.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description: "Monitor expenses, categorize spending, and generate reports.",
  },
  {
    icon: Bot,
    title: "AI Insights",
    description: "AI-powered recommendations to optimize your business operations.",
  },
];

const dashboardMetrics = [
  { label: "Revenue", value: "₦2.4M", change: "+12%", icon: TrendingUp },
  { label: "Orders", value: "1,234", change: "+8%", icon: Receipt },
  { label: "Customers", value: "567", change: "+15%", icon: Users },
  { label: "Profit Margin", value: "32%", change: "+3%", icon: PieChart },
];

export default function SMETools() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${smeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              SME Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Grow your business with <span className="text-[#0AB39C]">REWA</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Powerful business management tools designed for Nigerian entrepreneurs. Invoicing, analytics, payments, and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" data-testid="sme-link-get-started">
                <Button size="lg" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90 text-white">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" data-testid="button-watch-demo">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Dashboard Preview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your business at a <span className="text-[#0AB39C]">glance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get real-time insights into your business performance with our intuitive dashboard.
            </p>
          </div>

          <Card className="border-border/50 shadow-xl overflow-hidden">
            <div className="bg-[#064F33] p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-white text-sm font-medium">REWA Business Dashboard</p>
            </div>
            <CardContent className="p-6 bg-card">
              <div className="grid gap-4 md:grid-cols-4 mb-8">
                {dashboardMetrics.map((metric) => (
                  <Card key={metric.label} className="border-border/50" data-testid={`metric-${metric.label.toLowerCase()}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <metric.icon className="h-5 w-5 text-muted-foreground" />
                        <Badge variant="secondary" className="text-xs text-green-600 bg-green-100">
                          {metric.change}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 bg-gradient-to-r from-[#0AB39C]/20 to-[#064F33]/20 rounded-lg flex items-end p-4">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div key={i} className="flex-1 mx-1">
                          <div 
                            className="bg-[#0AB39C] rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Invoices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { id: "INV-001", client: "ABC Company", amount: 150000, status: "Paid" },
                        { id: "INV-002", client: "XYZ Ltd", amount: 85000, status: "Pending" },
                        { id: "INV-003", client: "Tech Solutions", amount: 220000, status: "Paid" },
                      ].map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div>
                            <p className="font-medium text-sm">{invoice.id}</p>
                            <p className="text-xs text-muted-foreground">{invoice.client}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-sm">₦{invoice.amount.toLocaleString()}</p>
                            <Badge variant={invoice.status === "Paid" ? "secondary" : "outline"} className="text-xs">
                              {invoice.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to <span className="text-[#0AB39C]">succeed</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50" data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Briefcase className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start with our free plan and upgrade as you grow. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" data-testid="sme-cta-get-started">
              <Button size="lg" className="bg-white text-[#064F33] hover:bg-white/90 px-8">
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing" data-testid="sme-cta-pricing">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
