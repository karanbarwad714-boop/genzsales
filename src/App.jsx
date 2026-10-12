import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import SizeGuideModal from './components/SizeGuideModal';
import LookbookSection from './components/LookbookSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './data/products';
import { SlidersHorizontal, ArrowUpDown, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';

export default function App() {
  // Navigation & Filtering State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [priceMax, setPriceMax] = useState(1500);
  const [sizeFilter, setSizeFilter] = useState('all');

  // Cart & Wishlist State
  const [cart, setCart] = useState([
    // Initial sample item for instant gratification
    {
      id: 'tshirt-1',
      name: 'Acid Wash Heavyweight Oversized Tee',
      category: 'tshirt',
      categoryName: 'T-Shirt',
      price: 699,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      size: 'L',
      color: { name: 'Washed Charcoal', hex: '#2b2c30' },
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState([]);

  // Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart Handlers
  const handleAddToCart = (product, size, color, quantity = 1) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && item.size === size && item.color.name === color.name
      );
      if (existingIdx > -1) {
        const next = [...prevCart];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            category: product.category,
            categoryName: product.categoryName,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            size,
            color,
            quantity
          }
        ];
      }
    });
    showToast(`Added "${product.name}" to Bag!`);
  };

  const handleUpdateQuantity = (item, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(item);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.id === item.id && i.size === item.size && i.color.name === item.color.name
          ? { ...i, quantity: newQty }
          : i
      )
    );
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter(
        (i) => !(i.id === item.id && i.size === item.size && i.color.name === item.color.name)
      )
    );
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    const isSaved = wishlist.some((item) => item.id === product.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast('Removed from Wishlist');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast('Saved to Wishlist!');
    }
  };

  const handleRemoveWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Checkout Handlers
  const handleProceedCheckout = (data) => {
    setCheckoutData(data);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.categoryName.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tag?.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      // Price filter
      if (item.price > priceMax) {
        return false;
      }
      // Size filter
      if (sizeFilter !== 'all' && !item.sizes.includes(sizeFilter)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, priceMax, sizeFilter, sortOption]);

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-lime-400 text-black px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(163,230,53,0.5)] animate-fade-in flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      {/* Hero Section */}
      <HeroBanner onSelectCategory={setSelectedCategory} />

      {/* Main Catalogs Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Catalog Category Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
                {activeCategoryInfo?.startingText ? `${activeCategoryInfo.startingText} DROP` : 'LIVE CATALOG'}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {filteredProducts.length} FITS FOUND
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white font-brand uppercase tracking-tight">
              {selectedCategory === 'all' && 'ALL STREETWEAR DROPS'}
              {selectedCategory === 'tshirt' && 'OVERSIZED T-SHIRTS (FROM ₹699)'}
              {selectedCategory === 'shirt' && 'CUBAN & CASUAL SHIRTS (FROM ₹799)'}
              {selectedCategory === 'jeans' && 'BAGGY & CARGO JEANS (FROM ₹999)'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1">
              Select your fit below. 100% authentic GenZ Fashion pieces designed with high density fabrics & baggy cuts.
            </p>
          </div>

          {/* Catalog Filter Tabs (Large) */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                    active
                      ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.startingText && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${active ? 'bg-black text-lime-400' : 'bg-zinc-800 text-lime-400'}`}>
                      {cat.startingText}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls Bar (Sort, Price, Size) */}
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          
          {/* Price Range Slider */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-zinc-400 uppercase flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-400" /> Max Price:
            </span>
            <input
              type="range"
              min="699"
              max="1500"
              step="50"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="accent-lime-400 cursor-pointer w-28 sm:w-36"
            />
            <span className="text-xs font-mono font-black text-lime-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              ₹{priceMax}
            </span>
          </div>

          {/* Size Filter Pills */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-zinc-400 uppercase hidden sm:inline mr-1">
              Size:
            </span>
            {['all', 'S', 'M', 'L', 'XL', '30', '32', '34'].map((sz) => (
              <button
                key={sz}
                onClick={() => setSizeFilter(sz)}
                className={`min-w-7 h-7 px-2 rounded-lg text-xs font-bold transition-all border ${
                  sizeFilter === sz
                    ? 'bg-lime-400 text-black border-lime-400 font-black'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {sz.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-400 uppercase flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-lime-400" /> Sort:
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-xs font-bold text-white rounded-xl px-3 py-1.5 focus:border-lime-400 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured Heat</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Reset Filters button if any active */}
          {(selectedCategory !== 'all' || searchQuery || priceMax < 1500 || sizeFilter !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPriceMax(1500);
                setSizeFilter('all');
              }}
              className="text-xs text-zinc-400 hover:text-lime-400 flex items-center gap-1 underline font-semibold"
            >
              <RefreshCw className="w-3 h-3" /> Reset Filters
            </button>
          )}

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-zinc-950/40 rounded-3xl border border-zinc-800/80 p-8">
            <h3 className="text-xl font-bold text-white mb-2">No Drops Found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-6">
              No products match your current search and price filter criteria. Try adjusting the filters!
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPriceMax(1500);
                setSizeFilter('all');
              }}
              className="px-6 py-2.5 rounded-xl bg-lime-400 text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Show All Fits
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.some((i) => i.id === product.id)}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}

      </main>

      {/* Lookbook / Streetwear Inspo Section */}
      <LookbookSection onSelectCategory={setSelectedCategory} />

      {/* Customer Fit Checks & Reviews */}
      <ReviewsSection />

      {/* Footer */}
      <Footer onSelectCategory={setSelectedCategory} />

      {/* Floating WhatsApp Help Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919876543210?text=Hey%20GenZ%20Fashion!%20I%20have%20a%20question%20about%20GENZSALES%20fits."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_5px_25px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span className="hidden sm:inline">WhatsApp Help</span>
        </a>
      </div>

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={handleProceedCheckout}
        onOpenCatalog={setSelectedCategory}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
        onOpenCatalog={setSelectedCategory}
      />

      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.some((i) => i.id === quickViewProduct.id) : false}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutData={checkoutData}
        onOrderSuccess={handleOrderSuccess}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
}
