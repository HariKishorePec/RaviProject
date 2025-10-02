import Navbar from "@/components/Navbar";
import { Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Building excellence through quality and innovation
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a passion for excellence, EliteStore has been delivering premium products 
                and exceptional service to our customers. We believe in the perfect blend of quality, 
                design, and functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experts carefully curates each product in our portfolio, ensuring that 
                every item meets our rigorous standards. We're committed to providing you with products 
                that not only meet but exceed your expectations.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)]">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product is carefully inspected and tested.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)]">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're here to help you find exactly what you need.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-[var(--shadow-card)]">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of trends, bringing you the latest and most innovative products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
