
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { Product } from './types';
import { Instagram, Twitter, Facebook, ArrowRight, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="space-y-10">
          <div className="flex items-center">
            <span className="text-4xl font-serif font-black tracking-tighter">BUKHARI</span>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 ml-2 mt-5 animate-pulse"></div>
          </div>
          <p className="text-slate-400 leading-relaxed text-lg font-light">
            Crafting the 2026 experience. We believe in the harmony of technology and human craftsmanship.
          </p>
          <div className="flex space-x-6">
            {[Instagram, Twitter, Facebook, Github].map((Icon, i) => (
              <a key={i} href="#" className="p-4 bg-white/5 rounded-full hover:bg-indigo-600 hover:text-white transition-all text-slate-400 hover:scale-110">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Sectors</h4>
          <ul className="space-y-6 text-slate-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Neuro-Electronics</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Sustainable Couture</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Smart Living</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Organic Beauty</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Governance</h4>
          <ul className="space-y-6 text-slate-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Origin Tracking</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Ethical AI Charter</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Global Logistics</li>
            <br/>
            <li className="hover:text-white cursor-pointer transition-all hover:translate-x-2 inline-block">Digital Rights</li>
          </ul>
        </div>

        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <h4 className="text-lg font-bold mb-6">The Collective</h4>
          <p className="text-slate-400 text-sm mb-8 font-light">Join our network for early access to 2026 neural drops.</p>
          <div className="space-y-6">
            <input 
              type="email" 
              placeholder="Your digital identifier"
              className="w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
            />
            <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all transform hover:scale-105 active:scale-95">
              Secure Transmission
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          &copy; 2026 BUKHARI ARCHIVE. SYSTEM OPERATIONAL.
        </div>
        
        <div className="flex items-center gap-4 px-10 py-5 bg-white/5 rounded-full border border-white/5 shadow-inner">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Created by</span>
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400 hover:text-white transition-colors cursor-default">Murtaza Shah</span>
        </div>
        
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <span className="hover:text-white cursor-pointer transition-colors">Quantum Security</span>
          <span className="hover:text-white cursor-pointer transition-colors">Neural Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Protocols</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-white">
        <Navbar 
          onCartClick={() => setIsCartOpen(true)} 
          onNavigate={navigateToPage}
        />
        
        <main className="animate-fade-in">
          {currentPage === 'home' && (
            <Home 
              onShopNow={() => navigateToPage('shop')} 
              onViewProduct={navigateToProduct}
            />
          )}
          {currentPage === 'shop' && (
            <Shop onViewProduct={navigateToProduct} />
          )}
          {currentPage === 'details' && selectedProduct && (
            <ProductDetails 
              product={selectedProduct} 
              onBack={() => navigateToPage('shop')}
            />
          )}
          {currentPage === 'checkout' && (
            <Checkout onSuccess={() => navigateToPage('home')} />
          )}
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => {
            setIsCartOpen(false);
            navigateToPage('checkout');
          }}
        />
      </div>
    </CartProvider>
  );
};

export default App;
