import { useParams, Link } from 'react-router-dom';
import { Check, Sparkles, Droplet, Leaf, Award } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  volume: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  benefits: string[];
  usage: string[];
  image: string;
  galleryImages: string[];
  videoPlaceholder: string;
}

const productsData: Record<string, Product> = {
  hair: {
    id: 'hair',
    name: 'Premium Hair Oil',
    volume: '200ml',
    description: 'Transform your hair with our luxurious blend of natural oils',
    longDescription: 'Our Premium Hair Oil is a carefully crafted blend of coconut oil, castor oil, sweet almond oil, and rosemary extract. This powerful combination works synergistically to nourish your hair from root to tip, promoting healthy growth, reducing breakage, and adding natural shine and softness.',
    ingredients: ['Coconut Oil', 'Castor Oil', 'Sweet Almond Oil', 'Rosemary Extract', 'Vitamin E'],
    benefits: [
      'Promotes hair growth and reduces hair fall',
      'Deeply nourishes and moisturizes hair and scalp',
      'Adds natural shine and softness',
      'Strengthens hair follicles and reduces breakage',
      'Helps with dandruff and dry scalp',
      'Suitable for all hair types',
    ],
    usage: [
      'Apply a small amount to your palms and warm between hands',
      'Massage gently into scalp using circular motions',
      'Work through hair from roots to tips',
      'Leave on for at least 2 hours or overnight for best results',
      'Wash with mild shampoo',
      'Use 2-3 times per week for optimal results',
    ],
    image: '/7a0fbc36-8365-4f9a-a5ae-4c3462d206a2.png',
    galleryImages: [
      'https://images.pexels.com/photos/3762155/pexels-photo-3762155.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    videoPlaceholder: 'https://images.pexels.com/photos/7755507/pexels-photo-7755507.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  body: {
    id: 'body',
    name: 'Luxurious Body Oil',
    volume: '200ml',
    description: 'Indulge your skin with our premium body oil blend',
    longDescription: 'Our Luxurious Body Oil is formulated with a blend of natural oils that deeply hydrate and nourish your skin. This lightweight yet intensely moisturizing formula absorbs quickly, leaving your skin soft, smooth, and glowing without any greasy residue.',
    ingredients: ['Jojoba Oil', 'Argan Oil', 'Sweet Almond Oil', 'Vitamin E', 'Essential Oils'],
    benefits: [
      'Deeply hydrates and moisturizes skin',
      'Improves skin elasticity and firmness',
      'Reduces appearance of stretch marks and scars',
      'Provides long-lasting moisture',
      'Leaves skin soft and radiant',
      'Non-greasy, fast-absorbing formula',
    ],
    usage: [
      'Apply after shower on slightly damp skin for best absorption',
      'Pour a small amount into your palms',
      'Massage gently onto body in circular motions',
      'Focus on dry areas like elbows, knees, and feet',
      'Use daily for best results',
      'Can also be added to bath water for extra luxury',
    ],
    image: '/81c22afd-86bf-446e-a6cc-9ea82532674e.png',
    galleryImages: [
      'https://images.pexels.com/photos/6621172/pexels-photo-6621172.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    videoPlaceholder: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  nails: {
    id: 'nails',
    name: 'Nail Care Oil',
    volume: '20ml',
    description: 'Strengthen and beautify your nails naturally',
    longDescription: 'Our Nail Care Oil is specially formulated to nourish, strengthen, and protect your nails. Enriched with natural oils and essential nutrients, this lightweight formula promotes healthy nail growth, prevents breakage, and restores natural shine and vitality to weak or damaged nails.',
    ingredients: ['Jojoba Oil', 'Almond Oil', 'Vitamin E', 'Biotin', 'Tea Tree Oil'],
    benefits: [
      'Promotes strong, healthy nail growth',
      'Prevents nail breakage and splitting',
      'Deeply nourishes nail beds and cuticles',
      'Restores natural shine and radiance',
      'Protects against brittleness and peeling',
      'Visible results in 2-3 weeks',
    ],
    usage: [
      'Wash and dry your hands and nails thoroughly',
      'Apply a small amount to each nail and cuticle',
      'Massage gently in circular motions',
      'Focus on nail beds and surrounding skin',
      'Use daily, preferably before bed',
      'For best results, use consistently for 3-4 weeks',
    ],
    image: 'https://i.postimg.cc/TKjQ9xwq/nails-oil.jpg',
    galleryImages: [
      'https://images.pexels.com/photos/3965674/pexels-photo-3965674.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3962273/pexels-photo-3962273.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    videoPlaceholder: 'https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  eyebrows: {
    id: 'eyebrows',
    name: 'Eyebrows Enhancement Oil',
    volume: '15ml',
    description: 'Fuller, more defined eyebrows naturally',
    longDescription: 'Our Eyebrows Enhancement Oil is designed to nourish and strengthen your eyebrows, promoting fuller, thicker growth. This powerful blend of natural oils and vitamins helps fill in sparse areas, defines your brows, and gives you that coveted bold, beautiful look.',
    ingredients: ['Castor Oil', 'Rosemary Oil', 'Vitamin E', 'Biotin', 'Natural Growth Factors'],
    benefits: [
      'Promotes eyebrow growth and thickness',
      'Fills in sparse and thin areas',
      'Strengthens and conditions brow hair',
      'Defines and shapes eyebrows naturally',
      'Reduces brow hair loss',
      'Visible results in 3-4 weeks',
    ],
    usage: [
      'Cleanse eyebrow area thoroughly',
      'Apply a small amount using the applicator or clean spoolie',
      'Brush gently through eyebrows',
      'Massage lightly into skin beneath brows',
      'Use twice daily - morning and night for best results',
      'Be patient and consistent for optimal growth',
    ],
    image: '/d8c09846-fa25-40cf-988a-c3078d77f9bd.png',
    galleryImages: [
      'https://images.pexels.com/photos/3373742/pexels-photo-3373742.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    videoPlaceholder: 'https://images.pexels.com/photos/3762632/pexels-photo-3762632.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
};

const relatedProducts = (currentId: string) => {
  return Object.values(productsData).filter(p => p.id !== currentId).slice(0, 3);
};

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
        <Link to="/" className="text-pink-500 hover:underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  const related = relatedProducts(product.id);

  return (
    <div>
      <section className="py-12 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.galleryImages.map((img, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {product.volume} Bottle
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow">
                  <Leaf className="text-green-500" size={20} />
                  <span className="text-sm font-semibold">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow">
                  <Award className="text-pink-500" size={20} />
                  <span className="text-sm font-semibold">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow">
                  <Sparkles className="text-yellow-500" size={20} />
                  <span className="text-sm font-semibold">Proven Results</span>
                </div>
              </div>

              <div className="bg-pink-500 text-white p-6 rounded-2xl">
                <p className="text-2xl font-bold mb-2">Ready to Order?</p>
                <p className="mb-4 opacity-90">Contact us on WhatsApp for pricing and availability</p>
                <a
                  href="https://wa.me/79403188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                >
                  Order via WhatsApp
                </a>
                <p className="mt-4 text-sm opacity-90">💳 Cash on Delivery Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Ingredients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Droplet className="text-pink-500 mx-auto mb-2" size={32} />
                    <p className="font-semibold text-gray-800 text-sm">{ingredient}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use</h2>
              <div className="space-y-4">
                {product.usage.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Demonstration</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={product.videoPlaceholder}
                alt="Video demonstration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full">
                  <div className="text-center">
                    <Sparkles className="text-pink-500 mx-auto mb-2" size={48} />
                    <p className="text-gray-800 font-semibold">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <span className="text-pink-500 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
