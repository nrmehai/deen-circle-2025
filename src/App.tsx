import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToastContainer from "@/components/ToastContainer";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Learning from "./pages/Learning";
import Charity from "./pages/Charity";
import Messages from "./pages/Messages";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CommunityPage from "./pages/CommunityPage";
import CoursePage from "./pages/CoursePage";
import { createContext, useContext, useState } from "react";

const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:slug" element={<CommunityPage />} />
          <Route path="/learning/:slug" element={<CoursePage />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
