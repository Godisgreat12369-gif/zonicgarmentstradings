import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-white">
      <div className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <a href="/" className="hover:text-[#16a34a] transition-colors">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-8">Get in Touch</h2>
            <p className="text-[#6b7280] mb-8">
              Have questions about our products or need a bulk order quote? We're here to help!
              Fill out the form or reach us through any of the contact methods below.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Phone</h3>
                  <p className="text-[#6b7280]">+971 XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Email</h3>
                  <p className="text-[#6b7280]">info@justneedles.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Address</h3>
                  <p className="text-[#6b7280]">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Business Hours</h3>
                  <p className="text-[#6b7280]">Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#6b7280]">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#111827] mb-6">Send us a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#111827] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111827] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#16a34a] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
