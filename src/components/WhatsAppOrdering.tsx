import React, { useState } from 'react';
import { MessageCircle, Phone, Send, ShoppingBag } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';

export const WhatsAppOrdering: React.FC = () => {
  const { setIsCartOpen, totalItems } = useCart();
  const [quickOrderText, setQuickOrderText] = useState('');
  const [selectedPhone, setSelectedPhone] = useState(CAFE_INFO.phones[0].raw);

  const presets = [
    "Hi! I'd like to order 2x Special Avil Milk and 1x Crispy Chicken Burger.",
    "Hi Chillax Cafe! Please send today's fresh juice & shake options.",
    "Hi! I would like to order loaded fries and momos for home delivery.",
    "Hi! What is the estimated takeaway preparation time right now?"
  ];

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = quickOrderText.trim() || "Hi Chillax Cafe! I'd like to place an order.";
    const url = `https://wa.me/${selectedPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="whatsapp-order" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#EBE4D8] relative overflow-hidden">
      
      {/* Subtle background ambient golden blur */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3DBD0] text-xs font-bold text-[#1B4D3E] mb-3 shadow-2xs">
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
            <span>Fast WhatsApp Ordering</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2320] tracking-tight text-balance">
            Order In Seconds Directly on WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-[#616E65] mt-2 leading-relaxed">
            No complicated apps or sign-ups. Simply tap either of our WhatsApp numbers below, tell us what you'd like, and our team will get it cooking right away!
          </p>
        </div>

        {/* 2 Prominent Phone / WhatsApp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {CAFE_INFO.phones.map((phone, idx) => (
            <div
              key={phone.raw}
              className="p-6 rounded-3xl bg-white border border-[#EBE4D8] hover:border-[#25D366] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E8DFC8] text-xs font-bold text-[#B8860B]">
                    {idx === 0 ? "Primary Order Line" : "Secondary Support Line"}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#25D366] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    Online
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] border border-[#BDE8CE] text-[#25D366] flex items-center justify-center font-bold shadow-2xs">
                    <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#1E2320] tracking-tight">
                      {phone.display}
                    </h3>
                    <p className="text-xs text-[#7A857E]">
                      Call or WhatsApp · Chillax Cafe
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#616E65] leading-relaxed my-4">
                  Tap below to open WhatsApp chat directly with this number. Instant order confirmation, live prep status & takeaway pickups.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F0EBE1]">
                <a
                  href={`https://wa.me/${phone.raw}?text=${encodeURIComponent("Hi Chillax Cafe! I want to place an order.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href={`tel:${phone.raw}`}
                  className="py-3 px-3 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] hover:border-[#B8860B] text-[#1E2320] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom WhatsApp Order Composer */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#EBE4D8] shadow-lg">
          <h3 className="font-display font-bold text-lg text-[#1E2320] mb-2 flex items-center gap-2">
            <span>Quick Message Composer</span>
            <span className="text-xs font-normal text-[#7A857E]">(Select a template or type your order)</span>
          </h3>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mb-4">
            {presets.map((preset, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuickOrderText(preset)}
                className="text-[11px] py-1.5 px-3 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-[#556059] hover:text-[#1E2320] hover:border-[#B8860B] transition-colors text-left"
              >
                "{preset.substring(0, 38)}..."
              </button>
            ))}
          </div>

          <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
            <div>
              <label htmlFor="order-msg" className="block text-xs font-bold text-[#3E4540] mb-1.5">
                Your Order / Message to the Cafe:
              </label>
              <textarea
                id="order-msg"
                rows={3}
                value={quickOrderText}
                onChange={(e) => setQuickOrderText(e.target.value)}
                placeholder="e.g. 2x Sharjah Shake, 1x Double Patty Burger, delivery to Perumpillichira..."
                className="w-full p-3.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl text-sm text-[#1E2320] placeholder-[#8C9B91] focus:outline-none focus:border-[#25D366] transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-[#7A857E] font-medium">Send to:</span>
                <select
                  value={selectedPhone}
                  onChange={(e) => setSelectedPhone(e.target.value)}
                  className="bg-[#FAF8F5] border border-[#DDD5C7] text-xs font-semibold text-[#1E2320] rounded-xl px-3 py-2 focus:outline-none"
                >
                  <option value={CAFE_INFO.phones[0].raw}>{CAFE_INFO.phones[0].display} (Primary)</option>
                  <option value={CAFE_INFO.phones[1].raw}>{CAFE_INFO.phones[1].display}</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {totalItems > 0 && (
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(true)}
                    className="py-2.5 px-4 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-xs font-bold text-[#1E2320] hover:border-[#B8860B] transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>View Cart ({totalItems})</span>
                  </button>
                )}
                <button
                  type="submit"
                  className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
