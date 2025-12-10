import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  ChevronDown, ChevronUp, HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["REWA Headquarters", "Abia State, Nigeria"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@rewa.ng", "support@rewa.ng"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 800 REWA NOW", "+234 123 456 7890"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 3pm"],
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Creating an account is easy! Click the 'Get Started' button, enter your email and phone number, verify with OTP, and you're all set.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank cards (Visa, Mastercard), bank transfers, USSD payments, and mobile money through Paystack and Flutterwave.",
  },
  {
    question: "How do I become a vendor on the marketplace?",
    answer: "Go to the Marketplace section, click 'Become a Seller', fill out the registration form, upload required documents, and our team will verify your account within 24-48 hours.",
  },
  {
    question: "Is my data safe with REWA?",
    answer: "Absolutely. We use bank-grade encryption, are NDPR compliant, and never share your data with third parties without your consent.",
  },
  {
    question: "How can I get a refund?",
    answer: "Refund policies vary by service. Generally, cancellations made 24 hours before service are eligible for full refunds. Contact our support team for specific cases.",
  },
];

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We'd love to <span className="text-white/90">hear from you</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have a question, feedback, or need support? Our team is here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-background -mt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border/50 shadow-lg" data-testid={`contact-info-${info.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <Card className="border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" data-testid="input-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" data-testid="input-email" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+234..." data-testid="input-phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger data-testid="select-subject">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="min-h-32"
                      data-testid="input-message"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-submit">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Live Chat */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="border-border/50 shadow-xl overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-primary mb-2" />
                    <p className="text-muted-foreground">REWA Headquarters</p>
                    <p className="text-sm text-muted-foreground">Abia State, Nigeria</p>
                  </div>
                </div>
              </Card>

              {/* Live Chat */}
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0AB39C]/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-[#0AB39C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Live Chat Support</h3>
                      <p className="text-sm text-muted-foreground">Get instant help from our team</p>
                    </div>
                    <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-live-chat">
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="h-3 w-3 mr-1" />
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently asked <span className="text-[#0AB39C]">questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="border-border/50 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                data-testid={`faq-item-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <p className="text-muted-foreground mt-4">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
