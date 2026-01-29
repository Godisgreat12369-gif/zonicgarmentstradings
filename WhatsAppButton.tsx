import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const phoneNumber = '+971XXXXXXXXX';
  const message = 'Hello! I would like to inquire about your uniform products.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}

export default WhatsAppButton;
