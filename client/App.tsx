import "./global.css";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CarsDashboard } from "./components/dashboards/cars-dashboard";
import { LaptopsDashboard } from "./components/dashboards/laptops-dashboard";
import { PropertiesDashboard } from "./components/dashboards/properties-dashboard";

const queryClient = new QueryClient();

// ProtectedRoute component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem("isloggedin") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/cars"
            element={
              <ProtectedRoute>
                <CarsDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/laptops"
            element={
              <ProtectedRoute>
                <LaptopsDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/properties"
            element={
              <ProtectedRoute>
                <PropertiesDashboard />
              </ProtectedRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
