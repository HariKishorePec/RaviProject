import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Premium Quality Products
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Excellence in Every{" "}
              <span className="text-primary">Product</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of premium products. Quality craftsmanship meets modern design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/portfolio">
                  Browse Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Handpicked products that meet the highest standards of quality and design.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Trusted Service</h3>
              <p className="text-muted-foreground">
                Reliable and professional service you can count on for every project.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick turnaround times without compromising on quality or attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
