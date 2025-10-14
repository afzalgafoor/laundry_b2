import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";
import serviceImage from "@/assets/service-curtain.png"; // Use your curtains/carpet image here

const CurtainsCarpet = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Curtains & Carpet Cleaning Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Curtains & Carpet Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional cleaning and maintenance for curtains and carpets
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
              Expert Curtains & Carpet Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              From delicate curtains to heavily used carpets, our professional cleaning
              service ensures your home looks fresh, clean, and hygienic.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
                  <p className="text-muted-foreground">
                    Thorough cleaning for all types of curtains and carpets
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Stain Removal</h3>
                  <p className="text-muted-foreground">
                    Specialized treatments for tough stains and spills
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Deodorizing & Freshening</h3>
                  <p className="text-muted-foreground">
                    Eliminate odors and leave fabrics fresh and hygienic
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fabric Protection</h3>
                  <p className="text-muted-foreground">
                    Gentle care for delicate materials to maintain longevity
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
                Book your curtains & carpet cleaning service online
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Free Pickup</h3>
              <p className="text-muted-foreground">
                We collect your curtains or carpets from your home
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                3. Professional Cleaning
              </h3>
              <p className="text-muted-foreground">
                Expert deep cleaning, stain removal, and freshening
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Delivery</h3>
              <p className="text-muted-foreground">
                Cleaned curtains and carpets delivered back to your home
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
            with their curtain and carpet cleaning needs.
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

export default CurtainsCarpet;
