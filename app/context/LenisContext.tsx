"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

type LenisContextType = Lenis | null;

const LenisContext = createContext<LenisContextType>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<LenisContextType>(null);

  useEffect(() => {
    const lenisInstance = new Lenis();
    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenisContext(): LenisContextType {
  return useContext(LenisContext);
}
