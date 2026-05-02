import { useEffect, useState, useRef } from "react";

const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

const LoadingPage = ({ onFinish }) => {
  const [typedText, setTypedText] = useState("");
  const [typedParagraph, setTypedParagraph] = useState("");
  const [showButton, setShowButton] = useState(false);

  const fullText = "HELLO_WORLD";
  const paragraphText = "Welcome to my NETWORK PORTAL";

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(typingInterval);

        let pIndex = 0;
        const paragraphInterval = setInterval(() => {
          setTypedParagraph(paragraphText.slice(0, pIndex + 1));
          pIndex++;

          if (pIndex >= paragraphText.length) {
            clearInterval(paragraphInterval);
          }
        }, 28);

        setTimeout(() => setShowButton(true), 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // glitch title
  useEffect(() => {
    if (!titleRef.current) return;

    const interval = setInterval(() => {
      if (!typedText) return;

      const arr = typedText.split("");

      for (let i = 0; i < Math.min(3, arr.length); i++) {
        const randChar = chars[Math.floor(Math.random() * chars.length)];
        const pos = Math.floor(Math.random() * arr.length);

        if (arr[pos] !== " ") arr[pos] = randChar;
      }

      titleRef.current.innerText = arr.join("");
    }, 100);

    return () => clearInterval(interval);
  }, [typedText]);

  // glitch paragraph
  useEffect(() => {
    if (!paragraphRef.current) return;

    const interval = setInterval(() => {
      if (!typedParagraph) return;

      const arr = typedParagraph.split("");

      for (let i = 0; i < Math.min(2, arr.length); i++) {
        const randChar = chars[Math.floor(Math.random() * chars.length)];
        const pos = Math.floor(Math.random() * arr.length);

        if (arr[pos] !== " ") arr[pos] = randChar;
      }

      paragraphRef.current.innerText = arr.join("");
    }, 150);

    return () => clearInterval(interval);
  }, [typedParagraph]);

  const handleButtonClick = () => {
    setShowButton(false);
    onFinish();
  };

  return (
    <div className="bg-[#06121f] min-h-screen flex flex-col justify-center items-center select-none relative overflow-hidden">

      {/* TITLE */}
      <h1
        ref={titleRef}
        className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        text-[#38bdf8] uppercase font-black tracking-widest
        drop-shadow-[0_0_35px_#38bdf8]"
      >
        {typedText}
      </h1>

      {/* PARAGRAPH */}
      <p
        ref={paragraphRef}
        className="mt-4 sm:mt-6 text-center text-sm sm:text-base md:text-xl lg:text-2xl
        text-white font-mono max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl
        drop-shadow-[0_0_20px_#38bdf8]"
      >
        {typedParagraph}
      </p>

{/* BUTTON */}
{showButton && (
  <button
    onClick={handleButtonClick}
    className="
      mt-6 sm:mt-10 px-6 py-3

      relative overflow-hidden group

      border border-sky-400/40

      bg-sky-500/10 backdrop-blur-md

      text-sky-300

      font-mono tracking-widest

      transition-all duration-500 ease-out

      hover:scale-110
      hover:border-sky-300/80
      hover:shadow-[0_0_35px_rgba(56,189,248,0.7)]
    "
  >
    {/* glass glow layer */}
    <span className="
      absolute inset-0
      bg-gradient-to-br from-sky-500/10 via-white/5 to-sky-500/10
      opacity-60
    " />

    {/* moving shine */}
    <span className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

    {/* text */}
    <span className="relative z-10 animate-pulse">
      CONNECT:443
    </span>

  </button>
)}
  
    </div>
  );
};

export default LoadingPage;