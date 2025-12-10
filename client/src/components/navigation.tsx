import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ChevronDown, Plane, Hotel, Car, UtensilsCrossed, Store, Briefcase, Building2, Bot } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import rewaLogo from "@assets/ChatGPT_Image_Dec_10,_2025,_12_06_48_AM_1765380204742.png";

const services = [
  { name: "Flights", href: "/services/flights", icon: Plane },
  { name: "Hotels", href: "/services/hotels", icon: Hotel },
  { name: "Transport", href: "/services/transport", icon: Car },
  { name: "Meals", href: "/services/meals", icon: UtensilsCrossed },
  { name: "Marketplace", href: "/services/marketplace", icon: Store },
  { name: "SME Tools", href: "/services/sme-tools", icon: Briefcase },
  { name: "Government", href: "/services/government", icon: Building2 },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img src={rewaLogo} alt="REWA" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold text-[#064F33] dark:text-white">REWA</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1" data-testid="button-services-dropdown">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="flex items-center gap-2 cursor-pointer" data-testid={`link-service-${service.name.toLowerCase()}`}>
                    <service.icon className="h-4 w-4 text-primary" />
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/ai-assistant" data-testid="link-ai-assistant">
            <Button variant="ghost" className="gap-2">
              <Bot className="h-4 w-4" />
              AI Assistant
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/get-started" className="hidden lg:block" data-testid="link-get-started">
            <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90 text-white">
              Get Started
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium hover-elevate"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-service-${service.name.toLowerCase()}`}
                  >
                    <service.icon className="h-4 w-4 text-primary" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg p-2 text-sm font-medium hover-elevate"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/ai-assistant"
                className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium hover-elevate"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-ai-assistant"
              >
                <Bot className="h-4 w-4 text-primary" />
                AI Assistant
              </Link>
            </div>
            <Link href="/get-started" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-get-started">
              <Button className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
