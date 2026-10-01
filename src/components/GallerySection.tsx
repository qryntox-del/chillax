import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, CAFE_INFO } from '../data/cafeData';
import { 
  X, 
  MessageCircle, 
  MapPin, 
  Camera, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Ambiance', 'Sips & Shakes', 'Quick Bites', 'Hangout'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#B8860B] font-bold">
              Ambiance & Flavours
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight mt-1">
              Chillax Cafe Gallery
            </h2>
            <p className="text-sm text-[#616E65] mt-1.5 max-w-xl">
              Glimpses of our vibrant cafe spaces, handcrafted drinks, sizzling snacks, and memorable hangout moments in Thodupuzha.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#DDD5C7] overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#B8860B] text-white shadow-xs'
                    : 'text-[#616E65] hover:text-[#1E2320]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#D6C7AC] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B8860B]/5 flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative h-60 w-full overflow-hidden bg-[#EFEAE1]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#1E2320] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
                  <span className="flex items-center gap-1 font-semibold">
                    <Camera className="w-3.5 h-3.5 text-[#facc15]" />
                    <span>Chillax Spotlight</span>
                  </span>
                  <span className="font-bold flex items-center gap-0.5 text-[#facc15] group-hover:underline">
                    View Photo <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF8F5]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4D3E]">
                    {item.category}
                  </span>
                  <h3 className="font-display font-extrabold text-base text-[#1E2320] mt-1 group-hover:text-[#B8860B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#616E65] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#7A857E]">
                  <span>Kumaramangalam, Thodupuzha</span>
                  <span className="text-[#B8860B] font-bold">Chill & Enjoy</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link Callout */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#7A857E]">
            Looking for daily reels, new specials & cafe moments?
          </p>
          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-xs font-bold text-[#1E2320] hover:text-[#B8860B] hover:border-[#B8860B] transition-colors shadow-2xs"
          >
            <span>Follow {CAFE_INFO.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="max-w-lg w-full bg-white rounded-3xl border border-[#EBE4D8] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:text-[#B8860B] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="h-64 sm:h-72 w-full overflow-hidden bg-black relative">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#B8860B] shadow-sm">
                  {activeItem.badge}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E]">
                  {activeItem.category}
                </span>
                <h3 className="font-display font-extrabold text-xl text-[#1E2320] mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#556059] mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] flex items-center justify-between text-xs">
                <span className="text-[#616E65] flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Chillax Cafe, Kumaramangalam</span>
                </span>
                <span className="text-[#1B4D3E] font-bold">Fresh Daily</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${CAFE_INFO.phones[0].raw}?text=${encodeURIComponent(`Hi Chillax Cafe! I saw "${activeItem.title}" on your website gallery and would like to order.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-[#1E2320] font-bold text-xs hover:border-[#B8860B] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
