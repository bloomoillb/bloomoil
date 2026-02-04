import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="text-pink-500" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bloom Oil</h1>
              <p className="text-xs text-pink-500">Natural Beauty Solutions</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/product/hair" className="text-gray-700 hover:text-pink-500 transition-colors">
              Hair Oil
            </Link>
            <Link to="/product/body" className="text-gray-700 hover:text-pink-500 transition-colors">
              Body Oil
            </Link>
            <Link to="/product/eyelashes" className="text-gray-700 hover:text-pink-500 transition-colors">
              Eyelashes Oil
            </Link>
            <Link to="/product/eyebrows" className="text-gray-700 hover:text-pink-500 transition-colors">
              Eyebrows Oil
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
              Cash on Delivery
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
