import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw, Send, Ruler, Check } from 'lucide-react';

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide
}) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  // WhatsApp Direct Order Handler
  const handleWhatsAppOrder = () => {
    const text = `Hey GenZ Fashion! ⚡\nI want to order from GENZSALES:\n- Product: ${product.name}\n- Category: ${product.categoryName}\n- Size: ${selectedSize}\n- Color: ${selectedColor.name}\n- Qty: ${quantity}\n- Price: ₹${product.price * quantity}\n\nPlease share delivery details!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-zinc-100 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images */}
        <div className="w-full md:w-1/2 p-6 bg-zinc-900/40 flex flex-col">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-4">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-lime-400 text-black text-xs font-black uppercase px-3 py-1 rounded-md shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-lime-400 scale-105' : 'border-zinc-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
              <span className="font-bold tracking-wider uppercase text-lime-400">
                {product.categoryName} • GENZSALES DROP
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-zinc-500">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl font-black text-white mb-3">
              {product.name}
            </h2>

            {/* Pricing Section */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 mb-5">
              <span className="text-3xl font-black text-lime-400 font-mono">
                ₹{product.price}
              </span>
              <span className="text-base text-zinc-500 line-through font-mono">
                ₹{product.originalPrice}
              </span>
              <span className="text-xs font-black bg-lime-400/20 text-lime-400 px-2 py-1 rounded border border-lime-400/30 uppercase">
                Save {product.discount}
              </span>
            </div>

            {/* Product description */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Specs chips */}
            <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">Fabric Weight</span>
                <span className="font-semibold text-zinc-200">{product.fabric}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">Silhouette</span>
                <span className="font-semibold text-zinc-200">{product.fit}</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-zinc-300">Selected Color:</span>
                <span className="text-xs text-lime-400 font-semibold">{selectedColor.name}</span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      selectedColor.name === color.name
                        ? 'border-lime-400 bg-zinc-900 text-white shadow-[0_0_10px_rgba(163,230,53,0.3)]'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/40"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection & Size Guide */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-zinc-300">Choose Size:</span>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-xs text-lime-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Ruler className="w-3.5 h-3.5" /> Size Chart
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 h-10 px-3 rounded-xl text-xs font-black border transition-all ${
                      selectedSize === size
                        ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.4)] scale-105'
                        : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Picker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-zinc-300">Quantity:</span>
              <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-black font-mono text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                disabled={addedSuccess}
                className={`flex-1 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  addedSuccess
                    ? 'bg-emerald-500 text-black'
                    : 'bg-lime-400 hover:bg-lime-300 text-black shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:scale-[1.02] active:scale-95'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Bag!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Bag (₹{product.price * quantity})
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition-all ${
                  isWishlisted
                    ? 'bg-rose-500 text-white border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Direct WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5" /> Quick Order via WhatsApp
            </button>

            {/* Micro guarantees */}
            <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-lime-400" /> Free Shipping &gt; ₹999
              </span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-lime-400" /> 7-Day Exchange
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-lime-400" /> GenZ Fashion Original
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
