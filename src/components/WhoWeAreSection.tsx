import { useState } from "react";
import mainImage from "@/assets/laundry-employee-full.png"; // single image
import ScrollReveal from "@/components/ScrollReveal";
import CountUpOnScroll from "@/components/CountUpOnScroll";

const WhoWeAreSection = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}

        <div className="space-y-4 order-2 lg:order-1">
          {/* <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            WHO WE ARE
          </span> */}

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Blue Basket Lundry – Your One-Stop{" "}
            <span className="text-secondary">Laundry & Cleaning</span>{" "}
            Solutions!
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Blue Basket Laundry, we go beyond just laundry – we bring a
            complete care solution for your garments and home essentials. Based
            in Dubai, we specialize in professional laundry, ironing, dry
            cleaning, curtain cleaning, sofa cleaning, carpet cleaning, shoe
            cleaning, and cloth alteration services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            <div>✔ All-in-One Solution</div>
            <div>✔ Same-Day Service Available</div>
            <div>✔ Experienced Experts</div>
            <div>✔ Fabric-Safe, Eco-Friendly</div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-6">
            <div className=" inline-flex rounded-xl overflow-hidden shadow-sm border border-blue-200">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-2 font-semibold transition-all ${
                  activeTab === "vision"
                    ? "bg-secondary text-white"
                    : "bg-blue-100 text-primary hover:bg-blue-200"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2 font-semibold transition-all ${
                  activeTab === "mission"
                    ? "bg-secondary text-white"
                    : "bg-blue-100 text-primary hover:bg-blue-200"
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* Tab content (fixed height) */}
          <div className="mt-4 text-gray-700 min-h-[100px] text-center">
            {activeTab === "vision" ? (
              <p>
                To be Dubai’s most trusted all-in-one garment and home care
                brand, setting the benchmark for service excellence, innovation,
                and customer satisfaction.
              </p>
            ) : (
              <p>
                To provide high-quality, eco-friendly, and timely laundry and
                home care services that make life easier for our customers,
                while ensuring professional standards in every interaction.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <ScrollReveal direction="right">
          <div className="relative order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={mainImage}
              alt="Max Care Laundry"
              className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay Text Top */}
            {/* <ScrollReveal direction="left"> */}
            <div className="absolute top-6 left-6 bg-secondary text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg tracking-wide">
              <CountUpOnScroll
                start={1}
                end={10}
                duration={1000}
                suffix="K+ "
              />
              <span>Completed Work</span>
            </div>
            {/* </ScrollReveal> */}

            {/* Overlay Text Bottom */}
            {/* <ScrollReveal direction="left"> */}
            <div className="absolute bottom-6 right-6 bg-secondary text-white px-6 py-3 rounded-xl text-lg font-semibold flex flex-col sm:flex-row sm:items-center gap-2 shadow-lg tracking-wide">
              <span>🕗 8.00 AM - 11.00 PM</span>
              <span>📞 +971585341987</span>
            </div>
            {/* </ScrollReveal> */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
