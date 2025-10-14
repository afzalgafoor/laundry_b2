import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";
import serviceImage from "@/assets/service-wash-fold.jpg";

const WashAndFold = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Wash & Fold Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wash & Fold Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional washing, drying, and expert folding for your everyday
            garments
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
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Our Wash & Fold service takes care of everything from start to
              finish. Just hand us your laundry, and we'll return it fresh,
              clean, and perfectly folded.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Washing
                  </h3>
                  <p className="text-muted-foreground">
                    High-quality detergents and proper sorting by color and
                    fabric type
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Machine Drying</h3>
                  <p className="text-muted-foreground">
                    Optimal temperature settings to protect your garments
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Folding</h3>
                  <p className="text-muted-foreground">
                    Perfectly folded and organized for easy storage
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Fabric Softener
                  </h3>
                  <p className="text-muted-foreground">
                    Included for that fresh, soft feel on all garments
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
              <h3 className="text-xl font-semibold mb-2">
                1. Schedule Service
              </h3>
              <p className="text-muted-foreground">
                Place your dirty clothes in a bag and book your service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. We Pick Up</h3>
              <p className="text-muted-foreground">
                Our driver collects your laundry at your convenience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. We Clean & Fold</h3>
              <p className="text-muted-foreground">
                Professional washing, drying, and expert folding
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Delivery</h3>
              <p className="text-muted-foreground">
                Fresh, folded clothes delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default WashAndFold;
