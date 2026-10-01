import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#1B4D3E] font-bold">
            Get In Touch
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight mt-1">
            Contact Chillax Cafe
          </h2>
          <p className="text-sm text-[#616E65] mt-2">
            Reach out for orders, deliveries, group hangouts, or directions. We are always just a call or WhatsApp message away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone Numbers */}
          <div className="p-6 rounded-3xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B8860B] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#E8DFC8] text-[#B8860B] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E2320]">Call Direct</h3>
              <p className="text-xs text-[#7A857E] mt-1">
                For instant phone orders & inquiries:
              </p>
              <div className="mt-3 space-y-2">
                {CAFE_INFO.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="block font-mono text-sm font-bold text-[#1E2320] hover:text-[#B8860B] transition-colors"
                  >
                    +91 {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <a
              href={`tel:${CAFE_INFO.phones[0].raw}`}
              className="text-xs font-bold text-[#B8860B] flex items-center gap-1 hover:underline pt-2 border-t border-[#F0EBE1]"
            >
              <span>Call Primary Line</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 rounded-3xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#25D366] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] border border-[#BDE8CE] text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E2320]">WhatsApp Orders</h3>
              <p className="text-xs text-[#7A857E] mt-1">
                Direct WhatsApp chat for menu & delivery:
              </p>
              <div className="mt-3 space-y-2">
                {CAFE_INFO.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`https://wa.me/${phone.raw}?text=${encodeURIComponent("Hi Chillax Cafe! I'd like to place an order.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm font-bold text-[#25D366] hover:underline"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <a
              href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent("Hi Chillax Cafe! I'd like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#25D366] flex items-center gap-1 hover:underline pt-2 border-t border-[#F0EBE1]"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Instagram */}
          <div className="p-6 rounded-3xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#e1306c] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FDF0F4] border border-[#FAD6E2] text-[#e1306c] flex items-center justify-center mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E2320]">Instagram</h3>
              <p className="text-xs text-[#7A857E] mt-1">
                Follow our official social page:
              </p>
              <div className="mt-3">
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold text-[#1E2320] hover:text-[#e1306c] transition-colors"
                >
                  {CAFE_INFO.instagramHandle}
                </a>
                <p className="text-[11px] text-[#7A857E] mt-0.5">DM for collaborations & tags</p>
              </div>
            </div>
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#e1306c] flex items-center gap-1 hover:underline pt-2 border-t border-[#F0EBE1]"
            >
              <span>Open Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Location */}
          <div className="p-6 rounded-3xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1B4D3E] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6F2] border border-[#CEE4D8] text-[#1B4D3E] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E2320]">Cafe Location</h3>
              <p className="text-xs text-[#7A857E] mt-1">
                Kumaramangalam, Thodupuzha:
              </p>
              <p className="text-xs text-[#3E4540] mt-2 leading-relaxed">
                Perumpillichira - Paara Rd, Kumaramangalam, Thodupuzha 685608
              </p>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#1B4D3E] flex items-center gap-1 hover:underline pt-2 border-t border-[#F0EBE1]"
            >
              <span>Open Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
