import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = '+97145536673'; // Replace with actual phone number
  const whatsappNumber = '+971547834850'; // Replace with actual WhatsApp number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to schedule a laundry pickup.`, '_blank');
  };

  return (
    <>
      {/* Call Button - Bottom Left */}
      <button
        onClick={handleCall}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* WhatsApp Button - Bottom Right */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </>
  );
};

export default FloatingButtons;