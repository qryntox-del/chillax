import React from 'react';
import { MENU_CATEGORIES } from '../data/cafeData';
import { 
  Coffee, 
  Utensils, 
  Flame, 
  Sparkles, 
  Sandwich, 
  GlassWater, 
  Citrus, 
  Milk, 
  IceCream, 
  CupSoda,
  ArrowRight
} from 'lucide-react';

interface FeaturedMenuProps {
  onSelectCategory: (categoryId: string) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Milk': return Milk;
      case 'CupSoda': return CupSoda;
      case 'Citrus': return Citrus;
      case 'GlassWater': return GlassWater;
      case 'Sandwich': return Sandwich;
      case 'Flame': return Flame;
      case 'Utensils': return Utensils;
      case 'IceCream': return IceCream;
      case 'Coffee': return Coffee;
      case 'Sparkles': return Sparkles;
      default: return Utensils;
    }
  };

  const getCategoryTheme = (index: number) => {
    const themes = [
      { border: 'hover:border-[#B8860B]', iconBg: 'bg-[#FAF5EB] text-[#B8860B]', badge: 'text-[#B8860B]' },
      { border: 'hover:border-[#1B4D3E]', iconBg: 'bg-[#EFF6F2] text-[#1B4D3E]', badge: 'text-[#1B4D3E]' },
      { border: 'hover:border-[#C59B27]', iconBg: 'bg-[#FAF5EB] text-[#C59B27]', badge: 'text-[#C59B27]' },
      { border: 'hover:border-[#164E3D]', iconBg: 'bg-[#EFF6F2] text-[#164E3D]', badge: 'text-[#164E3D]' },
    ];
    return themes[index % themes.length];
  };

  return (
    <section id="featured" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#B8860B] font-bold">
              Handcrafted Specialties
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight mt-1">
              Explore Our Featured Categories
            </h2>
            <p className="text-sm text-[#616E65] mt-2 max-w-xl">
              From Kerala’s famous Avil Milk and creamy shakes to hot burgers, peri-peri fries, and steaming momos.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B8860B] hover:text-[#9A7B2C] transition-colors group"
          >
            <span>Browse Full 65+ Item Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 10 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {MENU_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            const theme = getCategoryTheme(idx);

            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('menu');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group cursor-pointer p-5 rounded-3xl bg-white border border-[#EBE4D8] ${theme.border} transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#B8860B]/5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${theme.iconBg} border border-[#EBE4D8] transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8C9B91] tabular-nums font-semibold">
                      {cat.itemCount} items
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1E2320] group-hover:text-[#B8860B] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#616E65] mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className={`text-[11px] font-bold ${theme.badge} truncate pr-2`}>
                    ★ {cat.highlightItem}
                  </span>
                  <span className="text-[#8C9B91] group-hover:text-[#B8860B] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
