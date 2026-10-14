import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { CodigoExplicado } from './components/CodigoExplicado';
import { AppPreviewCarousel } from './components/AppPreviewCarousel';
import { Features } from './components/Features';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';

export default function App() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. FAIXA FIXA NO TOPO */}
      <TopBanner />

      {/* Espaçador para compensar a faixa fixa */}
      <div className="h-9 sm:h-10" />

      <main>
        {/* 2. TOPO (HERO) */}
        <Hero />

        {/* 3. COMO FUNCIONA O CÓDIGO DA AREIA */}
        <CodigoExplicado />

        {/* 4. PRÉVIA DO APP */}
        <AppPreviewCarousel />

        {/* 5. TUDO QUE VOCÊ VAI RECEBER */}
        <Features />

        {/* 6. BÔNUS */}
        <Bonuses />

        {/* 7. PLANOS (id="planos") */}
        <Pricing onOpenUpsell={() => setIsUpsellModalOpen(true)} />

        {/* 8. DEPOIMENTOS (oculto até ter prints reais) */}
        <Testimonials />

        {/* 9. GARANTIA */}
        <Guarantee />

        {/* 10. PERGUNTAS FREQUENTES */}
        <Faq />

        {/* 11. FECHAMENTO */}
        <Closing />
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* POP-UP (UPSELL DO PLANO BÁSICO) */}
      <UpsellModal isOpen={isUpsellModalOpen} onClose={() => setIsUpsellModalOpen(false)} />
    </div>
  );
}
