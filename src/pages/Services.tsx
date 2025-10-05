import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shirt, 
  Sparkles, 
  Truck, 
  Clock, 
  Zap, 
  ShirtIcon,
  WashingMachine,
  Package
} from 'lucide-react';
import servicesHero from '@/assets/services-hero.jpg';
import washFoldImg from '@/assets/service-wash-fold.jpg';
import dryCleaningImg from '@/assets/service-dry-cleaning.jpg';
import steamPressingImg from '@/assets/service-steam-pressing.jpg';
import shoeCareImg from '@/assets/service-shoe-care.jpg';

const Services = () => {
  const featuredServices = [
    {
      title: 'Wash & Fold',
      description: 'Professional washing, drying, and expert folding for your everyday garments',
      image: washFoldImg,
      path: '/services/wash-and-fold',
      price: 'From $1.99/lb'
    },
    {
      title: 'Dry Cleaning',
      description: 'Expert care for delicate fabrics, formal wear, and special garments',
      image: dryCleaningImg,
      path: '/services/dry-cleaning',
      price: 'From $8.99/item'
    },
    {
      title: 'Steam Pressing',
      description: 'Professional steam pressing for crisp, wrinkle-free clothes',
      image: steamPressingImg,
      path: '/services/steam-pressing',
      price: 'From $4.99/item'
    },
    {
      title: 'Shoe Care',
      description: 'Professional cleaning, polishing, and restoration for all types of footwear',
      image: shoeCareImg,
      path: '/services/shoe-care',
      price: 'From $15.99/pair'
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: 'Pickup & Delivery',
      description: 'Convenient pickup and delivery service right to your doorstep on your schedule.',
      price: 'Free with $25+ order',
    },
    {
      icon: Clock,
      title: 'Express Service',
      description: 'Rush service for urgent laundry needs with same-day or next-day turnaround.',
      price: '+50% surcharge',
    },
  ];

  const specialties = [
    {
      icon: Package,
      title: 'Comforters & Bedding',
      description: 'Large item cleaning for comforters, quilts, and bedding sets',
    },
    {
      icon: ShirtIcon,
      title: 'Wedding Dresses',
      description: 'Specialized care for wedding gowns and formal wear',
    },
    {
      icon: Sparkles,
      title: 'Leather & Suede',
      description: 'Expert cleaning for leather jackets, suede items, and accessories',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="Blue Basket Laundry Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Comprehensive laundry and dry cleaning solutions designed to meet
            all your garment care needs with professional quality and convenience.
          </p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Click any service to learn more about our professional care process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 h-80 block"
              >
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    {service.title}
                  </h3>
                  <p className="text-lg mb-3 opacity-90 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    {service.description}
                  </p>
                  <div className="text-xl font-semibold text-secondary-foreground transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    {service.price}
                  </div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Extra convenience for your laundry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-secondary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialty Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert care for items that require special attention and handling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <specialty.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, convenient, and reliable service in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Book Service',
                description: 'Book online or call us to schedule a convenient pickup time',
              },
              {
                step: '2',
                title: 'We Collect',
                description: 'Our team picks up your laundry from your specified location',
              },
              {
                step: '3',
                title: 'Professional Care',
                description: 'We clean your items using the best equipment and techniques',
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Fresh, clean clothes delivered back to you on time',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
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
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100" asChild>
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

export default Services;