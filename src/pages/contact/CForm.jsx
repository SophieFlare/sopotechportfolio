import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const CForm = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setFlash(true);

    setTimeout(() => setFlash(false), 350);

    const templateParams = {
      Sophie: form.email,
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✔ TRANSMISSION SUCCESS");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          alert("✖ TRANSMISSION FAILED");
        }
      );
  };

  const [matrixLinesTop, setMatrixLinesTop] = useState([]);
  const [matrixLinesBottom, setMatrixLinesBottom] = useState([]);

  useEffect(() => {
    const generate = () => {
      setMatrixLinesTop(
        Array.from({ length: 8 }, () =>
          Math.random().toString(2).slice(2, 14)
        )
      );
      setMatrixLinesBottom(
        Array.from({ length: 8 }, () =>
          Math.random().toString(2).slice(2, 14)
        )
      );
    };

    generate();
    const interval = setInterval(generate, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-[-20px] bg-black border border-[#ff0033] shadow-[0_0_25px_#ff0033] p-6 flex flex-col gap-4 font-mono text-[#ff0033] overflow-hidden relative">

      {flash && (
        <div className="fixed inset-0 bg-[#ff0033]/40 pointer-events-none z-[9999] animate-ping" />
      )}

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-white">CONTACT_TERMINAL.EXE</span>
        <span className="text-xs text-[#ff0033] opacity-80">ONLINE</span>
      </div>

      {/* MATRIX TOP */}
      <div className="flex justify-between mb-3 text-xs text-[#ff0033]">
        {matrixLinesTop.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* FORM */}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div className="flex flex-col">
          <label className="text-white text-xs mb-1 tracking-widest">
            USER:
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-black border border-[#ff0033] rounded-md px-3 py-2 text-[#ff0033] shadow-[0_0_10px_#ff0033]/30"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white text-xs mb-1 tracking-widest">
            EMAIL:
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-black border border-[#ff0033] rounded-md px-3 py-2 text-[#ff0033] shadow-[0_0_10px_#ff0033]/30"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white text-xs mb-1 tracking-widest">
            MESSAGE:
          </label>
          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-black border border-[#ff0033] rounded-md px-3 py-2 text-[#ff0033] shadow-[0_0_10px_#ff0033]/30"
          />
        </div>

        {/* MATRIX BOTTOM */}
        <div className="flex justify-between text-xs text-[#ff0033]">
          {matrixLinesBottom.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-black border border-[#ff0033] py-2 rounded-md text-[#ff0033] shadow-[0_0_15px_#ff0033] hover:bg-[#1a0000] transition"
        >
          {loading ? "SENDING_PACKET..." : "SEND_PACKET()"}
        </button>

      </form>
    </div>
  );
};

export default CForm;