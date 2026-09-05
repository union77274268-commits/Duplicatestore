import React from 'react';
import { Search, ShoppingBag, User, Home, Heart } from 'lucide-react'; // You may need to install lucide-react: npm install lucide-react

const MobileHomePage = () => {
  // --- Mock Data for Products ---
  const products = [
    { id: 1, name: 'Super Soft Pencils', price: '₹199', image: 'https://placehold.co/300x300/e0f2fe/0ea5e9?text=Pencils&font=montserrat' },
    { id: 2, name: 'Cute Plushie Bear', price: '₹599', image: 'https://placehold.co/300x300/fce7f3/ed64a6?text=Bear&font=montserrat' },
    { id: 3, name: 'Pastel Notebook Set', price: '₹349', image: 'https://placehold.co/300x300/dbeafe/3b82f6?text=Notebooks&font=montserrat' },
    { id: 4, name: 'Dancing Dino Toy', price: '₹449', image: 'https://placehold.co/300x300/ffedd5/f97316?text=Dino&font=montserrat' },
  ];

  // --- Mock Data for Categories ---
  const categories = [
    { id: 1, name: 'Stationery', icon: '✏️' },
    { id: 2, name: 'Toys', icon: '🧸' },
    { id: 3, name: 'Gifts', icon: '🎁' },
    { id: 4, name: 'Sale', icon: '🏷️' },
  ];

  return (
    // Main Container: Adds padding at the bottom so the floating nav doesn't cover content
    <div className="min-h-screen pb-24 bg-amber-50 font-nunito text-slate-800">
      
      {/* --- Top Bar with Search --- */}
      <div className="sticky top-0 z-40 bg-amber-50/80 backdrop-blur-md px-4 py-3 shadow-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for cute stuff..." 
            className="w-full py-3 pl-10 pr-4 text-sm bg-white border-none rounded-full shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none placeholder-slate-400 font-nunito text-slate-700"
          />
        </div>
      </div>

      {/* --- Hero Section --- */}
      <div className="px-4 mt-4">
        <div className="relative w-full h-48 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl shadow-lg overflow-hidden flex items-center justify-center">
          {/* Replace this div with an <img> tag for your hero image */}
          <div className="text-center z-10 px-6">
            <h2 className="font-fredoka text-3xl text-slate-800 mb-1 drop-shadow-sm">
              New Arrivals!
            </h2>
            <p className="text-slate-700 font-semibold text-sm mb-3">
              Super cute gifts for your loved ones.
            </p>
            <button className="bg-white text-pink-500 font-fredoka px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow active:scale-95">
              Shop Now
            </button>
          </div>
          {/* Decorative background blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* --- Categories Section --- */}
      <div className="mt-6 pl-4">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center space-y-1 min-w-[70px] cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow active:scale-95">
                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              </div>
              <span className="text-xs font-bold text-slate-600">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Featured Products Section --- */}
      <div className="mt-6 px-4">
        <h3 className="font-fredoka text-xl text-slate-800 mb-3">You'll Love These</h3>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer active:scale-95">
              <div className="relative w-full h-32 bg-slate-100 rounded-2xl mb-2 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full shadow-sm hover:bg-white">
                  <Heart size={14} className="text-pink-500 fill-pink-500" />
                </button>
              </div>
              <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1 line-clamp-2">
                {product.name}
              </h4>
              <p className="font-nunito font-semibold text-slate-600 text-sm">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Floating Pill-Shaped Bottom Nav --- */}
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <nav className="bg-white/90 backdrop-blur-md shadow-2xl rounded-full h-16 flex items-center justify-around px-2 border border-white/20">
          <NavItem icon={<Home size={24} />} label="Home" isActive />
          <NavItem icon={<Heart size={24} />} label="Wishlist" />
          <NavItem icon={<ShoppingBag size={24} />} label="Cart" />
          <NavItem icon={<User size={24} />} label="Profile" />
        </nav>
      </div>

    </div>
  );
};

// A small helper component for the nav items
const NavItem = ({ icon, label, isActive }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-12 h-full rounded-full cursor-pointer transition-all duration-300 ${isActive ? 'text-pink-500' : 'text-slate-400 hover:text-slate-600'}`}>
      {icon}
      <span className="text-[10px] font-bold mt-0.5">{label}</span>
    </div>
  );
};

export default MobileHomePage;
