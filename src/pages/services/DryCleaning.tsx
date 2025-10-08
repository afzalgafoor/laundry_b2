import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";
import serviceImage from "@/assets/service-dry-cleaning.jpg";

const DryCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Dry Cleaning Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dry Cleaning Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert care for delicate fabrics, formal wear, and special garments
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
              Premium Dry Cleaning
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Our professional dry cleaning service uses advanced techniques and
              eco-friendly solvents to clean and preserve your most delicate and
              valuable garments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Solvent Cleaning
                  </h3>
                  <p className="text-muted-foreground">
                    Professional-grade cleaning solutions for delicate fabrics
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Stain Treatment
                  </h3>
                  <p className="text-muted-foreground">
                    Expert removal of tough stains without damaging fabrics
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Pressing
                  </h3>
                  <p className="text-muted-foreground">
                    Crisp finishing and pressing for a polished look
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Protective Packaging
                  </h3>
                  <p className="text-muted-foreground">
                    Garment bags to keep your clothes pristine during transport
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
                Book your dry cleaning pickup online
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Free Pickup</h3>
              <p className="text-muted-foreground">
                We collect your garments at your convenience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Expert Cleaning</h3>
              <p className="text-muted-foreground">
                Professional dry cleaning and pressing by experts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Delivery</h3>
              <p className="text-muted-foreground">
                Pristine garments delivered back on hangers
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
              Professional Care for Your Best Garments
            </h2>
            <div className="bg-secondary/10 rounded-lg p-8 mb-8">
              <div className="text-4xl font-bold text-secondary mb-2">
                From $8.99/item
              </div>
              <p className="text-muted-foreground">
                Pricing varies by garment type
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Trust us with your suits, dresses, and delicate garments. Schedule
              your pickup today.
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

export default DryCleaning;
