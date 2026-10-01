import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Sparkles, MessageCircle, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CAFE_INFO } from '../data/cafeData';

export const ItemDetailsModal: React.FC = () => {
  const { selectedItemDetails, setSelectedItemDetails, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(true);

  if (!selectedItemDetails) return null;

  const item = selectedItemDetails;

  const handleClose = () => {
    setSelectedItemDetails(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, true);
    handleClose();
  };

  const directWhatsAppUrl = `https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent(
    `Hello Chillax Cafe! I'd like to enquire/order ${quantity}x ${item.name} (₹${item.price * quantity}).`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#EBE4D8] overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2C312E] hover:text-[#B8860B] shadow-md flex items-center justify-center transition-all min-w-[36px] min-h-[36px]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Large Food Image */}
          <div className="relative h-64 sm:h-72 w-full bg-[#F5F2EB] overflow-hidden">
            {imgLoaded ? (
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                onError={() => setImgLoaded(false)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#EFEAE1] text-[#9A7B2C]">
                <span className="text-5xl mb-2">🍽️</span>
                <span className="font-display font-semibold text-sm text-[#5C503D]">
                  {item.name}
                </span>
              </div>
            )}

            {/* Gradient Scrim for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Tags on Image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span 
                  className={`w-4 h-4 border-2 bg-white flex items-center justify-center p-0.5 rounded-[4px] shadow-sm ${
                    item.isVeg ? 'border-emerald-600' : 'border-red-600'
                  }`}
                  title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                >
                  <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md">
                  {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>

              {item.tag && (
                <span className="px-3 py-1 rounded-full bg-[#B8860B] text-white text-xs font-bold shadow-md">
                  ★ {item.tag}
                </span>
              )}
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-7 space-y-5 bg-white">
            <div className="flex items-start justify-between gap-4 border-b border-[#F0EBE1] pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#1B4D3E]">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#1E2320] mt-1 leading-snug">
                  {item.name}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono font-black text-2xl text-[#B8860B] tabular-nums">
                  ₹{item.price}
                </span>
                <p className="text-[11px] text-[#7A857E]">Price per portion</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A857E] mb-1">
                Description
              </h4>
              <p className="text-sm text-[#3E4540] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE7DD]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Ingredients</span>
              </h4>
              {item.ingredients && item.ingredients.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E3DBD0] text-xs text-[#3E4540] font-medium"
                    >
                      <Check className="w-3 h-3 text-[#1B4D3E]" />
                      {ing}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#7A857E] italic">
                  Ingredients information available on request.
                </p>
              )}
            </div>

            {/* Quantity Selector & Action Controls */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                <span className="text-xs font-bold text-[#556059]">Quantity:</span>
                <div className="flex items-center border border-[#DDD5C7] rounded-xl bg-[#FAF8F5] p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E3DBD0] text-[#333] hover:text-[#B8860B] flex items-center justify-center font-bold transition-colors min-w-[32px] min-h-[32px]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-mono font-bold text-base text-[#1E2320] px-4 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E3DBD0] text-[#333] hover:text-[#B8860B] flex items-center justify-center font-bold transition-colors min-w-[32px] min-h-[32px]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="w-full sm:flex-1 flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#B8860B]/20 active:scale-98 transition-all min-h-[46px]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart · ₹{item.price * quantity}</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-colors min-w-[46px] min-h-[46px]"
                  title="Direct WhatsApp Order"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
