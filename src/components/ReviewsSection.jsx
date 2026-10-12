import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 mb-3">
            ⭐ 4.9/5 COMMUNITY RATING
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-brand">
            REAL BUYER FIT CHECKS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            See what customers across India say about our fabric weight, sizing, and streetwear quality.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-600" />
                </div>

                <p className="text-sm text-zinc-200 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>

                <div className="text-[11px] font-semibold text-lime-400 bg-zinc-950/80 p-2 rounded-lg border border-zinc-800/80 mb-4 inline-block">
                  Verified Item: {rev.item}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h5 className="font-bold text-xs text-white">{rev.name}</h5>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-lime-400" title="Verified Customer" />
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-400">{rev.city}, India</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
