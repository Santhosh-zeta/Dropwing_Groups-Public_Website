import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import PageTransition from "./components/PageTransition";
import MainLayout from "./components/MainLayout";
import { HelmetProvider } from 'react-helmet-async';

const Index = lazy(() => import("./pages/Index"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const WhatWeThink = lazy(() => import("./pages/WhatWeThink"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));
const DigitalInfrastructure = lazy(() => import("./pages/DigitalInfrastructure"));
const SyntheticIntelligence = lazy(() => import("./pages/SyntheticIntelligence"));
const BrandSovereignty = lazy(() => import("./pages/BrandSovereignty"));
const WebForge = lazy(() => import("./pages/WebForge"));
const DesignStudio = lazy(() => import("./pages/DesignStudio"));
const ElevixPro = lazy(() => import("./pages/ElevixPro"));
const PerSyniX = lazy(() => import("./pages/PerSyniX"));
const Grovia = lazy(() => import("./pages/Grovia"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Security = lazy(() => import("./pages/Security"));
const Philosophy = lazy(() => import("./pages/Philosophy"));
const Careers = lazy(() => import("./pages/Careers"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<main className="min-h-screen bg-background" aria-busy="true" aria-label="Loading page" />}>
    <Routes location={location} key={location.pathname}>
      {/* Standard Pages wrapped in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/capabilities/digital-infrastructure" element={<DigitalInfrastructure />} />
        <Route path="/capabilities/synthetic-intelligence" element={<SyntheticIntelligence />} />
        <Route path="/capabilities/brand-sovereignty" element={<BrandSovereignty />} />
        <Route path="/ventures/webforge" element={<WebForge />} />
        <Route path="/ventures/design-studio" element={<DesignStudio />} />
        <Route path="/ventures/elevix-pro" element={<ElevixPro />} />
        <Route path="/ventures/persynix" element={<PerSyniX />} />
        <Route path="/ventures/grovia" element={<Grovia />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/what-we-think" element={<WhatWeThink />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/security" element={<Security />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Pages with Custom Layouts (No persistent Nav/Footer) */}
      <Route path="/insights/:slug" element={
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} className="min-h-screen">
            <InsightArticle />
          </PageTransition>
        </AnimatePresence>
      } />
    </Routes>
    </Suspense>
  );
};



const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
