import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, User, Briefcase, Mail, Phone, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import rewaLogo from "@assets/ChatGPT_Image_Dec_10,_2025,_12_06_48_AM_1765380204742.png";

const benefits = [
  "Access all booking services (flights, hotels, transport, meals)",
  "Shop the marketplace with buyer protection",
  "Use AI assistant for personalized help",
  "Track all your transactions in one place",
  "Exclusive deals and early access to features",
];

const smeBenefits = [
  "Free invoicing and payment collection",
  "Business analytics dashboard",
  "List products on the marketplace",
  "Accept online payments instantly",
  "AI-powered business insights",
];

export default function GetStarted() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("personal");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Welcome to REWA. Let's get started!",
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <img src={rewaLogo} alt="REWA" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Join REWA</h1>
              <p className="text-sm text-muted-foreground">Create your free account</p>
            </div>
          </div>

          <Tabs defaultValue="personal" className="mb-6" onValueChange={setAccountType}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal" className="flex items-center gap-2" data-testid="tab-personal">
                <User className="h-4 w-4" /> Personal
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center gap-2" data-testid="tab-business">
                <Briefcase className="h-4 w-4" /> Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" data-testid="input-first-name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" data-testid="input-last-name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="john@example.com" className="pl-9" data-testid="input-email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" placeholder="+234 800 000 0000" className="pl-9" data-testid="input-phone" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a strong password" 
                          className="pl-9 pr-10"
                          data-testid="input-password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1"
                          onClick={() => setShowPassword(!showPassword)}
                          data-testid="button-toggle-password"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" data-testid="checkbox-terms" />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-create-account">
                      Create Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" placeholder="Your Company Ltd" data-testid="input-business-name" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name</Label>
                        <Input id="contactName" placeholder="John Doe" data-testid="input-contact-name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessEmail">Business Email</Label>
                        <Input id="businessEmail" type="email" placeholder="hello@company.com" data-testid="input-business-email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">Business Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="businessPhone" placeholder="+234 800 000 0000" className="pl-9" data-testid="input-business-phone" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="businessPassword" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a strong password" 
                          className="pl-9 pr-10"
                          data-testid="input-business-password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="businessTerms" data-testid="checkbox-business-terms" />
                      <label htmlFor="businessTerms" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-create-business-account">
                      Create Business Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="#" className="text-primary hover:underline" data-testid="link-login">Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white p-12 items-center">
        <div className="max-w-lg">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Free to join
          </Badge>
          <h2 className="text-3xl font-bold mb-6">
            {accountType === "personal" 
              ? "Everything you need, one account"
              : "Grow your business with REWA"
            }
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {accountType === "personal"
              ? "Join 500,000+ Nigerians who use REWA for their daily needs."
              : "Join 10,000+ businesses using REWA to reach more customers."
            }
          </p>
          <div className="space-y-4">
            {(accountType === "personal" ? benefits : smeBenefits).map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
