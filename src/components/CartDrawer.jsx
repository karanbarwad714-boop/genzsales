import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, Send, Check } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  onOpenCatalog
}) {
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold || appliedCoupon?.type === 'freeship';
  const deliveryFee = subtotal === 0 ? 0 : isFreeShipping ? 0 : 79;

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      discountAmount = Math.round((subtotal * appliedCoupon.percent) / 100);
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  // Coupon apply handler
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();

    if (code === 'GENZ10') {
      setAppliedCoupon({ code: 'GENZ10', type: 'percent', percent: 10, label: '10% OFF' });
      setCouponInput('');
    } else if (code === 'GENZ20') {
      if (subtotal < 1499) {
        setCouponError('GENZ20 requires minimum cart of ₹1,499');
        return;
      }
      setAppliedCoupon({ code: 'GENZ20', type: 'percent', percent: 20, label: '20% OFF' });
      setCouponInput('');
    } else if (code === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', type: 'freeship', label: 'Free Delivery' });
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code. Try GENZ10');
    }
  };

  // WhatsApp formatted cart order
  const handleWhatsAppCheckout = () => {
    let orderSummary = `Hey GenZ Fashion! ⚡\nI want to place an order from GENZSALES:\n\n`;
    cartItems.forEach((item, index) => {
      orderSummary += `${index + 1}. ${item.name} (${item.categoryName})\n   • Size: ${item.size} | Color: ${item.color.name}\n   • Qty: ${item.quantity} × ₹${item.price} = ₹${item.price * item.quantity}\n`;
    });
    orderSummary += `\nSubtotal: ₹${subtotal}`;
    if (discountAmount > 0) orderSummary += `\nDiscount (${appliedCoupon?.code}): -₹${discountAmount}`;
    orderSummary += `\nDelivery: ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}`;
    orderSummary += `\n*TOTAL AMOUNT: ₹${grandTotal}*\n\nPlease confirm my order!`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-lime-400 text-black font-black flex items-center justify-center text-sm">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-brand font-black text-lg text-white">
                  YOUR BAG
                </h3>
                <p className="text-[11px] text-zinc-400">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} item(s) selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter */}
          <div className="p-4 bg-zinc-900/80 border-b border-zinc-800">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-bold text-zinc-200">
                <Truck className="w-4 h-4 text-lime-400" />
                {isFreeShipping ? (
                  <span className="text-lime-400">🎉 FREE Shipping unlocked!</span>
                ) : (
                  <span>Add <strong>₹{amountToFreeShipping}</strong> more for Free Shipping</span>
                )}
              </span>
              <span className="text-[11px] font-mono font-bold text-zinc-400">
                {shippingPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-lime-400 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${shippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-400">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Your Bag is Empty</h4>
                <p className="text-xs text-zinc-400 max-w-xs mb-6">
                  You haven't added any streetwear heat yet. T-Shirts start from only ₹699!
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
              cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color.name}`}
                  className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex gap-3 items-center"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 rounded-xl object-cover object-center bg-black shrink-0 border border-zinc-800"
                  />

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-white truncate mb-1">
                      {item.name}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 mb-2">
                      <span className="bg-zinc-800 px-1.5 py-0.5 rounded font-bold text-zinc-300">
                        Size: {item.size}
                      </span>
                      <span className="flex items-center gap-1 bg-zinc-800 px-1.5 py-0.5 rounded">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color.hex }}
                        />
                        {item.color.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-lime-400 font-mono">
                        ₹{item.price * item.quantity}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-black font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item)}
                    className="p-2 text-zinc-500 hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-zinc-950 border-t border-zinc-800 space-y-3">
              
              {/* Promo Code Box */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" /> Coupon '{appliedCoupon.code}' applied ({appliedCoupon.label})
                    </span>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      className="text-zinc-400 hover:text-white text-xs underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon: GENZ10"
                      className="flex-1 px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white uppercase placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-zinc-200">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-lime-400 font-semibold">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span className="font-mono">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-mono">
                    {deliveryFee === 0 ? (
                      <span className="text-lime-400 font-bold uppercase">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-zinc-800">
                  <span>Total Amount</span>
                  <span className="text-base text-lime-400 font-mono">₹{grandTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onProceedCheckout({ cartItems, subtotal, discountAmount, deliveryFee, grandTotal, appliedCoupon })}
                  className="w-full py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Proceed to Checkout (₹{grandTotal})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Order Entire Bag on WhatsApp
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
