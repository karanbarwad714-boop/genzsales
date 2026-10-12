import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
  onOpenCatalog
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500 text-white font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h3 className="font-brand font-black text-lg text-white">
                  YOUR WISHLIST
                </h3>
                <p className="text-[11px] text-zinc-400">
                  {wishlistItems.length} saved drops
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-400">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Your Wishlist is Empty</h4>
                <p className="text-xs text-zinc-400 max-w-xs mb-6">
                  Save your favorite oversized tees, camp shirts, and wide leg denim here to grab them later!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCatalog('all');
                  }}
                  className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all"
                >
                  Explore Drops
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 rounded-xl object-cover bg-black shrink-0 border border-zinc-800"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-lime-400 block mb-0.5">
                      {item.categoryName}
                    </span>
                    <h5 className="font-bold text-xs text-white truncate mb-1">
                      {item.name}
                    </h5>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-black text-white font-mono">
                        ₹{item.price}
                      </span>
                      <span className="text-[11px] text-zinc-500 line-through font-mono">
                        ₹{item.originalPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(item, item.sizes[0], item.colors[0]);
                        onRemoveWishlist(item.id);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-black text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <ShoppingBag className="w-3 h-3" /> Move to Bag
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveWishlist(item.id)}
                    className="p-2 text-zinc-500 hover:text-rose-400 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
