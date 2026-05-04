import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import AppRouter from "./routes/AppRouter";
import LoadingPage from "./components/LoadingPage";
import ScrollToTop from "./routes/ScrollToTop"; // ✅ FIXED IMPORT

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

    new Lenis({ autoRaf: true });


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