import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ProjectDevelopers from "./pages/ProjectDevelopers.tsx";
import CorporateCompanies from "./pages/CorporateCompanies.tsx";
import VoluntaryMarket from "./pages/VoluntaryMarket";
import ComplianceMarket from "./pages/ComplianceMarket.tsx";
import CarbonFootprint from "./pages/CarbonFootprint.tsx";
import CbamAdvisory from "./pages/CbamAdvisory.tsx";
import EcgReporting from "./pages/EcgReporting.tsx";
import EnergyAudit from "./pages/EnergyAudit";
import LifeCycle from "./pages/LifeCycle";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/developers" element={<ProjectDevelopers />} />
          <Route path="/corporate" element={<CorporateCompanies />} />
          <Route path="/voluntary-market" element={<VoluntaryMarket />} />
          <Route path="/compliance-market" element={<ComplianceMarket />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
          <Route path="/ecg-reporting" element={<EcgReporting />} />
          <Route path="/energy-audit" element={<EnergyAudit />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
          <Route path="/cbam-advisory" element={<CbamAdvisory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
