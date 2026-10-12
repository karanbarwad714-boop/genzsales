import React, { useState } from 'react';
import { Send, Heart, ShieldCheck, Truck, RefreshCw, Smartphone, MessageCircle } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Top Banner in Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-lime-400 text-black flex items-center justify-center font-black text-base shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                ⚡
              </div>
              <span className="font-brand font-black text-xl text-white tracking-tight">
                GENZ<span className="text-lime-400">SALES</span>
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs">
              The official online storefront of <strong>GenZ Fashion</strong>. Premium heavy cotton tees starting at ₹699, Cuban & corduroy shirts from ₹799, and wide-leg baggy denim from ₹999.
            </p>
            <div className="flex items-center gap-2 pt-1 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-lime-400 hover:border-lime-400 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                title="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Catalogs Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Shop Catalogs
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('tshirt');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>👕 Oversized T-Shirts</span>
                  <span className="text-lime-400 font-mono text-[11px]">From ₹699</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('shirt');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>👔 Cuban & Casual Shirts</span>
                  <span className="text-lime-400 font-mono text-[11px]">From ₹799</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('jeans');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>👖 Baggy & Skater Denim</span>
                  <span className="text-lime-400 font-mono text-[11px]">From ₹999</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('all');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors text-left"
                >
                  🔥 View All New Drops
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service & WhatsApp Desk */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Direct Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-lime-400" />
                <span>WhatsApp: +91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-lime-400" />
                <span>Free Delivery above ₹999</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-lime-400" />
                <span>7-Day Hassle-Free Size Exchange</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Cash on Delivery (COD) Available</span>
              </li>
            </ul>
          </div>

          {/* VIP Drop Alerts */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-2">
              Join The VIP Drop Club
            </h4>
            <p className="text-[11px] text-zinc-400 mb-3">
              Get secret 15% discount coupons and early access before limited streetwear stock sells out.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-xs focus:border-lime-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-lime-400 hover:bg-lime-300 text-black font-extrabold rounded-xl text-xs transition-colors"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <p className="text-lime-400 text-[11px] font-bold">
                  ✓ You're in! Check your inbox for CODE: VIP15.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong>GENZSALES</strong> — Owned & Operated by <strong>GenZ Fashion</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using <strong>React</strong> & <strong>Vite</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
