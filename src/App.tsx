import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { FullMenuSection } from './components/FullMenuSection';
import { GallerySection } from './components/GallerySection';
import { WhatsAppOrdering } from './components/WhatsAppOrdering';
import { DeliverySection } from './components/DeliverySection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { ItemDetailsModal } from './components/ItemDetailsModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E2320] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Top Bar Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Section */}
          <AboutSection />

          {/* 3. Featured Menu Cards (10 Core Categories) */}
          <FeaturedMenu onSelectCategory={(catId) => setSelectedCategory(catId)} />

          {/* 4. Full Menu (Searchable / Filterable with food images, details & cart) */}
          <FullMenuSection 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          {/* 5. Gallery (Modern grid with lightbox) */}
          <GallerySection />

          {/* 6. WhatsApp Ordering Section (Direct buttons with both numbers) */}
          <WhatsAppOrdering />

          {/* 7. Delivery Section */}
          <DeliverySection />

          {/* 8. Location Section (Exact address + Google Maps directions) */}
          <LocationSection />

          {/* 9. Instagram Showcase */}
          <InstagramSection />

          {/* 10. Contact Section */}
          <ContactSection />
        </main>

        {/* Global Cart Slide-Over Drawer */}
        <CartDrawer />

        {/* Food Item Details & Ingredients Modal */}
        <ItemDetailsModal />

        {/* Sticky Mobile Bottom Bar (Menu, Cart, WhatsApp, Call) */}
        <MobileBottomBar />

        {/* Global Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
