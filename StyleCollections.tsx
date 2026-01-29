import { StyleCollection } from './types';

function StyleCollections() {
  const collections: StyleCollection[] = [
    {
      title: 'Timeless Professional',
      description: 'Classic cuts with modern fabrics for lasting elegance',
      image: 'https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Performance Comfort',
      description: 'Technical fabrics designed for all-day wear',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Contemporary Casual',
      description: 'Relaxed professional attire for modern workplaces',
      image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          STYLE COLLECTIONS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-80 bg-gray-200 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#16a34a] transition-colors">
                  {collection.title}
                </h3>
                <p className="text-[#6b7280]">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StyleCollections;
