import { Link } from 'react-router-dom';
import { Sparkles, Leaf, Heart, Award } from 'lucide-react';

const products = [
  {
    id: 'hair',
    name: 'Premium Hair Oil',
    description: 'Nourish and strengthen your hair with our blend of natural oils',
    image: '/7a0fbc36-8365-4f9a-a5ae-4c3462d206a2.png',
    price: 'Contact for Price',
  },
  {
    id: 'body',
    name: 'Luxurious Body Oil',
    description: 'Hydrate and rejuvenate your skin with our premium body oil blend',
    image: '/81c22afd-86bf-446e-a6cc-9ea82532674e.png',
    price: 'Contact for Price',
  },
  {
    id: 'nails',
    name: 'Nail Care Oil',
    description: 'Strengthen and nourish your nails with our specialized formula',
    image: 'https://i.postimg.cc/TKjQ9xwq/nails-oil.jpg',
    price: 'Contact for Price',
  },
  {
    id: 'eyebrows',
    name: 'Eyebrows Enhancement Oil',
    description: 'Achieve fuller, more defined eyebrows with our nourishing oil',
    image: '/d8c09846-fa25-40cf-988a-c3078d77f9bd.png',
    price: 'Contact for Price',
  },
];

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure organic ingredients',
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'Never tested on animals',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully crafted formulas',
  },
  {
    icon: Sparkles,
    title: 'Visible Results',
    description: 'See the difference in weeks',
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Discover Your Natural Beauty with <span className="text-pink-500">Bloom Oil</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium cosmetic oils crafted from nature's finest ingredients for radiant skin and lustrous hair
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/79403188"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all hover:scale-105 shadow-lg"
              >
                Order Now via WhatsApp
              </a>
              <a
                href="#products"
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 group-hover:bg-pink-500 transition-colors">
                  <feature.icon className="text-pink-500 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Collection</h2>
            <p className="text-lg text-gray-600">Choose from our carefully curated range of natural beauty oils</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-pink-500 font-semibold">{product.price}</span>
                    <span className="text-pink-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Beauty care, without the complexity.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Balanced natural oil blends for everyday care
          </p>
          <a
            href="https://wa.me/79403188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
