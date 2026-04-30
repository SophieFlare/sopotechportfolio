import React, { useEffect } from "react";
import Lenis from "lenis";
import Router from "./routes/Router";

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <Router />;
}