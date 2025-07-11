
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import ApartmentGuide from "./pages/ApartmentGuide";
import BureaucracyGuide from "./pages/BureaucracyGuide";
import TransportGuide from "./pages/TransportGuide";
import WorkingGuide from "./pages/WorkingGuide";
import LivingGuide from "./pages/LivingGuide";
import MoneyGuide from "./pages/MoneyGuide";
import CultureGuide from "./pages/CultureGuide";
import FoodGuide from "./pages/FoodGuide";
import HousingGuide from "./pages/HousingGuide";
import GuidesOverview from "./pages/GuidesOverview";
import NotFound from "./pages/NotFound";
import StartBusinessGuide from "./pages/StartBusinessGuide";
// Living in Stockholm pages
import FindingHousingGuide from "./pages/FindingHousingGuide";
import NeighborhoodsGuide from "./pages/NeighborhoodsGuide";
import CostOfLivingGuide from "./pages/CostOfLivingGuide";
// Working & Business pages
import JobSearchGuide from "./pages/JobSearchGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/guides" element={<GuidesOverview />} />
          <Route path="/guides/apartment-stockholm" element={<ApartmentGuide />} />
          <Route path="/guides/bureaucracy" element={<BureaucracyGuide />} />
          <Route path="/guides/transport" element={<TransportGuide />} />
          <Route path="/guides/working" element={<WorkingGuide />} />
          <Route path="/guides/living" element={<LivingGuide />} />
          <Route path="/guides/money" element={<MoneyGuide />} />
          <Route path="/guides/culture" element={<CultureGuide />} />
          <Route path="/guides/food" element={<FoodGuide />} />
          <Route path="/guides/housing" element={<HousingGuide />} />
          <Route path="/guides/start-business" element={<StartBusinessGuide />} />
          
          {/* Living in Stockholm pages */}
          <Route path="/finding-housing" element={<FindingHousingGuide />} />
          <Route path="/neighborhoods" element={<NeighborhoodsGuide />} />
          <Route path="/cost-of-living" element={<CostOfLivingGuide />} />
          
          {/* Working & Business pages */}
          <Route path="/job-search" element={<JobSearchGuide />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
