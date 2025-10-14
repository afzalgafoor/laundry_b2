import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Truck,
  Users,
  Shield,
  CalendarCheck,
  Shirt,
  PackageCheck,
} from "lucide-react"; // or pick relevant icons
import businessHero from "@/assets/laundry-employee-full.png"; // you’ll pick a suitable image
import ScrollReveal from "@/components/ScrollReveal";
import ProcessSection from "@/components/ProcessSection";
import aboutHero from "@/assets/about-hero.jpg";
import businesslaundry1 from "@/assets/business-laundry-1.png";
import businesslaundry2 from "@/assets/business-laundry-2.png";

const Business = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-secondary" />,
      title: "Pickup & Delivery",
      desc: "Customized collection and delivery schedules tailored to your operations.",
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Bulk Laundry Handling",
      desc: "We manage uniforms, linens, towels at scale with professional care.",
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "Quality & Hygiene Standards",
      desc: "We adhere to strict cleanliness, sanitization, and quality protocols.",
    },
  ];

  const benefits = [
    "Cost-effective bulk pricing",
    "Flexible contracts or no long-term commitment",
    "Quick turnaround times",
    "Dedicated account support",
    "Transparent billing",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={businessHero}
            alt="Business Laundry Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Laundry Solutions for Businesses & Institutions
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Tailored laundry, linen, uniform & bulk services for your enterprise
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      
      {/* Connect With Us Section */}
      <section className="bg-white py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Image */}
          <div className="relative w-full h-full">
            <img
              src={aboutHero} // replace with your actual image
              alt="Blue Basket Laundry Service"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-secondary text-white px-6 py-3 rounded-xl text-lg font-semibold flex flex-col sm:flex-row sm:items-center gap-2 shadow-lg tracking-wide">
              <span>Connect at : </span>
              <span>📞 +97145536673</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Reliable Laundry Services for Holiday Homes in Dubai!
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In the hospitality and holiday home business, first impressions
              matter—and nothing speaks comfort like clean, crisp linen and
              fresh-smelling towels. At
              <span className="font-semibold text-primary">
                {" "}
                Blue Basket Laundry
              </span>
              , we offer professional, reliable laundry services tailored
              exclusively for holiday homes, Airbnb rentals, serviced
              apartments, and guest houses across Dubai. Whether it’s regular
              linen care or on-demand cleaning between guest stays, we ensure
              your property is always guest-ready with hygienic and
              hotel-quality freshness.
            </p>

           
            <Link
              to="/contact"
              className="inline-block mt-8 px-6 py-3 bg-gradient-sky text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center"
            >
              Connect with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-gradient-hero section-padding bg-white">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer enterprise-grade laundry & linen management solutions with
            reliable service and transparency.
          </p>
        </div>
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-muted rounded-lg shadow-lg"
            >
              <div>{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Benefits of Partnering with{" "}
            <span className="text-secondary">Blue Basket Laundry</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We go beyond cleaning — we build lasting partnerships that enhance
            your operations and brand.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Timely & Reliable",
                description:
                  "We ensure your laundry is cleaned and delivered on time, so you never miss a guest check-in window.",
                icon: "⏰",
              },
              {
                title: "Hygiene Standards",
                description:
                  "Our process uses hospital-grade, fabric-safe detergents to guarantee deep cleanliness and safety.",
                icon: "🧴",
              },
              {
                title: "Doorstep Delivery",
                description:
                  "We collect and deliver laundry right at your door, aligning perfectly with your guest turnover schedule.",
                icon: "🚚",
              },
              {
                title: "Consistent Quality",
                description:
                  "Enjoy perfectly washed, soft, and fresh-smelling linens every time — no compromise on quality with us!",
                icon: "✨",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--secondary) / 80%), hsla(205, 81%, 65%, 1.00))",
                }}
              >
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--secondary)), hsl(199 66% 65%))",
                  }}
                ></div>

                {/* Icon */}
                <div className="text-5xl mb-4 flex justify-center">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry We Serve Section */}
      <section className="bg-gradient-hero section-padding bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Industry We Serve
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="flex items-center text-2xl font-semibold mb-2 text-primary">
                  🏋️ Gyms & Fitness Centers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hygienic cleaning of towels, staff uniforms, mats, and more —
                  ensuring a clean, sweat-free environment for your members.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-2xl font-semibold mb-2 text-primary">
                  🏨 Hotels & Resorts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium linen, towel, and staff uniform care to meet the
                  highest hospitality standards and enhance guest satisfaction.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-2xl font-semibold mb-2 text-primary">
                  🍽️ Restaurants & Cafés
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quick, reliable cleaning of aprons, table linens, chef coats,
                  and kitchen towels to keep your service spotless and
                  professional.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-2xl font-semibold mb-2 text-primary">
                  💇‍♀️ Salons & Spas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh, sanitized towels, robes, and staff wear cleaned to
                  perfection — ensuring a soothing and hygienic experience for
                  every client.
                </p>
              </div>
            </div>
          </div>

          
          <div className="relative w-full h-full">
            <img
              src={businesslaundry2} // replace with your actual image
              alt="Blue Basket Laundry Service"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Business;
