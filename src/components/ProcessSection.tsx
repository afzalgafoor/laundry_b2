import React from "react";
import { CalendarCheck, Truck, Shirt, PackageCheck } from "lucide-react";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "1",
      title: "Book Service",
      description:
        "Book online or call us to schedule a convenient pickup time.",
      icon: <CalendarCheck className="w-10 h-10 text-white" />,
    },
    {
      step: "2",
      title: "We Collect",
      description:
        "Our team picks up your laundry from your specified location.",
      icon: <Truck className="w-10 h-10 text-white" />,
    },
    {
      step: "3",
      title: "Professional Care",
      description:
        "Your clothes are cleaned with the best equipment and expertise.",
      icon: <Shirt className="w-10 h-10 text-white" />,
    },
    {
      step: "4",
      title: "Delivery",
      description:
        "Fresh, clean clothes are delivered back to you — on time.",
      icon: <PackageCheck className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, convenient, and reliable service in just a few easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group rounded-2xl text-white shadow-xl overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl pt-14 pb-8 px-6"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(213 84% 20%))",
              }}
            >
              {/* Step Number */}
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-md z-20 border-4"
              >
                {step.step}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed">
                {step.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--secondary)), hsl(199 66% 65%))",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
