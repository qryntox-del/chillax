import React, { useState } from 'react';
import { Phone, MessageCircle, Utensils, ShoppingBag, X } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';

export const MobileBottomBar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [showCallModal, setShowCallModal] = useState(false);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Bottom Bar for Mobile (Hidden on Desktop) */}
      <aside 
        aria-label="Quick mobile actions"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-[#EBE4D8] px-3 py-1.5 shadow-lg"
        style={{ height: '60px' }}
      >
        <div className="grid grid-cols-4 items-center h-full max-w-md mx-auto gap-1">
          
          {/* 1. Menu Button */}
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center justify-center text-[#556059] hover:text-[#B8860B] active:scale-95 transition-all min-h-[44px] cursor-pointer"
            aria-label="View Full Menu"
          >
            <Utensils className="w-5 h-5 text-[#B8860B]" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Menu</span>
          </button>

          {/* 2. Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex flex-col items-center justify-center text-[#556059] hover:text-[#B8860B] active:scale-95 transition-all min-h-[44px] cursor-pointer"
            aria-label="View Order Bag"
          >
            <ShoppingBag className="w-5 h-5 text-[#1E2320]" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5 text-[#1E2320]">Cart</span>
            {totalItems > 0 && (
              <span className="absolute top-0 right-3 bg-[#B8860B] text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm tabular-nums">
                {totalItems}
              </span>
            )}
          </button>

          {/* 3. WhatsApp Button */}
          <a
            href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! I'd like to order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[#556059] hover:text-[#25D366] active:scale-95 transition-all min-h-[44px]"
            aria-label="WhatsApp Chillax Cafe"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5 text-[#25D366]">WhatsApp</span>
          </a>

          {/* 4. Call Button */}
          <button
            onClick={() => setShowCallModal(true)}
            className="flex flex-col items-center justify-center text-[#556059] hover:text-[#1B4D3E] active:scale-95 transition-all min-h-[44px] cursor-pointer"
            aria-label="Call Chillax Cafe"
          >
            <Phone className="w-5 h-5 text-[#1B4D3E]" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Call</span>
          </button>
        </div>
      </aside>

      {/* Quick Call Modal */}
      {showCallModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setShowCallModal(false)}
        >
          <div 
            className="w-full max-w-sm bg-white rounded-3xl border border-[#EBE4D8] p-6 space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
              <div>
                <h4 className="font-display font-bold text-[#1E2320] text-base">Call Chillax Cafe</h4>
                <p className="text-xs text-[#7A857E]">Choose a phone line to connect:</p>
              </div>
              <button 
                onClick={() => setShowCallModal(false)}
                className="p-1.5 rounded-lg text-[#7A857E] hover:text-[#1E2320]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {CAFE_INFO.phones.map((phone, i) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] hover:border-[#B8860B] text-[#1E2320] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF5EB] text-[#B8860B] flex items-center justify-center border border-[#E8DFC8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono font-bold text-sm text-[#1E2320]">{phone.display}</p>
                      <p className="text-[11px] text-[#7A857E]">
                        {i === 0 ? "Line 1 (Orders)" : "Line 2 (Takeaways)"}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#B8860B]">Call</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setShowCallModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#FAF8F5] text-xs font-bold text-[#556059] hover:text-[#1E2320] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
