import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, ArrowRight, Calendar, Users, MapPin, Clock, Wifi, Coffee, Luggage, Star } from "lucide-react";
import flightImage from "@assets/stock_images/modern_airport_termi_9d0e9184.jpg";

const mockFlights = [
  {
    id: 1,
    airline: "Air Peace",
    departureTime: "06:30",
    arrivalTime: "07:45",
    from: "Lagos (LOS)",
    to: "Abuja (ABV)",
    duration: "1h 15m",
    price: 45000,
    type: "Direct",
    amenities: ["wifi", "meal", "luggage"],
  },
  {
    id: 2,
    airline: "Dana Air",
    departureTime: "09:00",
    arrivalTime: "10:20",
    from: "Lagos (LOS)",
    to: "Abuja (ABV)",
    duration: "1h 20m",
    price: 38000,
    type: "Direct",
    amenities: ["luggage"],
  },
  {
    id: 3,
    airline: "Ibom Air",
    departureTime: "14:30",
    arrivalTime: "15:50",
    from: "Lagos (LOS)",
    to: "Abuja (ABV)",
    duration: "1h 20m",
    price: 52000,
    type: "Direct",
    amenities: ["wifi", "meal", "luggage"],
  },
  {
    id: 4,
    airline: "Green Africa",
    departureTime: "18:00",
    arrivalTime: "19:15",
    from: "Lagos (LOS)",
    to: "Abuja (ABV)",
    duration: "1h 15m",
    price: 32000,
    type: "Direct",
    amenities: ["luggage"],
  },
];

export default function Flights() {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${flightImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Flight Booking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book your next <span className="text-[#0AB39C]">flight</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Compare prices from major airlines and book with confidence. Instant confirmation and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-8 bg-background -mt-16 relative z-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Card className="shadow-xl border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  <div className="space-y-2">
                    <Label htmlFor="from">From</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="from" 
                        placeholder="Lagos (LOS)" 
                        className="pl-9" 
                        defaultValue="Lagos (LOS)"
                        data-testid="input-from"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="to" 
                        placeholder="Abuja (ABV)" 
                        className="pl-9" 
                        defaultValue="Abuja (ABV)"
                        data-testid="input-to"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="date" 
                        type="date" 
                        className="pl-9"
                        data-testid="input-date"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Passengers</Label>
                    <Select defaultValue="1">
                      <SelectTrigger data-testid="select-passengers">
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="1 Passenger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Passenger</SelectItem>
                        <SelectItem value="2">2 Passengers</SelectItem>
                        <SelectItem value="3">3 Passengers</SelectItem>
                        <SelectItem value="4">4+ Passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button type="submit" className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-search-flights">
                      <Plane className="mr-2 h-4 w-4" /> Search Flights
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      {showResults && (
        <section className="py-8 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Available Flights</h2>
                <p className="text-sm text-muted-foreground">{mockFlights.length} flights found</p>
              </div>
              <Select defaultValue="price">
                <SelectTrigger className="w-40" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="departure">Departure Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {mockFlights.map((flight) => (
                <Card key={flight.id} className="border-border/50 hover:shadow-lg transition-shadow" data-testid={`flight-card-${flight.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{flight.airline}</p>
                            <Badge variant="secondary" className="text-xs">{flight.type}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">{flight.departureTime}</p>
                            <p className="text-sm text-muted-foreground">{flight.from}</p>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <div className="h-px bg-border flex-1" />
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span className="text-xs">{flight.duration}</span>
                            </div>
                            <div className="h-px bg-border flex-1" />
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">{flight.arrivalTime}</p>
                            <p className="text-sm text-muted-foreground">{flight.to}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {flight.amenities.includes("wifi") && (
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center" title="WiFi">
                              <Wifi className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                          {flight.amenities.includes("meal") && (
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center" title="Meal">
                              <Coffee className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                          {flight.amenities.includes("luggage") && (
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center" title="Luggage">
                              <Luggage className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">from</p>
                          <p className="text-2xl font-bold text-[#0AB39C]">₦{flight.price.toLocaleString()}</p>
                        </div>
                        <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid={`button-book-${flight.id}`}>
                          Book Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why book with REWA?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Star, title: "Best Prices", description: "Compare prices from multiple airlines" },
              { icon: Clock, title: "Instant Confirmation", description: "Get your e-ticket immediately" },
              { icon: Users, title: "24/7 Support", description: "We're here to help anytime" },
              { icon: Luggage, title: "Flexible Options", description: "Free cancellation on select flights" },
            ].map((feature) => (
              <Card key={feature.title} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
