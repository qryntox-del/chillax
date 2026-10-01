import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  ShoppingBag, 
  Info,
  X,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/cafeData';
import { useCart } from '../context/CartContext';

interface FullMenuSectionProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const FullMenuSection: React.FC<FullMenuSectionProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  const { addToCart, setSelectedItemDetails } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Diet filter
      if (dietFilter === 'veg' && !item.isVeg) return false;
      if (dietFilter === 'non-veg' && item.isVeg) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, dietFilter, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B8860B] font-bold">
            Curated Cafe Menu
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2320] tracking-tight mt-1 text-balance">
            Explore All Dishes & Drinks
          </h2>
          <p className="text-sm sm:text-base text-[#616E65] mt-2">
            Every item is prepared fresh to order. Click <span className="font-semibold text-[#1E2320]">Add to Cart</span> to start your WhatsApp order or <span className="font-semibold text-[#1E2320]">View Details</span> to see ingredients and portions.
          </p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#EBE4D8] shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#8C9B91] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shakes, Avil milk, burgers, momos, juices..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl text-sm text-[#1E2320] placeholder-[#8C9B91] focus:outline-none focus:border-[#B8860B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C9B91] hover:text-[#1E2320]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Diet Filter Buttons */}
            <div className="md:col-span-3 flex items-center bg-[#FAF8F5] p-1 rounded-xl border border-[#DDD5C7]">
              <button
                onClick={() => setDietFilter('all')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  dietFilter === 'all'
                    ? 'bg-white text-[#1E2320] shadow-sm border border-[#E3DBD0]'
                    : 'text-[#616E65] hover:text-[#1E2320]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  dietFilter === 'veg'
                    ? 'bg-white text-emerald-700 shadow-sm border border-[#E3DBD0]'
                    : 'text-[#616E65] hover:text-[#1E2320]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Veg
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  dietFilter === 'non-veg'
                    ? 'bg-white text-red-700 shadow-sm border border-[#E3DBD0]'
                    : 'text-[#616E65] hover:text-[#1E2320]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600" />
                Non-Veg
              </button>
            </div>

            {/* Sort Select */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl text-xs font-semibold text-[#3E4540] focus:outline-none focus:border-[#B8860B]"
              >
                <option value="default">Sort by: Default Menu Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Horizontal Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-[#F0EBE1]">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[38px] ${
                selectedCategory === 'all'
                  ? 'bg-[#1B4D3E] text-white shadow-sm'
                  : 'bg-[#FAF8F5] text-[#556059] hover:bg-white hover:text-[#1E2320] border border-[#DDD5C7]'
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[38px] ${
                    selectedCategory === cat.id
                      ? 'bg-[#B8860B] text-white shadow-sm'
                      : 'bg-[#FAF8F5] text-[#556059] hover:bg-white hover:text-[#1E2320] border border-[#DDD5C7]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#7A857E] mb-6 px-1">
          <div className="flex items-center gap-2">
            <span>Showing <strong className="text-[#1E2320] font-mono tabular-nums">{filteredItems.length}</strong> items</span>
            {selectedCategory !== 'all' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#B8860B] font-semibold">
                  {MENU_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                </span>
              </>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#B8860B] font-semibold hover:underline"
            >
              Reset Search
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EBE4D8] shadow-sm">
            <p className="text-lg font-bold text-[#1E2320]">No items found matching your criteria</p>
            <p className="text-sm text-[#7A857E] mt-1">Try clearing your search or switching filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setDietFilter('all');
              }}
              className="mt-4 px-5 py-2.5 bg-[#B8860B] text-white font-bold text-xs rounded-xl hover:bg-[#A67C1E] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Redesigned Menu Items Grid per prompt specifications:
            [Food Image]
            ITEM NAME
            Short one-line description
            ₹ ACTUAL PRICE
            [View Details] [ADD TO CART]
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-[#EBE4D8] hover:border-[#D6C7AC] hover:shadow-xl hover:shadow-[#B8860B]/5 transition-all duration-200 flex flex-col overflow-hidden"
            >
              {/* [Food Image] */}
              <div 
                className="relative h-48 w-full overflow-hidden bg-[#FAF8F5] cursor-pointer"
                onClick={() => setSelectedItemDetails(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dietary badge (FSSAI style) */}
                <div className="absolute top-3 left-3">
                  <span 
                    className={`w-4 h-4 border-2 bg-white flex items-center justify-center p-0.5 rounded-[4px] shadow-sm ${
                      item.isVeg ? 'border-emerald-600' : 'border-red-600'
                    }`}
                    title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                  </span>
                </div>

                {/* Tag badge */}
                {item.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#B8860B] text-white text-[11px] font-bold shadow-sm">
                      ★ {item.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* ITEM NAME */}
                  <h3 
                    onClick={() => setSelectedItemDetails(item)}
                    className="font-display font-extrabold text-lg text-[#1E2320] group-hover:text-[#B8860B] transition-colors leading-snug cursor-pointer line-clamp-1"
                  >
                    {item.name}
                  </h3>

                  {/* Short one-line description */}
                  <p className="text-xs text-[#616E65] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-3 border-t border-[#F0EBE1] space-y-3">
                  {/* ₹ ACTUAL PRICE */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#7A857E] font-medium">Price:</span>
                    <span className="font-mono font-black text-xl text-[#B8860B] tabular-nums">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* [View Details] [ADD TO CART] */}
                  <div className="grid grid-cols-12 gap-2">
                    <button
                      onClick={() => setSelectedItemDetails(item)}
                      className="col-span-5 py-2.5 px-2 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] hover:border-[#B8860B] text-[#3E4540] hover:text-[#B8860B] text-xs font-bold transition-colors flex items-center justify-center gap-1 min-h-[42px]"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => addToCart(item, 1, true)}
                      className="col-span-7 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#C59B27] hover:from-[#A67C1E] hover:to-[#B8860B] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#B8860B]/15 active:scale-95 transition-all min-h-[42px]"
                    >
                      <Plus className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
