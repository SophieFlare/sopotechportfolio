import { useEffect, useRef } from "react";

const chars = "0123456789ABCTVXYZabcdefghi!✦@♥︎✶ㅤ♡#$%^&*()-_=+";

const GlitchText = ({ children, className = "", speed = 100 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const original = children;

    const interval = setInterval(() => {
      const text = original.split("");

      // fewer changes = smoother / slower feel
      const glitchCount = speed < 60 ? 3 : 1;

      for (let i = 0; i < glitchCount; i++) {
        const pos = Math.floor(Math.random() * text.length);
        if (text[pos] !== " ") {
          text[pos] =
            chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.textContent = text.join("");

      setTimeout(() => {
        el.textContent = original;
      }, speed);
    }, speed * 2);

    return () => clearInterval(interval);
  }, [children, speed]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
};

export default GlitchText;