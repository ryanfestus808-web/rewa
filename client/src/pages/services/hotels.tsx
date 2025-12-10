import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hotel, ArrowRight, Calendar, Users, MapPin, Star, Wifi, Car, Coffee, Waves, Dumbbell } from "lucide-react";
import hotelImage from "@assets/stock_images/luxury_hotel_room_in_6b823554.jpg";

const mockHotels = [
  {
    id: 1,
    name: "Transcorp Hilton Abuja",
    location: "Abuja, Nigeria",
    rating: 4.8,
    reviews: 1234,
    price: 85000,
    image: hotelImage,
    amenities: ["wifi", "pool", "gym", "parking", "restaurant"],
    type: "5-Star Luxury",
  },
  {
    id: 2,
    name: "Lagos Continental Hotel",
    location: "Victoria Island, Lagos",
    rating: 4.6,
    reviews: 987,
    price: 72000,
    image: hotelImage,
    amenities: ["wifi", "pool", "gym", "restaurant"],
    type: "5-Star Luxury",
  },
  {
    id: 3,
    name: "Best Western Plus Lagos",
    location: "Ikeja, Lagos",
    rating: 4.3,
    reviews: 654,
    price: 45000,
    image: hotelImage,
    amenities: ["wifi", "parking", "restaurant"],
    type: "4-Star Business",
  },
  {
    id: 4,
    name: "Radisson Blu Ikeja",
    location: "Ikeja, Lagos",
    rating: 4.5,
    reviews: 823,
    price: 58000,
    image: hotelImage,
    amenities: ["wifi", "pool", "gym", "parking"],
    type: "5-Star Luxury",
  },
];

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  pool: Waves,
  gym: Dumbbell,
  parking: Car,
  restaurant: Coffee,
};

export default function Hotels() {
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
          style={{ backgroundImage: `url(${hotelImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Hotel Booking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find your perfect <span className="text-[#0AB39C]">stay</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              From budget-friendly to luxury accommodations. Book with confidence with our best price guarantee.
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
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="location" 
                        placeholder="Where are you going?" 
                        className="pl-9" 
                        defaultValue="Lagos"
                        data-testid="input-location"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="checkin" 
                        type="date" 
                        className="pl-9"
                        data-testid="input-checkin"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="checkout" 
                        type="date" 
                        className="pl-9"
                        data-testid="input-checkout"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <Select defaultValue="2">
                      <SelectTrigger data-testid="select-guests">
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="2 Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button type="submit" className="w-full bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-search-hotels">
                      <Hotel className="mr-2 h-4 w-4" /> Search Hotels
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
                <h2 className="text-xl font-bold text-foreground">Available Hotels</h2>
                <p className="text-sm text-muted-foreground">{mockHotels.length} hotels found</p>
              </div>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {mockHotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow" data-testid={`hotel-card-${hotel.id}`}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-48 sm:h-auto">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <Badge variant="secondary" className="mb-2 text-xs">{hotel.type}</Badge>
                          <h3 className="text-lg font-bold text-foreground">{hotel.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {hotel.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{hotel.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 my-4 flex-wrap">
                        {hotel.amenities.map((amenity) => {
                          const Icon = amenityIcons[amenity];
                          return (
                            <div key={amenity} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center" title={amenity}>
                              <Icon className="h-4 w-4 text-muted-foreground" />
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">per night</p>
                          <p className="text-2xl font-bold text-[#0AB39C]">₦{hotel.price.toLocaleString()}</p>
                        </div>
                        <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid={`button-book-${hotel.id}`}>
                          Book Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Book with confidence</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Star, title: "Best Price Guarantee", description: "We match any lower price you find" },
              { icon: Calendar, title: "Free Cancellation", description: "On most bookings" },
              { icon: Users, title: "Verified Reviews", description: "Real reviews from real guests" },
              { icon: Hotel, title: "Loyalty Rewards", description: "Earn points on every booking" },
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
