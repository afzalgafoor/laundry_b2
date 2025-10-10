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
      {/* <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-white py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
    
    <div className="md:w-1/2">
      <img
        src="/images/connect-with-us.jpg"
        alt="Holiday Home Laundry Service"
        className="rounded-2xl shadow-xl w-full object-cover"
      />
    </div>

    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        Reliable Laundry Services for Holiday Homes in Dubai!
      </h2>

      <p className="text-gray-700 leading-relaxed">
        In the hospitality and holiday home business, first impressions matter — and nothing speaks comfort like clean, crisp linen and fresh-smelling towels. 
        At <span className="font-semibold text-blue-700">Blue Basket Laundry</span>, we offer professional, reliable laundry services tailored exclusively for 
        holiday homes, Airbnb rentals, serviced apartments, and guest houses across Dubai.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Whether it’s regular linen care or on-demand cleaning between guest stays, we make sure your property is always guest-ready with hygienic and hotel-quality freshness.
      </p>

      <div className="pt-4">
        <p className="text-lg font-semibold text-blue-800 mb-2">📞 CONNECT WITH US</p>
        <p className="text-2xl font-bold text-blue-900 mb-6">+971 58 534 1987</p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
          Connect with us
        </button>
      </div>
    </div>
  </div>
</section> */}

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

            {/* <div className="mt-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                CONNECT WITH US
              </h3>
              <a
                href="tel:+971585341987"
                className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors duration-300"
              >
                +971 5853 41987
              </a>
            </div> */}

            <Link to="/contact" className="inline-block mt-8 px-6 py-3 bg-gradient-sky text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center">
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

      {/* Why Partner With Us */}
      {/* <section className="bg-gradient-hero section-padding bg-white">
  <div className="container-custom text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
      Why Partner With Us
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      We offer enterprise-grade laundry & linen management solutions with reliable service and transparency.
    </p>
  </div>

  <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((f, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--secondary)), hsl(199 66% 75%))",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary)), hsl(213 84% 30%))",
          }}
        ></div>


        <div className="text-5xl mb-4 text-white drop-shadow-lg">
          {f.icon}
        </div>


        <h3 className="mt-4 text-2xl font-semibold text-white">
          {f.title}
        </h3>

      
        <p className="mt-3 text-white/85 text-base leading-relaxed">
          {f.desc}
        </p>
      </div>
    ))}
  </div>
</section> */}

      {/* Benefits / Highlights */}
      {/* <section className="section-padding bg-muted">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Business Benefits
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From streamlined operations to cost savings, here’s what
              businesses get when they partner with us:
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
                src={businessHero}
                alt="Business laundry operations"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Business Benefits Section */}
{/* Business Benefits Section - Compact Version */}
{/* Business Benefits Section - Height Matched */}
{/* <section className="section-padding bg-muted">
  <div className="container-custom grid lg:grid-cols-2 gap-8 items-stretch">

    <div className="flex flex-col justify-center h-full">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Business Benefits
      </h2>
      <p className="text-base text-muted-foreground mb-6">
        Partnering with us provides businesses with streamlined operations, cost savings, and consistent quality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "Timely & Reliable Service",
          "Hygiene & Safety",
          "Cost-Effective",
          "Scalable Solutions",
          "Consistent Quality",
          "Eco-Friendly Processes",
          "Customizable Plans",
          "Dedicated Support"
        ].map((b, i) => (
          <div key={i} className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
            <span className="text-foreground text-sm">{b}</span>
          </div>
        ))}
      </div>
    </div>


    <ScrollReveal direction="left">
      <div className="overflow-hidden rounded-2xl shadow-md flex h-full">
        <img
          src={businessHero}
          alt="Business laundry operations"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </ScrollReveal>
  </div>
</section> */}




      {/* Benefits Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom text-center">
     
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Benefits of Partnering with Max Care Laundry
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We go beyond cleaning — we build lasting partnerships that enhance
            your operations and brand.
          </p>


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
                className="rounded-2xl shadow-lg p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(213 84% 20%))",
                }}
              >
          
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--secondary)), hsl(199 66% 65%))",
                  }}
                ></div>

      
                <div className="text-4xl mb-4">{benefit.icon}</div>

         
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>

            
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-white">
  <div className="container-custom text-center">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
      Benefits of Partnering with <span className="text-secondary">Blue Basket Laundry</span>
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
          <div className="text-5xl mb-4 flex justify-center">{benefit.icon}</div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3 text-white">{benefit.title}</h3>

          {/* Description */}
          <p className="text-white/80 leading-relaxed">{benefit.description}</p>
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

          {/* Right Image */}
          {/* <div className="relative">
            <div
              className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-xl bg-cover bg-center transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(0,0,50,0.3), rgba(0,0,100,0.3)), url({'/images/industry-laundry.jpg'})",
              }}
            ></div>
          </div> */}
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

      {/* Process / How It Works */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A simple 4-step process to get your laundry handled without stress
          </p>
        </div>
        <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-xl">
              1
            </div>
            <h3 className="mt-4 font-semibold">Consult & Sign</h3>
            <p className="mt-2 text-muted-foreground">We evaluate your needs and prepare a plan.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-xl">
              2
            </div>
            <h3 className="mt-4 font-semibold">Pickup & Collection</h3>
            <p className="mt-2 text-muted-foreground">We collect linens, uniforms, etc., as scheduled.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-xl">
              3
            </div>
            <h3 className="mt-4 font-semibold">Processing & Cleaning</h3>
            <p className="mt-2 text-muted-foreground">High capacity machines, quality detergents & sanitization.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-xl">
              4
            </div>
            <h3 className="mt-4 font-semibold">Delivery & Support</h3>
            <p className="mt-2 text-muted-foreground">Clean goods returned and account team available for feedback.</p>
          </div>
        </div>
      </section> */}
      {/* Process Section */}
      {/* <ProcessSection /> */}
      {/* Process Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, convenient, and reliable service in just a few easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-12">
            {[
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
            ].map((step, index) => (
              <div
                key={index}
                className="relative group rounded-2xl text-white shadow-xl overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl pt-14 pb-8 px-6"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(213 84% 20%))",
                }}
              >
         
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-md z-20">
                  {step.step}
                </div>

        
                <div className="flex justify-center mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

             
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

                <p className="text-white/80 text-base leading-relaxed">
                  {step.description}
                </p>

           
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--secondary)), hsl(199 66% 65%))",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="section-padding bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to streamline your laundry operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reach out to us for a custom quote, volume discount, or service
            plan.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section> */}

      {/* <section className="section-padding bg-muted">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Service Area</h2>
          <p className="text-lg text-muted-foreground">
            We cover businesses across [Your City / Region]. Tell us your
            location, and we’ll check coverage.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Business;
