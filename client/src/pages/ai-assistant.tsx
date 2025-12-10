import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, Mic, Plane, Hotel, Car, UtensilsCrossed, Store, Briefcase, Building2, Sparkles, User } from "lucide-react";
import rewaLogo from "@assets/ChatGPT_Image_Dec_10,_2025,_12_06_48_AM_1765380204742.png";
import aiImage from "@assets/stock_images/ai_artificial_intell_80e34157.jpg";

const quickActions = [
  { icon: Plane, label: "Book a flight", action: "I want to book a flight" },
  { icon: Hotel, label: "Find a hotel", action: "Help me find a hotel" },
  { icon: Car, label: "Order a ride", action: "I need a ride" },
  { icon: UtensilsCrossed, label: "Order food", action: "I want to order food" },
  { icon: Store, label: "Shop marketplace", action: "Show me the marketplace" },
  { icon: Briefcase, label: "SME insights", action: "Give me business insights" },
  { icon: Building2, label: "Tax help", action: "Help me with tax filing" },
];

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "assistant",
    content: "Hello! I'm REWA AI, your intelligent assistant. I can help you book flights, find hotels, order rides, get food delivered, shop the marketplace, manage your business, and access government services. How can I assist you today?",
    timestamp: new Date(),
  },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        flight: "I can help you book a flight! Where would you like to fly from and to? Just tell me your departure city, destination, and preferred travel dates, and I'll find the best options for you.",
        hotel: "Looking for accommodation? Great! Tell me the city you're visiting, check-in and check-out dates, and how many guests. I'll find the perfect stay for you.",
        ride: "Need a ride? I can arrange that! Just share your pickup location and destination. Would you prefer an economy, comfort, or premium vehicle?",
        food: "Hungry? I've got you covered! What kind of cuisine are you in the mood for? I can recommend popular restaurants in your area.",
        marketplace: "The REWA Marketplace has thousands of verified sellers! Are you looking for something specific? I can help you find fashion, electronics, food, beauty products, and more.",
        business: "Let me help with your business! I can provide insights on your sales trends, help with invoicing, or give you recommendations to grow your revenue. What would you like to know?",
        tax: "Tax season doesn't have to be stressful! I can help you estimate your tax obligations, guide you through filing, and ensure you're compliant with the latest 2026 reforms. What do you need help with?",
      };

      let response = "I understand you need help. Could you tell me more about what you're looking for? I can assist with flights, hotels, rides, food delivery, shopping, business management, and government services.";
      
      const lowerContent = content.toLowerCase();
      if (lowerContent.includes("flight") || lowerContent.includes("fly")) {
        response = responses.flight;
      } else if (lowerContent.includes("hotel") || lowerContent.includes("stay") || lowerContent.includes("accommodation")) {
        response = responses.hotel;
      } else if (lowerContent.includes("ride") || lowerContent.includes("transport") || lowerContent.includes("car")) {
        response = responses.ride;
      } else if (lowerContent.includes("food") || lowerContent.includes("eat") || lowerContent.includes("hungry") || lowerContent.includes("meal")) {
        response = responses.food;
      } else if (lowerContent.includes("shop") || lowerContent.includes("buy") || lowerContent.includes("marketplace") || lowerContent.includes("product")) {
        response = responses.marketplace;
      } else if (lowerContent.includes("business") || lowerContent.includes("sme") || lowerContent.includes("invoice") || lowerContent.includes("insight")) {
        response = responses.business;
      } else if (lowerContent.includes("tax") || lowerContent.includes("government") || lowerContent.includes("permit") || lowerContent.includes("license")) {
        response = responses.tax;
      }

      const assistantMessage: Message = {
        id: messages.length + 2,
        type: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#064F33] to-[#0AB39C]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                AI Assistant
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Meet your <span className="text-white/90">intelligent helper</span>
              </h1>
              <p className="text-lg text-white/90 mb-8">
                REWA AI understands your needs and provides personalized recommendations across all our services. 
                Ask anything - from booking flights to managing your business.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LLM-Powered", "24/7 Available", "Multi-Service", "Natural Language"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={aiImage} alt="AI Technology" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="flex-1 py-8 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 h-full">
          <Card className="border-border/50 shadow-xl h-[600px] flex flex-col">
            <CardHeader className="border-b border-border p-4 flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src={rewaLogo} alt="REWA" className="h-10 w-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-foreground">REWA AI Assistant</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Online
                  </p>
                </div>
              </div>
            </CardHeader>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    data-testid={`message-${message.id}`}
                  >
                    {message.type === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-[#0AB39C] text-white rounded-br-sm"
                          : "bg-card border border-border rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.type === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    {message.type === "user" && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Actions */}
            <div className="border-t border-border p-3 flex-shrink-0">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0 gap-1"
                    onClick={() => sendMessage(action.action)}
                    data-testid={`quick-action-${action.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <action.icon className="h-3 w-3" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <CardContent className="border-t border-border p-4 flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="pr-10"
                    data-testid="input-chat-message"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    data-testid="button-voice-input"
                  >
                    <Mic className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <Button type="submit" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-send-message">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
