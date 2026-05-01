import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import AppRouter from "./routes/AppRouter";
import LoadingPage from "./components/LoadingPage"; // adjust path if needed

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
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
    <>
      {!loadingDone ? (
        <LoadingPage onFinish={() => setLoadingDone(true)} />
      ) : (
        <AppRouter />
      )}
    </>
  );
}