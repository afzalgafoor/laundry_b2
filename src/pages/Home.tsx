import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";
import washFoldImage from "@/assets/service-wash-fold.jpg";
import dryCleaningImage from "@/assets/service-dry-cleaning.jpg";
import steamPressingImage from "@/assets/service-steam-pressing.jpg";
import shoeCareImage from "@/assets/service-shoe-care.png";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ScrollReveal from "@/components/ScrollReveal";

const Home = () => {
  const services = [
    {
      title: "Wash & Fold",
      description:
        "Professional washing, drying, and expert folding for everyday garments",
      image: washFoldImage,
      link: "/services/wash-and-fold",
    },
    {
      title: "Dry Cleaning",
      description:
        "Expert care for delicate fabrics, formal wear, and special garments",
      image: dryCleaningImage,
      link: "/services/dry-cleaning",
    },
    {
      title: "Steam Pressing",
      description:
        "Crisp, wrinkle-free clothes with professional steam pressing",
      image: steamPressingImage,
      link: "/services/steam-pressing",
    },
    {
      title: "Shoe Care",
      description: "Professional cleaning and polishing for all footwear",
      image: shoeCareImage,
      link: "/services/shoe-care",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Excellent service! My clothes always come back perfectly clean and fresh.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "The pickup and delivery service is so convenient. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Professional dry cleaning at reasonable prices. Great customer service.",
      rating: 5,
    },
  ];

  const benefits = [
    "Professional cleaning equipment",
    "Eco-friendly detergents",
    "Same-day service available",
    "Satisfaction guaranteed",
    "Affordable pricing",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Blue Basket Laundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10 text-center text-white fade-in">
          <h1 className="font-default text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Premium Laundry &{" "}
            {/* <span className="text-[#C53030]">Dry Cleaning</span> */}
            <span className="text-secondary">Dry Cleaning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">Fresh Clothes, Fresh Start</p>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Professional laundry and dry cleaning services. Experience the
            difference of expert care for your garments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive laundry solutions to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative overflow-hidden rounded-lg h-[400px] block"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors duration-300" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-8 transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold mb-4 transition-all duration-300 group-hover:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-lg opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <div className="mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-hero section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Blue Basket?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine professional care, eco-friendly methods, and timely
              delivery to make your life easier. Here’s why customers choose us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={washFoldImage}
                alt="Why Choose Us"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <WhoWeAreSection />

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers who trust us with their laundry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-hero section-padding ">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Fresh, Clean Clothes?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your service today and let us take care of your laundry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-secondary hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Visit our facility or schedule a pickup from anywhere in the
              service area
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=25.242641,55.298023&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Blue Basket Laundry Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
