import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Store, Search, Star, MapPin, Filter, Grid, List, ShoppingCart, Heart } from "lucide-react";
import marketplaceImage from "@assets/stock_images/busy_marketplace_sho_042d769c.jpg";

const categories = [
  { id: "fashion", name: "Fashion & Clothing", count: 1234 },
  { id: "electronics", name: "Electronics", count: 567 },
  { id: "food", name: "Food & Groceries", count: 892 },
  { id: "beauty", name: "Beauty & Health", count: 456 },
  { id: "home", name: "Home & Garden", count: 345 },
  { id: "services", name: "Professional Services", count: 234 },
];

const products = [
  {
    id: 1,
    name: "Ankara Print Dress",
    seller: "Mama Titi Fabrics",
    location: "Lagos",
    price: 15000,
    rating: 4.8,
    reviews: 234,
    image: marketplaceImage,
    category: "fashion",
    verified: true,
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max Case",
    seller: "TechHub Nigeria",
    location: "Abuja",
    price: 5000,
    rating: 4.5,
    reviews: 89,
    image: marketplaceImage,
    category: "electronics",
    verified: true,
  },
  {
    id: 3,
    name: "Organic Palm Oil (5L)",
    seller: "Village Fresh Foods",
    location: "Abia",
    price: 8500,
    rating: 4.9,
    reviews: 156,
    image: marketplaceImage,
    category: "food",
    verified: true,
  },
  {
    id: 4,
    name: "Shea Butter (1kg)",
    seller: "Natural Beauty NG",
    location: "Kano",
    price: 4500,
    rating: 4.7,
    reviews: 312,
    image: marketplaceImage,
    category: "beauty",
    verified: false,
  },
  {
    id: 5,
    name: "Handwoven Basket Set",
    seller: "Artisan Crafts",
    location: "Calabar",
    price: 12000,
    rating: 4.6,
    reviews: 67,
    image: marketplaceImage,
    category: "home",
    verified: true,
  },
  {
    id: 6,
    name: "Traditional Beads Necklace",
    seller: "Aduke Beads",
    location: "Ibadan",
    price: 7500,
    rating: 4.8,
    reviews: 198,
    image: marketplaceImage,
    category: "fashion",
    verified: true,
  },
];

export default function Marketplace() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = selectedCategories.length > 0
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${marketplaceImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064F33]/95 to-[#064F33]/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Marketplace
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover <span className="text-[#0AB39C]">local businesses</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Shop from verified Nigerian vendors. Quality products, secure payments, and buyer protection.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products, services, or vendors..." 
                className="pl-9"
                data-testid="input-search"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
                data-testid="button-toggle-filters"
              >
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
              <div className="flex rounded-lg border border-border">
                <Button 
                  variant={viewMode === "grid" ? "secondary" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  data-testid="button-view-grid"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "secondary" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("list")}
                  data-testid="button-view-list"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`w-64 flex-shrink-0 ${showFilters ? "block" : "hidden"} md:block`}>
              <Card className="sticky top-24 border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                          data-testid={`checkbox-${category.id}`}
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm text-muted-foreground cursor-pointer flex-1 flex items-center justify-between"
                        >
                          <span>{category.name}</span>
                          <span className="text-xs">({category.count})</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Min" type="number" className="text-sm" data-testid="input-price-min" />
                      <Input placeholder="Max" type="number" className="text-sm" data-testid="input-price-max" />
                    </div>
                    <Button className="w-full mt-4 bg-[#0AB39C] hover:bg-[#0AB39C]/90" size="sm" data-testid="button-apply-filters">
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} products found
                </p>
              </div>

              <div className={viewMode === "grid" 
                ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
                : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    className={`overflow-hidden border-border/50 hover:shadow-xl transition-shadow ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                    data-testid={`product-card-${product.id}`}
                  >
                    <div className={viewMode === "list" ? "w-48 flex-shrink-0" : "relative"}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className={`w-full object-cover ${viewMode === "list" ? "h-full" : "h-48"}`}
                      />
                      {product.verified && (
                        <Badge className="absolute top-2 left-2 bg-[#0AB39C]">Verified</Badge>
                      )}
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        data-testid={`button-wishlist-${product.id}`}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {product.location}
                      </p>
                      <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.seller}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-[#0AB39C]">₦{product.price.toLocaleString()}</p>
                        <Button size="sm" className="bg-[#0AB39C] hover:bg-[#0AB39C]/90" data-testid={`button-add-cart-${product.id}`}>
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Seller CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Store className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Sell on REWA Marketplace</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerian businesses and reach millions of customers. Easy setup, secure payments, and powerful analytics.
          </p>
          <Button className="bg-[#064F33] hover:bg-[#064F33]/90" data-testid="button-become-seller">
            Become a Seller
          </Button>
        </div>
      </section>
    </div>
  );
}
