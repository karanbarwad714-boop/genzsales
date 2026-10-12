import React from 'react';
import { Flame, Heart, ShoppingBag } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/products';

export default function LookbookSection({ onSelectCategory }) {
  return (
    <section className="py-16 bg-[#0c0d14] border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 mb-3">
              <Flame className="w-3.5 h-3.5 fill-lime-400" /> UGC & STREET LOOKBOOK
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-brand">
              HOW GEN-Z STYLES IT
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1">
              Curated fit checks directly from our community. Pair tees from ₹699, shirts from ₹799, and jeans from ₹999.
            </p>
          </div>

          <button
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1 hover:underline"
          >
            Shop All Community Drops →
          </button>
        </div>

        {/* Lookbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Model Tag */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-zinc-300 border border-white/10">
                  {item.model}
                </div>

                {/* Likes */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-rose-400 border border-white/10 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-rose-500" />
                  <span>{item.likes}</span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-brand font-black text-lg text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mb-3 line-clamp-1">
                    {item.outfit}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-700/60">
                    <span className="text-xs font-mono font-bold text-lime-400">
                      Combo from ₹{item.total}
                    </span>
                    <button
                      onClick={() => {
                        onSelectCategory('all');
                        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/90 hover:bg-lime-400 text-black text-[11px] font-black uppercase tracking-wider flex items-center gap-1 transition-all"
                    >
                      <ShoppingBag className="w-3 h-3" /> Shop Fit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
