import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, ArrowRight, MapPin, Clock, Star, Plus, Minus, ShoppingCart } from "lucide-react";
import mealsImage from "@assets/stock_images/delicious_nigerian_a_0a2f3621.jpg";

const restaurants = [
  {
    id: 1,
    name: "Mama Put Kitchen",
    cuisine: "Nigerian Traditional",
    rating: 4.8,
    reviews: 456,
    deliveryTime: "25-35 min",
    deliveryFee: 500,
    image: mealsImage,
    featured: true,
  },
  {
    id: 2,
    name: "The Place Restaurant",
    cuisine: "Nigerian & Continental",
    rating: 4.6,
    reviews: 892,
    deliveryTime: "30-40 min",
    deliveryFee: 700,
    image: mealsImage,
    featured: true,
  },
  {
    id: 3,
    name: "Chicken Republic",
    cuisine: "Fast Food",
    rating: 4.3,
    reviews: 1234,
    deliveryTime: "20-30 min",
    deliveryFee: 450,
    image: mealsImage,
    featured: false,
  },
  {
    id: 4,
    name: "Kilimanjaro",
    cuisine: "Fast Food & Grills",
    rating: 4.4,
    reviews: 678,
    deliveryTime: "25-35 min",
    deliveryFee: 550,
    image: mealsImage,
    featured: false,
  },
];

const menuItems = [
  { id: 1, name: "Jollof Rice with Chicken", price: 3500, description: "Classic Nigerian jollof rice served with grilled chicken", popular: true },
  { id: 2, name: "Pounded Yam & Egusi", price: 4000, description: "Traditional pounded yam with rich egusi soup and assorted meat", popular: true },
  { id: 3, name: "Fried Rice with Prawns", price: 4500, description: "Colorful fried rice topped with fresh prawns", popular: false },
  { id: 4, name: "Suya Platter", price: 3000, description: "Spicy grilled beef skewers with onions and pepper", popular: true },
  { id: 5, name: "Amala & Ewedu", price: 3500, description: "Smooth amala with ewedu and gbegiri soup", popular: false },
  { id: 6, name: "Pepper Soup", price: 2500, description: "Spicy catfish pepper soup", popular: false },
];

export default function Meals() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find((i) => i.id === parseInt(itemId));
    return total + (item?.price || 0) * quantity;
  }, 0);

  const cartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mealsImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Meals Ordering
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Delicious meals <span className="text-[#0AB39C]">delivered</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Order from the best restaurants in your area. Fast delivery, live tracking, and amazing variety.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-background -mt-16 relative z-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Card className="shadow-xl border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Enter your delivery address" 
                    className="pl-9"
                    defaultValue="Victoria Island, Lagos"
                    data-testid="input-delivery-address"
                  />
                </div>
                <Button className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid="button-find-restaurants">
                  <UtensilsCrossed className="mr-2 h-4 w-4" /> Find Restaurants
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Restaurants or Menu */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {selectedRestaurant === null ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Nearby Restaurants</h2>
                  <p className="text-sm text-muted-foreground">{restaurants.length} restaurants available</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {restaurants.map((restaurant) => (
                  <Card 
                    key={restaurant.id} 
                    className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedRestaurant(restaurant.id)}
                    data-testid={`restaurant-card-${restaurant.id}`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 h-48 sm:h-auto relative">
                        <img 
                          src={restaurant.image} 
                          alt={restaurant.name} 
                          className="w-full h-full object-cover"
                        />
                        {restaurant.featured && (
                          <Badge className="absolute top-2 left-2 bg-[#0AB39C]">Featured</Badge>
                        )}
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{restaurant.name}</h3>
                            <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{restaurant.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {restaurant.deliveryTime}
                          </span>
                          <span>Delivery: ₦{restaurant.deliveryFee}</span>
                        </div>

                        <Button className="w-full mt-4 bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid={`button-view-menu-${restaurant.id}`}>
                          View Menu <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" onClick={() => setSelectedRestaurant(null)} data-testid="button-back-restaurants">
                  Back to Restaurants
                </Button>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {restaurants.find((r) => r.id === selectedRestaurant)?.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">Select items to add to your order</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  {menuItems.map((item) => (
                    <Card key={item.id} className="border-border/50" data-testid={`menu-item-${item.id}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-foreground">{item.name}</h4>
                              {item.popular && <Badge variant="secondary" className="text-xs">Popular</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            <p className="text-lg font-bold text-[#0AB39C] mt-2">₦{item.price.toLocaleString()}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {cart[item.id] ? (
                              <>
                                <Button 
                                  size="icon" 
                                  variant="outline"
                                  onClick={() => removeFromCart(item.id)}
                                  data-testid={`button-remove-${item.id}`}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-semibold">{cart[item.id]}</span>
                                <Button 
                                  size="icon" 
                                  className="bg-[#0AB39C] hover:bg-[#0AB39C]/90"
                                  onClick={() => addToCart(item.id)}
                                  data-testid={`button-add-more-${item.id}`}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </>
                            ) : (
                              <Button 
                                className="bg-[#0AB39C] hover:bg-[#0AB39C]/90"
                                onClick={() => addToCart(item.id)}
                                data-testid={`button-add-${item.id}`}
                              >
                                <Plus className="mr-2 h-4 w-4" /> Add
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Card className="sticky top-24 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Your Order</h3>
                        {cartItems > 0 && (
                          <Badge className="bg-[#0AB39C]">{cartItems}</Badge>
                        )}
                      </div>
                      
                      {cartItems === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Your cart is empty. Add items to get started!
                        </p>
                      ) : (
                        <>
                          <div className="space-y-3 mb-4">
                            {Object.entries(cart).map(([itemId, quantity]) => {
                              const item = menuItems.find((i) => i.id === parseInt(itemId));
                              if (!item) return null;
                              return (
                                <div key={itemId} className="flex items-center justify-between text-sm">
                                  <span>{quantity}x {item.name}</span>
                                  <span>₦{(item.price * quantity).toLocaleString()}</span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="border-t border-border pt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Subtotal</span>
                              <span>₦{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Delivery</span>
                              <span>₦{restaurants.find((r) => r.id === selectedRestaurant)?.deliveryFee.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span className="text-[#0AB39C]">
                                ₦{(cartTotal + (restaurants.find((r) => r.id === selectedRestaurant)?.deliveryFee || 0)).toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <Button className="w-full mt-4 bg-[#064F33] hover:bg-[#064F33]/90" data-testid="button-checkout">
                            Proceed to Checkout
                          </Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
