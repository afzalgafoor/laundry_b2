import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals or small households",
      features: [
        "Up to 15 lbs per month",
        "Standard wash & fold",
        "48-hour turnaround",
        "Basic stain treatment",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Family Plan",
      price: "$49",
      period: "/month",
      description: "Great for busy families and larger households",
      features: [
        "Up to 30 lbs per month",
        "Wash & fold + dry cleaning",
        "24-hour turnaround",
        "Advanced stain treatment",
        "Garment repairs included",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Premium Plan",
      price: "$79",
      period: "/month",
      description: "Comprehensive service for premium care",
      features: [
        "Up to 50 lbs per month",
        "All services included",
        "Same-day service available",
        "Professional stain removal",
        "Garment repairs & alterations",
        "Special care items",
      ],
      popular: false,
      cta: "Go Premium",
    },
  ];

  const payPerUse = [
    { service: "Wash & Fold", price: "$1.99", unit: "per lb" },
    { service: "Dry Cleaning", price: "$8.99", unit: "per item" },
    { service: "Dress Shirts", price: "$3.99", unit: "per shirt" },
    { service: "Comforters (Twin)", price: "$19.99", unit: "each" },
    { service: "Comforters (Queen)", price: "$24.99", unit: "each" },
    { service: "Comforters (King)", price: "$29.99", unit: "each" },
    { service: "Wedding Dress Cleaning", price: "$149.99", unit: "each" },
  ];

  const additionalServices = [
    {
      service: "Express Service (Same Day)",
      price: "+50%",
      description: "Rush processing for urgent needs",
    },
    {
      service: "Starch Service",
      price: "+$1.00",
      description: "Light, medium, or heavy starch",
    },
    {
      service: "Garment Repairs",
      price: "From $5.99",
      description: "Basic alterations and repairs",
    },
    {
      service: "Eco-Friendly Cleaning",
      price: "+$2.00",
      description: "Biodegradable detergents",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Choose the plan that works best for you, or pay as you go. No
              hidden fees, no surprises – just quality service at fair prices.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Plans Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Monthly Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Save money with our convenient monthly plans. Perfect for regular
              customers who want consistent service and better value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? "border-secondary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Best Value
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-primary mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pay-Per-Use Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pay-Per-Use Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Prefer to pay as you go? Here's our transparent pricing for
              individual services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {payPerUse.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-primary">
                        {item.service}
                      </span>
                      <div className="text-right">
                        <span className="text-xl font-bold text-secondary">
                          {item.price}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {item.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your laundry experience with our optional add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-primary">
                      {service.service}
                    </h3>
                    <span className="text-xl font-bold text-secondary">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pricing FAQ
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Are there any hidden fees?",
                answer:
                  "No hidden fees ever. Our pricing is completely transparent. The only additional charges would be for optional services that you specifically request.",
              },
              {
                question: "What if I go over my monthly limit?",
                answer:
                  "Any overage is charged at our standard pay-per-use rates. We'll always notify you before processing items that would exceed your plan limits.",
              },
              {
                question: "Can I cancel my monthly plan anytime?",
                answer:
                  "Yes, you can cancel your monthly plan at any time with 30 days notice. No cancellation fees or penalties.",
              },
              {
                question: "Do you offer discounts for new customers?",
                answer:
                  "Yes! New customers get 20% off their first order. We also offer referral bonuses and occasional seasonal promotions.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose your plan or start with pay-per-use. Either way, you'll love
            the convenience and quality of Blue Basket Laundry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-secondary hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">Book Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-secondary"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
