import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import testimonial1 from "@assets/stock_images/happy_nigerian_afric_2ca49476.jpg";
import testimonial2 from "@assets/stock_images/happy_nigerian_afric_7bca4680.jpg";
import testimonial3 from "@assets/stock_images/happy_nigerian_afric_39288174.jpg";
import smeImage from "@assets/stock_images/small_business_owner_19d741f5.jpg";
import aiImage from "@assets/stock_images/ai_artificial_intell_80e34157.jpg";
import cityImage from "@assets/stock_images/modern_city_skyline__d91329ca.jpg";

const categories = ["All", "AI & Technology", "SME Growth", "Travel", "Finance", "Nigeria"];

const articles = [
  {
    id: 1,
    title: "How AI is Transforming Small Business Operations in Nigeria",
    excerpt: "Discover how Nigerian SMEs are leveraging artificial intelligence to streamline operations, reduce costs, and grow their customer base.",
    category: "AI & Technology",
    author: "Adaeze Okonkwo",
    date: "December 8, 2025",
    readTime: "5 min read",
    image: aiImage,
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Nigeria's 2026 Tax Reforms",
    excerpt: "Everything business owners need to know about the upcoming tax changes and how to prepare for compliance.",
    category: "Finance",
    author: "Tunde Bakare",
    date: "December 5, 2025",
    readTime: "8 min read",
    image: smeImage,
    featured: true,
  },
  {
    id: 3,
    title: "Top 10 Domestic Travel Destinations for 2025",
    excerpt: "From the beaches of Calabar to the hills of Jos, explore Nigeria's most beautiful destinations.",
    category: "Travel",
    author: "Ngozi Eze",
    date: "December 3, 2025",
    readTime: "6 min read",
    image: cityImage,
    featured: false,
  },
  {
    id: 4,
    title: "5 Ways to Boost Your Marketplace Sales",
    excerpt: "Practical tips for vendors to increase visibility and drive more sales on e-commerce platforms.",
    category: "SME Growth",
    author: "Chidi Okoro",
    date: "November 28, 2025",
    readTime: "4 min read",
    image: testimonial1,
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Digital Payments in Nigeria",
    excerpt: "How mobile money and digital wallets are changing the way Nigerians transact.",
    category: "Finance",
    author: "Amina Yusuf",
    date: "November 25, 2025",
    readTime: "7 min read",
    image: testimonial2,
    featured: false,
  },
  {
    id: 6,
    title: "Building a Sustainable Food Delivery Business",
    excerpt: "Lessons from successful Nigerian food entrepreneurs on building lasting businesses.",
    category: "SME Growth",
    author: "Olumide Adeyemi",
    date: "November 20, 2025",
    readTime: "5 min read",
    image: testimonial3,
    featured: false,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Blog & Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stay informed with <span className="text-white/90">REWA</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Latest news, insights, and guides on AI, business growth, travel, finance, and Nigeria's digital transformation.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-12 bg-white text-foreground h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-articles"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-[#0AB39C] hover:bg-[#0AB39C]/90" : ""}
                data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow" data-testid={`featured-article-${article.id}`}>
                  <div className="relative h-64">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <Badge className="absolute top-4 left-4 bg-[#0AB39C]">{article.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" /> {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {article.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary" data-testid={`read-article-${article.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(featuredArticles.length > 0 ? regularArticles : filteredArticles).map((article) => (
                <Card key={article.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow" data-testid={`article-card-${article.id}`}>
                  <div className="relative h-48">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <Badge variant="secondary" className="absolute top-3 left-3">{article.category}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" data-testid="button-load-more">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#064F33] to-[#0AB39C] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never miss an update
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to our newsletter for the latest insights, tips, and REWA news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              data-testid="input-newsletter-email"
            />
            <Button className="bg-white text-[#064F33] hover:bg-white/90" data-testid="button-subscribe-newsletter">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
