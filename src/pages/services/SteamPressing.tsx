import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";
import serviceImage from "@/assets/service-steam-pressing.jpg";

const SteamPressing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Steam Pressing Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Steam Pressing Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Crisp, wrinkle-free clothes with professional steam pressing
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book Service</Link>
          </Button>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Professional Pressing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Our steam pressing service delivers crisp, professional results
              for your dress shirts, pants, and formal wear using
              state-of-the-art equipment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Steam Technology
                  </h3>
                  <p className="text-muted-foreground">
                    High-quality steam pressing for perfect results
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Starch Options</h3>
                  <p className="text-muted-foreground">
                    Choose your preferred starch level for shirts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Expert Technique
                  </h3>
                  <p className="text-muted-foreground">
                    Trained professionals for consistent quality
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hanger or Fold</h3>
                  <p className="text-muted-foreground">
                    Return your items on hangers or neatly folded
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-gradient-hero section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Schedule Service</h3>
              <p className="text-muted-foreground">
                Schedule your pressing service online
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. We Collect</h3>
              <p className="text-muted-foreground">
                Free pickup from your location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Steam Press</h3>
              <p className="text-muted-foreground">
                Professional pressing with attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Deliver</h3>
              <p className="text-muted-foreground">
                Crisp clothes returned on hangers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Look Sharp Every Day
            </h2>
            <div className="bg-secondary/10 rounded-lg p-8 mb-8">
              <div className="text-4xl font-bold text-secondary mb-2">
                From $3.99/item
              </div>
              <p className="text-muted-foreground">
                Perfect for dress shirts and formal wear
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Get perfectly pressed clothes delivered to your door. Book your
              service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View All Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Blue Basket Laundry
            with their garment care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-secondary hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">Schedule Service</Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SteamPressing;
