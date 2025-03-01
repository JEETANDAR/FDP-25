import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const MIN_LOADING_TIME = 2000; // Minimum loading duration in ms (2 seconds)

const App = () => {
  const [isSiteReady, setIsSiteReady] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    // ✅ Check when the page fully loads (including images, fonts, etc.)
    const handlePageLoad = () => {
      setIsSiteReady(true);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // ✅ Ensure the loading screen stays for at least MIN_LOADING_TIME
    const checkLoading = setInterval(() => {
      if (isSiteReady && Date.now() - startTime >= MIN_LOADING_TIME) {
        setFadeOut(true); // Start fade-out effect
        setTimeout(() => {
          setIsLoadingComplete(true);
        }, 1000); // Wait for fade-out transition (1s)
        clearInterval(checkLoading);
      }
    }, 100); // Check every 100ms

    return () => {
      window.removeEventListener("load", handlePageLoad);
      clearInterval(checkLoading);
    };
  }, [isSiteReady]);

  if (!isLoadingComplete) {
    return <Loading fadeOut={fadeOut} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* <Suspense fallback={<Loading />}> */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          {/* </Suspense> */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
