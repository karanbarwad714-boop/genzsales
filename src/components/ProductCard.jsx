import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-lime-400/50 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:shadow-[0_10px_25px_-5px_rgba(163,230,53,0.15)]"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges on top left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md ${
                product.badgeType === 'deal'
                  ? 'bg-lime-400 text-black font-extrabold'
                  : product.badgeType === 'hot'
                  ? 'bg-rose-500 text-white'
                  : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.tag && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-zinc-300 px-2 py-0.5 rounded border border-white/10">
              {product.tag}
            </span>
          )}
        </div>

        {/* Wishlist Button top right */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)] scale-110'
              : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/80'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>

        {/* Stock Alert Pill */}
        {product.stockLeft <= 5 && (
          <div className="absolute bottom-2 left-2 bg-amber-500/90 text-black text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded backdrop-blur-sm">
            Only {product.stockLeft} left in stock
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-zinc-500 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h4 className="font-bold text-sm text-zinc-100 group-hover:text-lime-400 transition-colors line-clamp-1 mb-2">
            {product.name}
          </h4>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 mb-3" onClick={(e) => e.stopPropagation()}>
            <span className="text-[10px] text-zinc-500 font-medium">Color:</span>
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor.name === color.name
                    ? 'border-lime-400 scale-125 ring-2 ring-lime-400/40'
                    : 'border-zinc-700 hover:scale-110'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            <span className="text-[10px] text-zinc-400 font-medium ml-1 truncate max-w-[80px]">
              {selectedColor.name}
            </span>
          </div>

          {/* Sizes Selector */}
          <div className="flex flex-wrap items-center gap-1 mb-4" onClick={(e) => e.stopPropagation()}>
            <span className="text-[10px] text-zinc-500 font-medium mr-1">Size:</span>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-6 h-6 px-1.5 rounded text-[11px] font-bold border transition-all ${
                  selectedSize === size
                    ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.3)]'
                    : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart button */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-white font-mono">
                ₹{product.price}
              </span>
              <span className="text-xs text-zinc-500 line-through font-mono">
                ₹{product.originalPrice}
              </span>
            </div>
            <span className="text-[10px] font-black text-lime-400 uppercase tracking-tight">
              {product.discount}
            </span>
          </div>

          <button
            onClick={handleAdd}
            disabled={justAdded}
            className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95 ${
              justAdded
                ? 'bg-emerald-500 text-black font-extrabold'
                : 'bg-zinc-800 hover:bg-lime-400 text-white hover:text-black hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
