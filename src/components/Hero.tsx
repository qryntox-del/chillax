import React from 'react';
import { MessageCircle, UtensilsCrossed, MapPin, Star, CheckCircle2, ShoppingBag } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#EBE4D8]">
      
      {/* Decorative subtle golden/green ambient touches */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/8 rounded-full blur-3xl pointer-events-none -z-0"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#1B4D3E]/6 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E3DBD0] text-xs text-[#3E4540] shadow-xs">
              <span className="flex items-center text-[#B8860B]">
                <Star className="w-3.5 h-3.5 fill-[#B8860B]" />
                <span className="ml-1 font-bold">{CAFE_INFO.rating}</span>
              </span>
              <span className="text-[#C2BCB0]">·</span>
              <span className="text-[#616E65]">120+ Thodupuzha Reviews</span>
              <span className="text-[#C2BCB0]">·</span>
              <span className="text-[#1B4D3E] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4D3E]" /> Kumaramangalam
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1E2320] tracking-tight leading-[1.1] text-balance">
                Where Flavour <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#C59B27] to-[#1B4D3E]">
                  Meets Chill.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#556059] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to Chillax Cafe in Thodupuzha. Indulge in thick milkshakes, authentic Malabar Avil Milk, artisanal burgers, crisp peri-peri fries, and steaming hot momos in a relaxed, sunlit ambience.
              </p>
            </div>

            {/* Action Buttons: 3 key actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* 1. Order Now (WhatsApp) */}
              <a
                href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! I would like to order food for takeaway/delivery.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] shadow-md shadow-[#B8860B]/20 active:scale-98 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              {/* 2. View Menu */}
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-[#1E2320] bg-white border border-[#DDD5C7] hover:border-[#B8860B] hover:text-[#B8860B] shadow-2xs transition-colors min-h-[48px]"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#1B4D3E]" />
                <span>View Full Menu</span>
              </a>

              {/* 3. Get Directions */}
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#556059] hover:text-[#1E2320] hover:bg-white transition-colors min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-[#B8860B]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Value Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#EBE4D8] text-left">
              <div className="bg-white p-3 rounded-xl border border-[#EBE4D8] shadow-2xs">
                <p className="text-[11px] text-[#7A857E] uppercase tracking-wider font-semibold">Specialty</p>
                <p className="text-xs sm:text-sm font-bold text-[#1E2320] mt-0.5">Avil Milk & Shakes</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#EBE4D8] shadow-2xs">
                <p className="text-[11px] text-[#7A857E] uppercase tracking-wider font-semibold">Fast Delivery</p>
                <p className="text-xs sm:text-sm font-bold text-[#1E2320] mt-0.5">Local Thodupuzha</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#EBE4D8] shadow-2xs">
                <p className="text-[11px] text-[#7A857E] uppercase tracking-wider font-semibold">Direct Order</p>
                <p className="text-xs sm:text-sm font-bold text-[#B8860B] mt-0.5">89430 79187</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer clean luxury card */}
              <div className="relative rounded-3xl bg-white p-6 shadow-xl border border-[#EBE4D8] space-y-6">
                
                {/* Header within card */}
                <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#1B4D3E] text-white font-display font-black text-xl flex items-center justify-center shadow-xs">
                      C
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-[#1E2320] text-base leading-tight">
                        Chillax Cafe
                      </h2>
                      <p className="text-xs text-[#1B4D3E] font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D3E] animate-pulse"></span>
                        Open Today · Dine-in & Takeaway
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E8DFC8] text-[11px] font-bold text-[#B8860B]">
                    ₹15 onwards
                  </span>
                </div>

                {/* Featured Taste Triad with real food images */}
                <div className="space-y-3">
                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#B8860B] transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=120&q=80" 
                        alt="Royal Avil Milk"
                        className="w-11 h-11 rounded-xl object-cover border border-[#E3DBD0]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#1E2320] group-hover:text-[#B8860B] transition-colors">
                          Royal Avil Milk
                        </p>
                        <p className="text-[11px] text-[#7A857E]">Roasted avil, banana & ice cream</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#B8860B] tabular-nums">₹100</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#1B4D3E] transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=120&q=80" 
                        alt="Crispy Chicken Burger"
                        className="w-11 h-11 rounded-xl object-cover border border-[#E3DBD0]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#1E2320] group-hover:text-[#1B4D3E] transition-colors">
                          Crispy Chicken Burger
                        </p>
                        <p className="text-[11px] text-[#7A857E]">Golden chicken fillet & house mayo</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#1B4D3E] tabular-nums">₹130</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#B8860B] transition-all">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=120&q=80" 
                        alt="Chicken Peri Peri Momos"
                        className="w-11 h-11 rounded-xl object-cover border border-[#E3DBD0]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#1E2320] group-hover:text-[#B8860B] transition-colors">
                          Chicken Peri Peri Momos
                        </p>
                        <p className="text-[11px] text-[#7A857E]">Crispy fried with hot Himalayan dip</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#B8860B] tabular-nums">₹140</span>
                  </div>
                </div>

                {/* Quick Order Mini Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FAF5EB] to-[#FAF8F5] border border-[#E8DFC8] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#1E2320]">Fast WhatsApp Ordering</p>
                    <p className="text-[11px] text-[#7A857E]">89430 79187 / 94465 13393</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#1B4D3E] text-white font-bold text-xs hover:bg-[#163f33] transition-colors shadow-2xs"
                  >
                    Open Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
