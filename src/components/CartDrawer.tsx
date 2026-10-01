import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  ArrowRight,
  Truck,
  Store,
  Utensils,
  ChevronLeft,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CAFE_INFO } from '../data/cafeData';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    totalPrice,
    totalItems
  } = useCart();

  // Step 1: Cart View, Step 2: Customer Details Form
  const [orderStep, setOrderStep] = useState<'cart' | 'details'>('cart');
  const [orderType, setOrderType] = useState<'Delivery' | 'Pickup'>('Delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [formError, setFormError] = useState('');
  const [selectedCafePhone, setSelectedCafePhone] = useState(CAFE_INFO.phones[0].raw);

  if (!isCartOpen) return null;

  const handleProceedToDetails = () => {
    if (cart.length === 0) return;
    setFormError('');
    setOrderStep('details');
  };

  const handleFinalWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    if (!customerPhone.trim() || customerPhone.trim().length < 8) {
      setFormError('Please enter a valid phone number for order updates.');
      return;
    }

    if (orderType === 'Delivery' && !deliveryLocation.trim()) {
      setFormError('Please enter your delivery location/address in Thodupuzha.');
      return;
    }

    // Generate exact WhatsApp message format as requested
    const itemsFormatted = cart.map((ci, index) => 
      `${index + 1}. ${ci.item.name} × ${ci.quantity} — ₹${ci.item.price * ci.quantity}`
    ).join('\n');

    const messageLines = [
      `Hello Chillax Cafe!`,
      ``,
      `I would like to place an order:`,
      ``,
      itemsFormatted,
      ``,
      `Subtotal: ₹${totalPrice}`,
      ``,
      `Customer Name: ${customerName.trim()}`,
      `Phone: ${customerPhone.trim()}`,
      `Delivery / Pickup: ${orderType}`,
      ...(orderType === 'Delivery' ? [`Location: ${deliveryLocation.trim()}`] : []),
      ``,
      `Please confirm my order.`
    ];

    const message = messageLines.join('\n');
    const waUrl = `https://wa.me/${selectedCafePhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#EBE4D8] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EBE4D8] bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              {orderStep === 'details' && (
                <button
                  onClick={() => setOrderStep('cart')}
                  className="p-1 rounded-lg hover:bg-[#F5F2EB] text-[#556059] transition-colors"
                  aria-label="Back to items"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] border border-[#E8DFC8] text-[#B8860B] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-[#1E2320] text-base leading-tight">
                  {orderStep === 'cart' ? 'Your Order Cart' : 'Order Details'}
                </h3>
                <p className="text-xs text-[#7A857E]">
                  {orderStep === 'cart' 
                    ? `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in cart` 
                    : 'Confirm delivery or pickup details'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && orderStep === 'cart' && (
                <button
                  onClick={clearCart}
                  className="text-xs text-[#7A857E] hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  title="Clear Cart"
                  aria-label="Clear cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-xl bg-[#F5F2EB] text-[#556059] hover:text-[#1E2320] hover:bg-[#EBE4D8] flex items-center justify-center transition-colors min-w-[36px] min-h-[36px]"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {orderStep === 'cart' ? (
              /* Step 1: Cart Items View */
              cart.length === 0 ? (
                <div className="text-center py-20 px-4 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8DFC8] text-[#B8860B] flex items-center justify-center mx-auto text-3xl shadow-sm">
                    🥤
                  </div>
                  <h4 className="font-display font-bold text-[#1E2320] text-base">Your Cart is Empty</h4>
                  <p className="text-xs text-[#7A857E] max-w-xs mx-auto leading-relaxed">
                    Explore our shakes, authentic Avil milk, burgers, fries, and momos to add items to your cart.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 px-5 py-2.5 bg-[#B8860B] hover:bg-[#A67C1E] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3.5 rounded-2xl bg-white border border-[#EBE4D8] shadow-sm flex items-center gap-3.5 transition-all hover:border-[#D6C7AC]"
                    >
                      {/* Product Image */}
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover border border-[#F0EBE1] shrink-0"
                      />

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span 
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              ci.item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                            }`}
                          />
                          <h5 className="font-display font-bold text-sm text-[#1E2320] truncate">
                            {ci.item.name}
                          </h5>
                        </div>
                        <p className="text-xs text-[#7A857E] mt-0.5">
                          ₹{ci.item.price} each
                        </p>
                        <p className="text-xs font-mono font-bold text-[#B8860B] mt-0.5 tabular-nums">
                          Subtotal: ₹{ci.item.price * ci.quantity}
                        </p>
                      </div>

                      {/* Stepper & Remove */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <div className="flex items-center bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(ci.item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-[#556059] hover:text-[#B8860B] hover:bg-white rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono font-bold text-xs text-[#1E2320] px-2 tabular-nums">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(ci.item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#556059] hover:text-[#B8860B] hover:bg-white rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(ci.item.id)}
                          className="text-[11px] text-[#A3AEA6] hover:text-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* Step 2: Customer Order Details Form */
              <form id="order-details-form" onSubmit={handleFinalWhatsAppOrder} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Delivery or Pickup Toggle */}
                <div>
                  <label className="block text-xs font-bold text-[#3E4540] mb-1.5">
                    Order Method *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('Delivery')}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'Delivery'
                          ? 'bg-[#1B4D3E] text-white border-[#1B4D3E] shadow-sm'
                          : 'bg-white text-[#556059] border-[#DDD5C7] hover:border-[#1B4D3E]'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Doorstep Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('Pickup')}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'Pickup'
                          ? 'bg-[#B8860B] text-white border-[#B8860B] shadow-sm'
                          : 'bg-white text-[#556059] border-[#DDD5C7] hover:border-[#B8860B]'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Takeaway Pickup</span>
                    </button>
                  </div>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-bold text-[#3E4540] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul / Anjali"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C7] rounded-xl text-xs text-[#1E2320] placeholder-[#9EAAA2] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                {/* Customer Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#3E4540] mb-1">
                    Phone Number (for order confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 98470 12345"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C7] rounded-xl text-xs text-[#1E2320] placeholder-[#9EAAA2] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                {/* Delivery Location if delivery */}
                {orderType === 'Delivery' && (
                  <div>
                    <label className="block text-xs font-bold text-[#3E4540] mb-1">
                      Delivery Location & Landmark *
                    </label>
                    <input
                      type="text"
                      required
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      placeholder="e.g. Near St. George School, Kumaramangalam, Thodupuzha"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C7] rounded-xl text-xs text-[#1E2320] placeholder-[#9EAAA2] focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>
                )}

                {/* Cafe WhatsApp Line */}
                <div>
                  <label className="block text-xs font-semibold text-[#7A857E] mb-1">
                    Send Order to Chillax WhatsApp:
                  </label>
                  <select
                    value={selectedCafePhone}
                    onChange={(e) => setSelectedCafePhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#DDD5C7] rounded-xl text-xs text-[#1E2320] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value={CAFE_INFO.phones[0].raw}>
                      {CAFE_INFO.phones[0].display} (Primary Order Counter)
                    </option>
                    <option value={CAFE_INFO.phones[1].raw}>
                      {CAFE_INFO.phones[1].display} (Secondary Support)
                    </option>
                  </select>
                </div>

                {/* Delivery Note */}
                <div className="p-3 bg-[#FAF5EB] border border-[#EFE4D0] rounded-xl text-[11px] text-[#7A6A4E] leading-relaxed">
                  Delivery time and charges (if any) may vary depending on location and order volume. Our team will verify instantly on WhatsApp.
                </div>
              </form>
            )}
          </div>

          {/* Footer Subtotal & Action Bar */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EBE4D8] space-y-3">
              {/* Dynamic Calculation */}
              <div className="space-y-1.5 text-xs text-[#556059]">
                <div className="flex items-center justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-sm text-[#1E2320] tabular-nums">
                    ₹{totalPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#7A857E]">
                  <span>Delivery fee:</span>
                  <span className="italic">Calculated on confirmation</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#F0EBE1] text-sm font-bold text-[#1E2320]">
                  <span>Grand Total:</span>
                  <span className="font-mono font-black text-xl text-[#B8860B] tabular-nums">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              {orderStep === 'cart' ? (
                <button
                  onClick={handleProceedToDetails}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#B8860B]/20 active:scale-98 transition-all min-h-[46px]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>ORDER ON WHATSAPP · ₹{totalPrice}</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="order-details-form"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 active:scale-98 transition-all min-h-[46px]"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Continue to WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderStep('cart')}
                    className="w-full py-2 text-xs font-semibold text-[#7A857E] hover:text-[#1E2320]"
                  >
                    Back to edit cart items
                  </button>
                </div>
              )}

              <p className="text-[11px] text-center text-[#9EAAA2]">
                Direct WhatsApp order with Chillax Cafe, Thodupuzha
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
