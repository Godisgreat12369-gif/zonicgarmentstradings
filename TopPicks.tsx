import ProductCard from './ProductCard';
import { Product } from './types';

function TopPicks() {
  const products: Product[] = [
    {
      id: '1',
      title: 'Unisex Chef Jacket - Twill Cotton Blend with Enhanced Safety and Comfort',
      price: 150,
      maxPrice: 350,
      image: 'https://images.pexels.com/photos/6646167/pexels-photo-6646167.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'BESTSELLER',
    },
    {
      id: '2',
      title: 'Waitress Uniform - Dress Shirt and Dress Pant',
      price: 150,
      maxPrice: 300,
      image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'POPULAR',
    },
    {
      id: '3',
      title: "Men's White Cotton Lab Coat - Professional Doctor's Coat (S-3XL) Made in UAE",
      price: 300,
      maxPrice: 450,
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'PREMIUM',
    },
    {
      id: '4',
      title: 'Surgical Cap - Unisex | Adjustable Fit | Premium Gaberdine Fabric',
      price: 55,
      maxPrice: 85,
      image: 'https://images.pexels.com/photos/8460412/pexels-photo-8460412.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'NEW',
    },
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          TOP PICKS THIS WEEK
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopPicks;
