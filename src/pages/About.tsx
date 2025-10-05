import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Leaf, Clock, Users, Award } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'We treat every garment with the same care we would our own',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'If you\'re not satisfied, we\'ll make it right',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Using environmentally safe detergents and processes',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'On-time pickup and delivery, every single time',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' },
    { number: '99.9%', label: 'Satisfaction Rate' },
  ];

  const whyChooseUs = [
    'State-of-the-art cleaning equipment',
    'Trained and experienced staff',
    'Competitive and transparent pricing',
    'Convenient pickup and delivery',
    'Special care for delicate items',
    'Quick turnaround times',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="About Blue Basket Laundry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Blue Basket Laundry
            </h1>
            <p className="text-xl leading-relaxed">
              Your trusted partner for premium laundry and dry cleaning services.
              We're committed to providing exceptional care for your garments
              with convenience and reliability you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2019, Blue Basket Laundry began with a simple mission:
                  to provide busy families and professionals with high-quality laundry
                  services that fit seamlessly into their lives.
                </p>
                <p>
                  What started as a small neighborhood laundromat has grown into
                  a trusted service provider, serving thousands of customers across
                  the city. Our commitment to excellence and customer satisfaction
                  has remained unchanged since day one.
                </p>
                <p>
                  Today, we combine traditional laundry expertise with modern
                  convenience, offering pickup and delivery services that save
                  you time while ensuring your clothes receive the care they deserve.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that great laundry service goes beyond just cleaning clothes.
              It's about providing peace of mind, saving valuable time, and delivering
              exceptional results every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-6">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4">
                Award-Winning Service
              </h3>
              <p className="text-muted-foreground text-center">
                Recognized for excellence in customer service and
                quality by local business associations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Blue Basket?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just another laundry service. Here's what sets us apart:
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Commitment
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                Every member of our team is trained in the latest cleaning techniques
                and committed to providing you with the best possible service.
                We take pride in treating your clothes with the same care and attention
                we would give our own.
              </p>
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <blockquote className="text-xl italic text-primary mb-4">
                    "Our goal is simple: to give you more time for the things that matter
                    most while ensuring your clothes always look their absolute best."
                  </blockquote>
                  <p className="font-semibold text-secondary">
                    - The Blue Basket Laundry Team
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;