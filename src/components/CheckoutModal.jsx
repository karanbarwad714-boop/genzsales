import React, { useState } from 'react';
import { X, CheckCircle, Truck, ShieldCheck, Send, Sparkles, CreditCard, Banknote, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  onOrderSuccess
}) {
  if (!isOpen || !checkoutData) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: 'Delhi',
    pincode: '',
    paymentMethod: 'upi'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Fire confetti burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      const orderId = `GZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const completedOrder = {
        orderId,
        items: checkoutData.cartItems,
        total: checkoutData.grandTotal,
        customer: formData,
        placedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };

      setOrderConfirmed(completedOrder);
      setIsSubmitting(false);
      onOrderSuccess();
    }, 1200);
  };

  const openWhatsAppReceipt = () => {
    if (!orderConfirmed) return;
    const text = `Hey GenZ Fashion! ⚡\nI just placed order *#${orderConfirmed.orderId}* on GENZSALES!\n\nCustomer: ${orderConfirmed.customer.name} (${orderConfirmed.customer.phone})\nAddress: ${orderConfirmed.customer.address}, ${orderConfirmed.customer.city} - ${orderConfirmed.customer.pincode}\nPayment: ${orderConfirmed.customer.paymentMethod.toUpperCase()}\nTotal: ₹${orderConfirmed.total}\n\nPlease dispatch my drip! 🚀`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-zinc-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          /* Order Confirmation View */
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-lime-400 text-black flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(163,230,53,0.4)] animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
              ⚡ ORDER PLACED SUCCESSFULLY
            </span>

            <h3 className="text-3xl font-black text-white mt-3 mb-2 font-brand">
              YOUR DRIP IS LOCKED IN!
            </h3>
            <p className="text-zinc-400 text-xs mb-6 max-w-sm mx-auto">
              Order <strong className="text-white">#{orderConfirmed.orderId}</strong> has been received by GenZ Fashion team. Estimated delivery in 3-4 working days.
            </p>

            {/* Summary Ticket */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-left text-xs mb-6 space-y-2">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Order ID:</span>
                <span className="font-mono font-bold text-lime-400">#{orderConfirmed.orderId}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Recipient:</span>
                <span className="font-bold text-white">{orderConfirmed.customer.name} ({orderConfirmed.customer.phone})</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Deliver To:</span>
                <span className="text-zinc-300 text-right truncate max-w-[200px]">
                  {orderConfirmed.customer.address}, {orderConfirmed.customer.city}
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Payment:</span>
                <span className="uppercase font-bold text-lime-400">{orderConfirmed.customer.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-white">
                <span>Total Paid / Due:</span>
                <span className="font-mono text-lime-400 text-base">₹{orderConfirmed.total}</span>
              </div>
            </div>

            {/* Next Actions */}
            <div className="space-y-3">
              <button
                onClick={openWhatsAppReceipt}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
              >
                <Send className="w-4 h-4 fill-black" /> Get Order Updates on WhatsApp
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-bold transition-colors border border-zinc-800"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form View */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" /> Quick Checkout
              </div>
              <h3 className="text-2xl font-black text-white font-brand">
                SHIPPING & PAYMENT
              </h3>
              <p className="text-xs text-zinc-400">
                Complete your details to confirm your order from GenZ Fashion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Customer Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aryan Mehra"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                  Street Address & House / Flat No. *
                </label>
                <input
                  type="text"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Flat 402, Skyline Residency, MG Road"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                />
              </div>

              {/* City, State & PIN */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Delhi / Mumbai"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="110001"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-2">
                  Select Payment Option *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`cursor-pointer p-3 rounded-xl border flex flex-col items-center text-center gap-1.5 transition-all ${
                      formData.paymentMethod === 'upi'
                        ? 'border-lime-400 bg-lime-400/10 text-white shadow-[0_0_15px_rgba(163,230,53,0.15)]'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Smartphone className="w-5 h-5 text-lime-400" />
                    <span className="text-[11px] font-bold">UPI / QR</span>
                    <span className="text-[9px] text-zinc-500">GPay, PhonePe</span>
                  </label>

                  <label
                    className={`cursor-pointer p-3 rounded-xl border flex flex-col items-center text-center gap-1.5 transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-lime-400 bg-lime-400/10 text-white shadow-[0_0_15px_rgba(163,230,53,0.15)]'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Banknote className="w-5 h-5 text-emerald-400" />
                    <span className="text-[11px] font-bold">Cash on Delivery</span>
                    <span className="text-[9px] text-zinc-500">Pay at doorstep</span>
                  </label>

                  <label
                    className={`cursor-pointer p-3 rounded-xl border flex flex-col items-center text-center gap-1.5 transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-lime-400 bg-lime-400/10 text-white shadow-[0_0_15px_rgba(163,230,53,0.15)]'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <CreditCard className="w-5 h-5 text-cyan-400" />
                    <span className="text-[11px] font-bold">Card / NetBanking</span>
                    <span className="text-[9px] text-zinc-500">100% Encrypted</span>
                  </label>
                </div>
              </div>

              {/* Order Final Amount Pill */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block">Total Amount to Pay</span>
                  <span className="text-[11px] text-zinc-500">Includes all taxes & delivery</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-lime-400 font-mono">
                    ₹{checkoutData.grandTotal}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(163,230,53,0.4)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? 'PROCESSING YOUR ORDER...' : `CONFIRM ORDER (₹${checkoutData.grandTotal})`}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-lime-400" /> 100% Secure Checkout
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-lime-400" /> Dispatches within 24 Hours
                </span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
