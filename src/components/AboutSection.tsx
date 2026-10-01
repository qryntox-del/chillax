import React from 'react';
import { Coffee, Utensils, Users, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "Artisanal Sips & Shakes",
      description: "Thick ice-cream shakes, classic Malabar Avil Milk, fresh whole-fruit juices, and sparkling crushed-ice mojitos made fresh on order.",
      icon: Coffee,
      color: "#B8860B",
      bg: "bg-[#FAF5EB]"
    },
    {
      title: "Crispy Burgers & Hot Momos",
      description: "Golden fried and steamed momos with spicy chutney, juicy gourmet burgers, and piping hot peri-peri french fries.",
      icon: Utensils,
      color: "#1B4D3E",
      bg: "bg-[#EFF6F2]"
    },
    {
      title: "The Chillax Hangout Vibe",
      description: "A laid-back, sunlit space on Perumpillichira-Paara Road where friends catch up over cups of steaming Sulaimani and crunchy snacks.",
      icon: Users,
      color: "#B8860B",
      bg: "bg-[#FAF5EB]"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-[#EBE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#1B4D3E] font-bold">
                About Chillax Cafe
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight mt-2 text-balance">
                Your Neighborhood Spot for Sips, Bites & Great Conversations
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#556059] leading-relaxed">
              Nestled on the Perumpillichira - Paara Road in Kumaramangalam, Thodupuzha, <strong className="text-[#1E2320] font-bold">Chillax Cafe</strong> was created with one simple belief: great food and chilled-out company make every day better.
            </p>

            <p className="text-sm sm:text-base text-[#556059] leading-relaxed">
              Whether you are stopping by for our legendary <span className="text-[#B8860B] font-bold">Malabar Avil Milk</span> after college, picking up a loaded <span className="text-[#1B4D3E] font-bold">Crispy Chicken Burger</span> on your way home, or sharing a plate of hot <span className="text-[#1E2320] font-bold">steaming momos</span> with friends, Chillax is always your welcoming haven.
            </p>

            {/* Quick Location Callout */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] flex items-start gap-3.5 shadow-2xs">
              <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#1E2320]">Find Us In Kumaramangalam</p>
                <p className="text-xs text-[#616E65] mt-0.5 leading-relaxed">
                  {CAFE_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#D6C7AC] transition-all hover:translate-y-[-2px] duration-200 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-[#E3DBD0] ${item.bg}`}
                      style={{ color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-[#1E2320]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#616E65] leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
