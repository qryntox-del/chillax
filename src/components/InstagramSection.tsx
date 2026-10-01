import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      title: "Golden Hour Hangouts",
      likes: "248",
      comments: "19",
      tag: "#chillaxthodupuzha",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Royal Avil Milk Layers",
      likes: "392",
      comments: "34",
      tag: "#avilmilkkerala",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Double Patty Cheese Burst",
      likes: "315",
      comments: "28",
      tag: "#burgerlove",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Fresh Mint Mojito Chill",
      likes: "189",
      comments: "14",
      tag: "#summercoolers",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E8DFC8] text-xs font-bold text-[#B8860B] mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Connect on Social</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2320] tracking-tight">
              Follow Us on Instagram
            </h2>
            <p className="text-sm text-[#616E65] mt-1">
              Join our community at <span className="text-[#B8860B] font-bold">{CAFE_INFO.instagramHandle}</span> for new specials, behind-the-scenes & daily cafe vibes.
            </p>
          </div>

          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#e1306c] to-[#fd1d1d] hover:opacity-90 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {CAFE_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Visual Instagram Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#e1306c] overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-2xs block"
            >
              <div className="h-52 sm:h-60 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#e1306c]">
                    <Instagram className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <span className="text-[11px] font-mono text-[#facc15] font-semibold">{post.tag}</span>
                  <p className="font-display font-bold text-sm text-white group-hover:text-[#facc15] transition-colors leading-snug">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-white/80 pt-1">
                    <span className="flex items-center gap-1 font-mono">
                      <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
