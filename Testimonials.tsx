import { Star } from 'lucide-react';
import { Testimonial } from './types';

function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      rating: 5,
      text: 'Excellent quality uniforms for our hospital staff. The fabric is comfortable and durable. Highly recommended for medical institutions.',
      author: 'Dr. Ahmed Hassan',
      date: 'Healthcare Director',
    },
    {
      id: '2',
      rating: 5,
      text: 'We ordered custom uniforms for our hotel staff. The attention to detail and quality exceeded our expectations. Professional service!',
      author: 'Sarah Williams',
      date: 'Hotel Manager',
    },
    {
      id: '3',
      rating: 5,
      text: 'Fast delivery and great customer service. The chef uniforms are perfect for our restaurant kitchen team.',
      author: 'Mohammed Al-Rashid',
      date: 'Restaurant Owner',
    },
    {
      id: '4',
      rating: 5,
      text: 'Outstanding corporate uniforms that represent our brand perfectly. The bulk order process was smooth and efficient.',
      author: 'Lisa Chen',
      date: 'HR Manager',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          WHAT OUR CLIENTS SAY
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#16a34a" className="text-[#16a34a]" />
                ))}
              </div>
              <p className="text-[#6b7280] mb-4 line-clamp-4">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#111827]">{testimonial.author}</p>
                <p className="text-sm text-[#6b7280]">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
