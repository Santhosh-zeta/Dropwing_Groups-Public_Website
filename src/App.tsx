import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import MainLayout from "./components/MainLayout";
import Index from "./pages/Index";

import WhatWeDo from "./pages/WhatWeDo";
import WhatWeThink from "./pages/WhatWeThink";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";
import InsightArticle from "./pages/InsightArticle";

// Studios
import DesignStudio from "./pages/DesignStudio";
import Fenixa from "./pages/Fenixa";
import PerSyniX from "./pages/PerSyniX";
import Grovia from "./pages/Grovia";

// Legacy / redirected pages (kept for backward compatibility)
import WebForge from "./pages/WebForge";
import ElevixPro from "./pages/ElevixPro";
import Capabilities from "./pages/Capabilities";
import DigitalInfrastructure from "./pages/DigitalInfrastructure";
import SyntheticIntelligence from "./pages/SyntheticIntelligence";
import BrandSovereignty from "./pages/BrandSovereignty";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import Security from "./pages/Security";
import Philosophy from "./pages/Philosophy";
import Careers from "./pages/Careers";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout />}>
        {/* Core pages */}
        <Route path="/" element={<Index />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-think" element={<WhatWeThink />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/careers" element={<Careers />} />

        {/* Studios — V2 */}
        <Route path="/ventures/design-studio" element={<DesignStudio />} />
        <Route path="/ventures/fenixa" element={<Fenixa />} />
        <Route path="/ventures/persynix" element={<PerSyniX />} />
        <Route path="/ventures/grovia" element={<Grovia />} />

        {/* Legacy routes — kept for backward compatibility */}
        <Route path="/ventures/webforge" element={<WebForge />} />
        <Route path="/ventures/elevix-pro" element={<ElevixPro />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/capabilities/digital-infrastructure" element={<DigitalInfrastructure />} />
        <Route path="/capabilities/synthetic-intelligence" element={<SyntheticIntelligence />} />
        <Route path="/capabilities/brand-sovereignty" element={<BrandSovereignty />} />

        {/* Legal */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/security" element={<Security />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Insight articles — custom layout */}
      <Route path="/insights/:slug" element={
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} className="min-h-screen">
            <InsightArticle />
          </PageTransition>
        </AnimatePresence>
      } />
    </Routes>
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
