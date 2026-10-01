import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#B8860B] font-bold">
            Visit Us
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight mt-1">
            Find Chillax Cafe in Thodupuzha
          </h2>
          <p className="text-sm text-[#616E65] mt-2">
            Located conveniently on Perumpillichira - Paara Road in Kumaramangalam, with parking and cozy seating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#EBE4D8] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  Exact Cafe Address
                </span>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#1E2320] leading-snug">
                  Chillax Cafe
                </p>
                <p className="text-sm text-[#556059] leading-relaxed">
                  {CAFE_INFO.address}
                </p>
              </div>

              {/* Action buttons: Directions & Copy */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 min-h-[46px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] hover:border-[#1B4D3E] text-[#1E2320] text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 min-h-[46px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#1B4D3E]" />
                      <span className="text-[#1B4D3E]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#7A857E]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Navigation Landmark Notes */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] space-y-3 text-xs text-[#556059]">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E2320]">Landmark:</strong> Situated along Perumpillichira - Paara Road, Kumaramangalam, easily accessible from Thodupuzha town.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🛵</span>
                  <div>
                    <strong className="text-[#1E2320]">Parking:</strong> Two-wheeler and car parking space available right in front of the cafe.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Footer inside Card */}
            <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-xs text-[#7A857E]">
              <span>Need help finding us?</span>
              <a 
                href={`tel:${CAFE_INFO.phones[0].raw}`}
                className="text-[#B8860B] font-bold hover:underline"
              >
                Call: {CAFE_INFO.phones[0].display}
              </a>
            </div>
          </div>

          {/* Right Embedded Map Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EBE4D8] overflow-hidden min-h-[380px] shadow-sm relative flex flex-col">
            <div className="p-4 bg-[#FAF8F5] border-b border-[#EBE4D8] flex items-center justify-between text-xs text-[#556059]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1B4D3E]" />
                <span className="font-bold text-[#1E2320]">Google Maps Navigation</span>
              </span>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8860B] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="flex-1 w-full relative min-h-[340px]">
              <iframe
                title="Chillax Cafe Location Map"
                src={`https://maps.google.com/maps?q=Chillax+Cafe+Perumpillichira+Paara+Rd+Kumaramangalam+Thodupuzha+Kerala+685608&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
