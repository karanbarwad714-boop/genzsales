import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, RefreshCw, Zap, Tag } from 'lucide-react';

export default function HeroBanner({ onSelectCategory }) {
  // Live countdown timer for GenZ Drop Urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n) => String(n).padStart(2, '0');

  const scrollToCatalog = (catId) => {
    onSelectCategory(catId);
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-[#0c0d14] to-[#090a0f] border-b border-zinc-800">
      {/* Background Neon Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        {/* Top Drop Tag & Timer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(163,230,53,0.15)]">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span>GenZ Fashion Official Store</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">Spring-Summer 2026</span>
          </div>

          <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-xl text-xs font-mono">
            <span className="text-zinc-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-lime-400" /> FLASH SALE ENDS IN:
            </span>
            <span className="bg-black text-lime-400 font-bold px-2 py-0.5 rounded border border-zinc-800">
              {formatNum(timeLeft.hours)}h : {formatNum(timeLeft.minutes)}m : {formatNum(timeLeft.seconds)}s
            </span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-white uppercase mb-6">
            DON'T DRESS BASIC. <br />
            WEAR THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-lime-200 underline decoration-lime-400/40">REAL DRIP.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Welcome to <strong className="text-white">GENZSALES</strong> by <em>GenZ Fashion</em>. Heavyweight boxy tees, relaxed Cuban shirts, and authentic 90s baggy denim crafted for the new generation.
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToCatalog('all')}
              className="px-8 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(163,230,53,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>EXPLORE ALL FITS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToCatalog('tshirt')}
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700/80 hover:border-zinc-500 transition-all flex items-center gap-2"
            >
              <Tag className="w-4 h-4 text-lime-400" />
              <span>SHOP DEALS FROM ₹699</span>
            </button>
          </div>
        </div>

        {/* 3 Interactive Highlight Catalog Cards (T-Shirt @ ₹699, Shirt @ ₹799, Jeans @ ₹999) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: T-Shirts */}
          <div
            onClick={() => scrollToCatalog('tshirt')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(163,230,53,0.15)]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-md border border-lime-400/20">
                  👕 CATALOG #01
                </span>
                <h3 className="text-xl font-black text-white mt-2 group-hover:text-lime-400 transition-colors">
                  OVERSIZED T-SHIRTS
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-zinc-400 uppercase font-semibold block">STARTING AT</span>
                <span className="text-2xl font-black text-lime-400 font-mono">₹699</span>
              </div>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop"
                alt="GenZ T-Shirts"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-zinc-200">240 GSM Acid Wash & Graphic Tees</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 group-hover:text-white font-medium">
              <span>View 4+ Drop Styles</span>
              <span className="text-lime-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Explore →
              </span>
            </div>
          </div>

          {/* Card 2: Shirts */}
          <div
            onClick={() => scrollToCatalog('shirt')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-400/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(52,211,153,0.15)]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  👔 CATALOG #02
                </span>
                <h3 className="text-xl font-black text-white mt-2 group-hover:text-emerald-400 transition-colors">
                  STREETWEAR SHIRTS
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-zinc-400 uppercase font-semibold block">STARTING AT</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">₹799</span>
              </div>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop"
                alt="GenZ Shirts"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-zinc-200">Cuban Camp Collars & Corduroy</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 group-hover:text-white font-medium">
              <span>View 4+ Drop Styles</span>
              <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Explore →
              </span>
            </div>
          </div>

          {/* Card 3: Jeans */}
          <div
            onClick={() => scrollToCatalog('jeans')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                  👖 CATALOG #03
                </span>
                <h3 className="text-xl font-black text-white mt-2 group-hover:text-cyan-400 transition-colors">
                  BAGGY & CARGO JEANS
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-zinc-400 uppercase font-semibold block">STARTING AT</span>
                <span className="text-2xl font-black text-cyan-400 font-mono">₹999</span>
              </div>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop"
                alt="GenZ Jeans"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-zinc-200">14 oz Heavy Skater & Carpenter Denim</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 group-hover:text-white font-medium">
              <span>View 4+ Drop Styles</span>
              <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Explore →
              </span>
            </div>
          </div>
        </div>

        {/* Brand Guarantees Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 border-t border-zinc-800/80">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <Truck className="w-5 h-5 text-lime-400 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white">Free Shipping</p>
              <p className="text-[10px] text-zinc-400">On all orders above ₹999</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white">100% Heavy Cotton</p>
              <p className="text-[10px] text-zinc-400">220-250 GSM heavy terry</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <Zap className="w-5 h-5 text-lime-400 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white">Cash on Delivery</p>
              <p className="text-[10px] text-zinc-400">Available all over India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <RefreshCw className="w-5 h-5 text-lime-400 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white">7 Days Easy Exchange</p>
              <p className="text-[10px] text-zinc-400">Hassle-free size replacement</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
