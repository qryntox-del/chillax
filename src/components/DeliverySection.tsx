import React from 'react';
import { Truck, Phone, MessageCircle, Clock, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const DeliverySection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Browse & Choose",
      desc: "Pick your favorite shakes, burgers, momos, or Avil milk from our menu."
    },
    {
      num: "02",
      title: "WhatsApp or Call",
      desc: "Send your items and delivery location to 89430 79187 or 94465 13393."
    },
    {
      num: "03",
      title: "Fresh & Delivered",
      desc: "Freshly prepared and delivered right to your doorstep or ready for pickup."
    }
  ];

  const deliveryAreas = [
    "Kumaramangalam",
    "Perumpillichira - Paara Rd",
    "Vengallur Junction",
    "Thodupuzha Town Limits",
    "Nearby Schools & Colleges"
  ];

  return (
    <section id="delivery" className="py-16 lg:py-24 bg-white border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#EBE4D8] p-8 sm:p-12 relative overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3DBD0] text-xs font-bold text-[#1B4D3E] shadow-2xs">
                <Truck className="w-4 h-4 text-[#1B4D3E]" />
                <span className="tracking-wide">DELIVERY AVAILABLE</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight text-balance">
                Fresh & Hot Delivery in Thodupuzha
              </h2>

              <p className="text-sm sm:text-base text-[#556059] leading-relaxed">
                Enjoy Chillax comfort food at your home, office, or college. We offer doorstep delivery across Kumaramangalam, Perumpillichira, and surrounding Thodupuzha areas.
              </p>

              {/* Delivery Timing Note (Required per prompt) */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC8] text-xs text-[#7A6A4E] flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Delivery time may vary depending on location and order volume.</span>
              </div>

              {/* Delivery Areas Coverage */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-2.5">
                  Frequent Delivery Areas Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {deliveryAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DDD5C7] text-xs font-semibold text-[#3E4540] shadow-2xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#1B4D3E]" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Ordering Numbers */}
              <div className="pt-2">
                <p className="text-xs text-[#7A857E] mb-3 font-medium">
                  Direct ordering & delivery dispatch counters:
                </p>
                <div className="flex flex-wrap gap-3">
                  {CAFE_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`https://wa.me/${phone.raw}?text=${encodeURIComponent("Hi Chillax Cafe! I'd like to check delivery availability to my address.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#DDD5C7] hover:border-[#25D366] text-[#1E2320] text-xs sm:text-sm font-bold transition-all shadow-2xs group"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Steps Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-[#EBE4D8] space-y-5 shadow-sm">
                <h3 className="font-display font-extrabold text-base text-[#1E2320] border-b border-[#F0EBE1] pb-3">
                  How To Order For Delivery
                </h3>

                {steps.map((st) => (
                  <div key={st.num} className="flex items-start gap-4">
                    <span className="font-mono font-black text-sm text-[#B8860B] bg-[#FAF5EB] w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                      {st.num}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1E2320]">{st.title}</h4>
                      <p className="text-xs text-[#616E65] mt-0.5 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-[#F0EBE1]">
                  <a
                    href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! Please share today's delivery menu.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Order Delivery on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
