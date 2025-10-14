import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Truck,
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Booking Request Received!",
  //     description: "We'll contact you within 2 hours to confirm your pickup time.",
  //   });
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     service: '',
  //     address: '',
  //     pickupDate: '',
  //     message: ''
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Send email using EmailJS
    // emailjs
    //   .sendForm(
    //     "service_ejzrnst",
    //     "template_zevzqwl",
    //     formRef.current,
    //     "W0X2LyvrFSFIqOIFUC4xQ"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Email sent:", result.text);
    //       toast({
    //         title: "Message Sent!",
    //         description: "We'll get back to you within 24 hours.",
    //       });
    //       setFormData({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         service: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       console.error("Email failed:", error.text);
    //       toast({
    //         title: "Error",
    //         description: "Failed to send message. Please try again later.",
    //         variant: "destructive",
    //       });
    //     }
    //   );
    emailjs
      .sendForm(
        "service_2uaq5zi",
        "template_zevzqwl",
        formRef.current,
        "mciaY7dee9YclxBTn"
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result);
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          toast({
            title: "Error",
            description: `Failed to send message: ${error.text || error}`,
            variant: "destructive",
          });
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+97145536673",
      action: "tel:+97145536673",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+971 54 783 4850",
      action: "https://wa.me/+971547834850",
    },
    {
      icon: Mail,
      title: "Email",
      details: "bluebasketdxb@gmail.com",
      action: "mailto:bluebasketdxb@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Shop 14, Rose 1 Building Al Karama, Dubai, UAE",
      action:
        "https://maps.google.com/?q=Shop 14, Rose 1 Building Al Karama, Dubai, UAE",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Contact Blue Basket Laundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Ready to dive into our services? Get in touch with us and
              experience the convenience of professional laundry service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    Book Your Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Needed</Label>

                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wash-fold">
                              Wash & Fold
                            </SelectItem>
                            <SelectItem value="dry-cleaning">
                              Dry Cleaning
                            </SelectItem>
                            <SelectItem value="steam-pressing">
                              Steam Pressing
                            </SelectItem>
                            <SelectItem value="shoe-care">Shoe Care</SelectItem>
                            <SelectItem value="curtains-carpet">
                              Curtains & Carpet
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Notes</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any special instructions or questions..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {/* <Truck className="w-5 h-5 mr-2" /> */}
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">
                            {info.title}
                          </h3>
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-secondary transition-colors"
                            target={
                              info.action.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.action.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.details}
                          </a>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full justify-start"
                      variant="outline"
                      asChild
                    >
                      <a href="tel:+97145536673">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      className="w-full justify-start bg-green-500 hover:bg-green-600 text-white"
                      asChild
                    >
                      <a
                        href="https://wa.me/+971547834850"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    <Button
                      className="w-full justify-start"
                      variant="outline"
                      asChild
                    >
                      <a href="mailto:bluebasketdxb@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
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

export default Contact;
