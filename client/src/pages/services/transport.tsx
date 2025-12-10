import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Car, ArrowRight, MapPin, Clock, Users, Shield, Star, Navigation, Bike, Truck } from "lucide-react";
import transportImage from "@assets/stock_images/modern_car_interior__54be309c.jpg";

const vehicleTypes = [
  {
    id: "economy",
    name: "Economy",
    description: "Affordable rides for daily commute",
    icon: Car,
    pricePerKm: 100,
    eta: "3-5 min",
    passengers: 4,
  },
  {
    id: "comfort",
    name: "Comfort",
    description: "Extra space and comfort",
    icon: Car,
    pricePerKm: 150,
    eta: "5-8 min",
    passengers: 4,
  },
  {
    id: "premium",
    name: "Premium",
    description: "High-end vehicles for special occasions",
    icon: Car,
    pricePerKm: 250,
    eta: "8-12 min",
    passengers: 4,
  },
  {
    id: "bike",
    name: "Bike",
    description: "Quick rides for solo travelers",
    icon: Bike,
    pricePerKm: 50,
    eta: "2-4 min",
    passengers: 1,
  },
  {
    id: "delivery",
    name: "Delivery",
    description: "Package and goods delivery",
    icon: Truck,
    pricePerKm: 120,
    eta: "5-10 min",
    passengers: 0,
  },
];

export default function Transport() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showEstimate, setShowEstimate] = useState(false);

  const handleGetEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEstimate(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${transportImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Transport & Rides
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get there with <span className="text-[#0AB39C]">REWA</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Book rides, car rentals, or arrange logistics services. Real-time tracking and verified drivers.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 bg-background -mt-16 relative z-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-xl border-border/50">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Book a Ride</h2>
                <form onSubmit={handleGetEstimate} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-[#0AB39C]" />
                        <Input 
                          id="pickup" 
                          placeholder="Enter pickup location" 
                          className="pl-9"
                          data-testid="input-pickup"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <div className="relative">
                        <Navigation className="absolute left-3 top-3 h-4 w-4 text-red-500" />
                        <Input 
                          id="destination" 
                          placeholder="Where to?" 
                          className="pl-9"
                          data-testid="input-destination"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-4 block">Select Vehicle Type</Label>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {vehicleTypes.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedVehicle === vehicle.id
                              ? "border-[#0AB39C] bg-[#0AB39C]/5"
                              : "border-border hover:border-[#0AB39C]/50"
                          }`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                          data-testid={`vehicle-${vehicle.id}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <vehicle.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{vehicle.name}</p>
                              <p className="text-xs text-muted-foreground">{vehicle.eta}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{vehicle.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Users className="h-3 w-3" /> {vehicle.passengers > 0 ? `${vehicle.passengers} seats` : "Package"}
                            </span>
                            <span className="text-sm font-semibold text-[#0AB39C]">₦{vehicle.pricePerKm}/km</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90"
                    disabled={!selectedVehicle}
                    data-testid="button-get-estimate"
                  >
                    Get Price Estimate <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Preview / Estimate */}
            <Card className="shadow-xl border-border/50">
              <CardContent className="p-6 h-full">
                {showEstimate && selectedVehicle ? (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-foreground">Ride Estimate</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#0AB39C]" />
                        <p className="text-sm text-muted-foreground">Pickup point</p>
                      </div>
                      <div className="ml-1.5 border-l-2 border-dashed border-border h-8" />
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <p className="text-sm text-muted-foreground">Destination</p>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Distance</span>
                        <span className="font-semibold">12.5 km</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Est. Time</span>
                        <span className="font-semibold">25 min</span>
                      </div>
                      <div className="flex items-center justify-between text-lg">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-[#0AB39C]">₦1,875</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[#064F33] hover:bg-[#064F33]/90" data-testid="button-confirm-ride">
                      Confirm Ride
                    </Button>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <Navigation className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Route Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter pickup and destination to see your route and price estimate
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Safe and reliable rides</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Shield, title: "Verified Drivers", description: "All drivers are background-checked" },
              { icon: Navigation, title: "Real-time Tracking", description: "Track your ride live on the map" },
              { icon: Clock, title: "Quick Pickup", description: "Average wait time under 5 minutes" },
              { icon: Star, title: "Rated Service", description: "4.8+ average driver rating" },
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
