import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Featured", href: "#featured" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Delivery", href: "#delivery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EBE4D8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single element wordmark brand mark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded-md px-1"
          aria-label="Chillax Cafe Home"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#1B4D3E] p-0.5 flex items-center justify-center shadow-xs">
            <span className="w-full h-full bg-[#FAF8F5] rounded-[10px] flex items-center justify-center font-display font-black text-[#B8860B] text-lg group-hover:text-[#1B4D3E] transition-colors">
              C
            </span>
          </span>
          <span className="font-display font-black text-xl tracking-tight text-[#1E2320] group-hover:text-[#B8860B] transition-colors">
            Chillax<span className="text-[#1B4D3E]">.</span>Cafe
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#556059]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#B8860B] transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Cart Bag Icon & WhatsApp Action */}
        <div className="flex items-center gap-3">
          
          {/* Cart Bag Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-[#1E2320] hover:border-[#B8860B] hover:text-[#B8860B] transition-all flex items-center justify-center min-w-[44px] min-h-[44px] shadow-2xs cursor-pointer"
            aria-label={`View order bag with ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5 text-[#1E2320]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#B8860B] text-white font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md tabular-nums animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Quick WhatsApp Action */}
          <a
            href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! I'd like to check out the menu and place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] rounded-xl transition-all whitespace-nowrap shadow-sm shadow-[#B8860B]/15 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-[#1E2320] hover:text-[#B8860B] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EBE4D8] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#F0EBE1]">
            <a
              href={`tel:${CAFE_INFO.phones[0].raw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-xs font-bold text-[#1E2320]"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B4D3E]" />
              <span>Call Cafe</span>
            </a>
            <a
              href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! I want to order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-xs font-extrabold text-white"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-1 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3E4540] hover:bg-[#FAF8F5] hover:text-[#B8860B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
