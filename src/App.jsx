import React, { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "lenis";

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

  return (
    <div>
      <Home />
    </div>
  );
}