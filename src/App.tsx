import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import SynthToken from "./pages/SynthToken";
import PoolDetails from "./pages/PoolDetails";
import CreateLiquidityPool from "./pages/CreateLiquidityPool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/synth-token" element={<SynthToken />} />
              <Route path="/pools/:poolId" element={<PoolDetails />} />
              <Route path="/create-pool" element={<CreateLiquidityPool />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;