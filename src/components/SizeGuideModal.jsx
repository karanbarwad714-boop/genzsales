import React, { useState } from 'react';
import { X, Ruler, Sparkles } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tshirt');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-zinc-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Ruler className="w-4 h-4" /> GenZ Fashion Fit Guide
        </div>
        <h3 className="text-2xl font-black text-white font-brand mb-1">
          SIZE & FIT MEASUREMENT CHART
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          All our fits are intentionally cut with modern oversized and relaxed street silhouettes. Measurements in inches.
        </p>

        {/* Catalog Tabs */}
        <div className="flex gap-2 p-1 bg-zinc-900 rounded-xl mb-6 border border-zinc-800">
          <button
            onClick={() => setActiveTab('tshirt')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'tshirt'
                ? 'bg-lime-400 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            👕 T-Shirts (From ₹699)
          </button>
          <button
            onClick={() => setActiveTab('shirt')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'shirt'
                ? 'bg-lime-400 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            👔 Shirts (From ₹799)
          </button>
          <button
            onClick={() => setActiveTab('jeans')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'jeans'
                ? 'bg-lime-400 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            👖 Jeans (From ₹999)
          </button>
        </div>

        {/* Tables */}
        {activeTab === 'tshirt' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest (Inches)</th>
                  <th className="py-2.5 px-3">Length (Inches)</th>
                  <th className="py-2.5 px-3">Shoulder Drop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-medium">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-lime-400">S</td>
                  <td className="py-2.5 px-3">42" (Relaxed)</td>
                  <td className="py-2.5 px-3">28.5"</td>
                  <td className="py-2.5 px-3">21.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-lime-400">M</td>
                  <td className="py-2.5 px-3">44" (Boxy)</td>
                  <td className="py-2.5 px-3">29.5"</td>
                  <td className="py-2.5 px-3">22.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-lime-400">L</td>
                  <td className="py-2.5 px-3">46" (Oversized)</td>
                  <td className="py-2.5 px-3">30.5"</td>
                  <td className="py-2.5 px-3">23.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-lime-400">XL</td>
                  <td className="py-2.5 px-3">48" (Baggy)</td>
                  <td className="py-2.5 px-3">31.5"</td>
                  <td className="py-2.5 px-3">24.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-lime-400">XXL</td>
                  <td className="py-2.5 px-3">50" (Extreme Baggy)</td>
                  <td className="py-2.5 px-3">32.0"</td>
                  <td className="py-2.5 px-3">25.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'shirt' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest (Inches)</th>
                  <th className="py-2.5 px-3">Length (Inches)</th>
                  <th className="py-2.5 px-3">Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-medium">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">S</td>
                  <td className="py-2.5 px-3">40"</td>
                  <td className="py-2.5 px-3">28.0"</td>
                  <td className="py-2.5 px-3">10.0"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">M</td>
                  <td className="py-2.5 px-3">42"</td>
                  <td className="py-2.5 px-3">29.0"</td>
                  <td className="py-2.5 px-3">10.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">L</td>
                  <td className="py-2.5 px-3">44"</td>
                  <td className="py-2.5 px-3">30.0"</td>
                  <td className="py-2.5 px-3">11.0"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">XL</td>
                  <td className="py-2.5 px-3">46"</td>
                  <td className="py-2.5 px-3">31.0"</td>
                  <td className="py-2.5 px-3">11.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'jeans' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono">
                  <th className="py-2.5 px-3">Waist (Inches)</th>
                  <th className="py-2.5 px-3">Length (Inches)</th>
                  <th className="py-2.5 px-3">Thigh</th>
                  <th className="py-2.5 px-3">Leg Opening</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-medium">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-cyan-400">28"</td>
                  <td className="py-2.5 px-3">40.5"</td>
                  <td className="py-2.5 px-3">25.0"</td>
                  <td className="py-2.5 px-3">19.0" (Wide Skater)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-cyan-400">30"</td>
                  <td className="py-2.5 px-3">41.0"</td>
                  <td className="py-2.5 px-3">26.0"</td>
                  <td className="py-2.5 px-3">20.0" (Wide Skater)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-cyan-400">32"</td>
                  <td className="py-2.5 px-3">41.5"</td>
                  <td className="py-2.5 px-3">27.0"</td>
                  <td className="py-2.5 px-3">21.0" (Wide Skater)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-cyan-400">34"</td>
                  <td className="py-2.5 px-3">42.0"</td>
                  <td className="py-2.5 px-3">28.0"</td>
                  <td className="py-2.5 px-3">21.5" (Wide Skater)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-cyan-400">36"</td>
                  <td className="py-2.5 px-3">42.5"</td>
                  <td className="py-2.5 px-3">29.0"</td>
                  <td className="py-2.5 px-3">22.0" (Wide Skater)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Streetwear Styling Tip Box */}
        <div className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-white block mb-0.5">GenZ Fit Tip:</span>
            <p className="text-zinc-400 leading-relaxed">
              If you prefer that trendy heavy slouch / runway oversized look with sneakers, go for your usual size. For an extreme streetwear bagginess, order one size up!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
