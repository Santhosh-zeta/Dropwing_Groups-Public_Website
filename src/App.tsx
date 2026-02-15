import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import MainLayout from "./components/MainLayout";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeThink from "./pages/WhatWeThink";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InsightArticle from "./pages/InsightArticle";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Standard Pages wrapped in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/v2" element={<IndexV2 />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-think" element={<WhatWeThink />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
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
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
