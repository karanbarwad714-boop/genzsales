import React from 'react';
import { ShoppingBag, Heart, Search, Zap, Flame, Menu, X } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  onSelectCategory,
  categories
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80">
      {/* Top Flash Announcement Bar */}
      <div className="bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 text-black py-1.5 px-4 text-xs font-bold tracking-wider overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap space-x-8">
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-black" /> GENZSALES LIVE: T-SHIRTS FROM ₹699 | SHIRTS FROM ₹799 | JEANS FROM ₹999
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-black" /> USE CODE: <strong>GENZ10</strong> FOR EXTRA 10% OFF
          </span>
          <span className="flex items-center gap-1.5">
            🚚 FREE DELIVERY ON ALL ORDERS ABOVE ₹999
          </span>
          <span className="flex items-center gap-1.5">
            ⚡ 100% HEAVY COTTON • CASH ON DELIVERY AVAILABLE
          </span>
          {/* Duplicate for infinite ticker */}
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-black" /> GENZSALES LIVE: T-SHIRTS FROM ₹699 | SHIRTS FROM ₹799 | JEANS FROM ₹999
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-black" /> USE CODE: <strong>GENZ10</strong> FOR EXTRA 10% OFF
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-black flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(163,230,53,0.4)] group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-brand font-black text-2xl tracking-tighter text-white group-hover:text-lime-400 transition-colors">
                    GENZ<span className="text-lime-400">SALES</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-zinc-800 text-lime-400 px-2 py-0.5 rounded-full border border-lime-400/20">
                    DROP #04
                  </span>
                </div>
                <p className="text-[11px] font-medium text-zinc-400 tracking-wider">
                  by <span className="text-zinc-200 font-semibold">GenZ Fashion</span>
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Category Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.startingText && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isActive ? 'bg-black text-lime-400' : 'bg-zinc-800 text-lime-400'}`}>
                      {cat.startingText}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search oversized tees, corduroy, denim..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/90 text-sm text-zinc-200 placeholder-zinc-500 rounded-full border border-zinc-800 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-rose-400 border border-zinc-800 transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all hover:scale-105 active:scale-95"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-black text-lime-400 text-xs font-black px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tees, shirts, jeans..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 text-sm text-zinc-200 placeholder-zinc-500 rounded-full border border-zinc-800 focus:border-lime-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800 space-y-2">
            <p className="text-xs uppercase font-bold text-zinc-500 px-2 tracking-wider">Catalogs</p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-lime-400 text-black border-lime-400'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div>{cat.label}</div>
                  {cat.startingText && (
                    <div className="text-[10px] opacity-80 font-mono mt-0.5">{cat.startingText}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
