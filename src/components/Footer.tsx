import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Instagram, MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5EB] border-t border-[#E8DFC8] text-[#556059] text-xs pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E3DBD0]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#1B4D3E] p-0.5 flex items-center justify-center shadow-2xs">
                <span className="w-full h-full bg-[#FAF5EB] rounded-[9px] flex items-center justify-center font-display font-black text-[#B8860B] text-sm">
                  C
                </span>
              </span>
              <span className="font-display font-black text-xl text-[#1E2320] tracking-tight">
                Chillax<span className="text-[#1B4D3E]">.</span>Cafe
              </span>
            </div>
            <p className="text-[#616E65] text-xs leading-relaxed max-w-sm">
              "Where Flavour Meets Chill" — Premium quick bites, thick milkshakes, authentic Malabar Avil Milk, loaded burgers, and friendly hangout vibes in Kumaramangalam, Thodupuzha.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#DDD5C7] text-[#1E2320] hover:text-[#e1306c] hover:border-[#e1306c] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.phones[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#DDD5C7] text-[#1E2320] hover:text-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CAFE_INFO.phones[0].raw}`}
                className="w-9 h-9 rounded-xl bg-white border border-[#DDD5C7] text-[#1E2320] hover:text-[#B8860B] hover:border-[#B8860B] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-bold uppercase tracking-wider text-[#1E2320] text-[11px]">
              Explore
            </p>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#about" className="hover:text-[#B8860B] transition-colors">About Chillax</a></li>
              <li><a href="#featured" className="hover:text-[#B8860B] transition-colors">Featured Categories</a></li>
              <li><a href="#menu" className="hover:text-[#B8860B] transition-colors">Full Food & Drinks Menu</a></li>
              <li><a href="#gallery" className="hover:text-[#B8860B] transition-colors">Cafe Gallery</a></li>
              <li><a href="#delivery" className="hover:text-[#B8860B] transition-colors">Delivery Areas & Info</a></li>
              <li><a href="#location" className="hover:text-[#B8860B] transition-colors">Directions & Map</a></li>
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div className="md:col-span-4 space-y-2">
            <p className="font-bold uppercase tracking-wider text-[#1E2320] text-[11px]">
              Location & Orders
            </p>
            <p className="text-xs text-[#616E65] leading-relaxed">
              {CAFE_INFO.address}
            </p>
            <div className="pt-2 space-y-1 text-xs">
              <p>WhatsApp 1: <a href={`https://wa.me/${CAFE_INFO.phones[0].raw}`} className="text-[#1B4D3E] font-bold hover:underline">{CAFE_INFO.phones[0].display}</a></p>
              <p>WhatsApp 2: <a href={`https://wa.me/${CAFE_INFO.phones[1].raw}`} className="text-[#1B4D3E] font-bold hover:underline">{CAFE_INFO.phones[1].display}</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A857E]">
          <p>© {new Date().getFullYear()} Chillax Cafe, Kumaramangalam, Thodupuzha. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#B8860B]">Where Flavour Meets Chill</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#556059] hover:text-[#B8860B] font-bold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
