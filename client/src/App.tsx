import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services/index";
import Flights from "@/pages/services/flights";
import Hotels from "@/pages/services/hotels";
import Transport from "@/pages/services/transport";
import Meals from "@/pages/services/meals";
import Marketplace from "@/pages/services/marketplace";
import SMETools from "@/pages/services/sme-tools";
import Government from "@/pages/services/government";
import AIAssistant from "@/pages/ai-assistant";
import Partners from "@/pages/partners";
import Blog from "@/pages/blog";
import Pricing from "@/pages/pricing";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";
import GetStarted from "@/pages/get-started";
import Privacy from "@/pages/legal/privacy";
import Terms from "@/pages/legal/terms";
import Cookies from "@/pages/legal/cookies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/flights" component={Flights} />
      <Route path="/services/hotels" component={Hotels} />
      <Route path="/services/transport" component={Transport} />
      <Route path="/services/meals" component={Meals} />
      <Route path="/services/marketplace" component={Marketplace} />
      <Route path="/services/sme-tools" component={SMETools} />
      <Route path="/services/government" component={Government} />
      <Route path="/ai-assistant" component={AIAssistant} />
      <Route path="/partners" component={Partners} />
      <Route path="/blog" component={Blog} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="rewa-theme">
        <TooltipProvider>
          <Switch>
            <Route path="/get-started" component={GetStarted} />
            <Route>
              <MainLayout>
                <Router />
              </MainLayout>
            </Route>
          </Switch>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
