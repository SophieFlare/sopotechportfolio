import React, { useState } from "react";

const jobs = [
  {
    name: "Freelance.dev",
    title: "Freelance Developer",
    subtitle: "React / Next.js Development",
    image: "/folder_images/opt.jpg",
    tools: ["React", "Next.js", "JavaScript", "Tailwind", "Three.js", "Git"],
    points: [
      "შევქმენი თანამედროვე ვებსაიტები რეალური ბრენდებისთვის",
      "UI/UX, ანიმაციები და ვიზუალური იდენტობა",
      "პირდაპირი კლიენტური კომუნიკაცია და პროდუქტის მიწოდება",
    ],
  },
  {
    name: "CyberArena.sys",
    title: "Cyber Arena Technician",
    subtitle: "System & Network Support",
    image: "/folder_images/cyber.jpg",
    tools: ["Router", "Modem", "BIOS", "Windows", "Troubleshooting"],
    points: [
      "სისტემებისა და ინტერნეტის სტაბილურობის უზრუნველყოფა",
      "ჰარდ/სოფტ პრობლემების დიაგნოსტიკა",
      "BIOS კონფიგურაცია და ოპტიმიზაცია",
    ],
  },
  {
    name: "Hotel.service",
    title: "Hotel Operations",
    subtitle: "Booking Systems & Customer Support",
    image: "/folder_images/justinn.jpg",
    tools: ["HotelMS", "Cloudbeds", "Booking.com", "Excel", "Gmail"],
    points: [
      "სასტუმროს ოპერაციების მართვა",
      "ჯავშნების კონტროლი და სისტემური მუშაობა",
      "სწრაფი პრობლემების გადაჭრა",
    ],
  },
  {
    name: "Cosmetics.market",
    title: "Cosmetics Sales",
    subtitle: "Social Media Marketing",
    image: "/folder_images/oriflame.jpeg",
    tools: ["Instagram", "Facebook", "TikTok"],
    points: [
      "სოც.მედიის მეშვეობით პროდუქციის გაყიდვა",
      "კლიენტების ბაზის ზრდა",
      "შეკვეთების და კომუნიკაციის მართვა",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <div className="h-full flex flex-col bg-black text-sky-400 font-mono p-4">

      {/* TAB BAR */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {jobs.map((j, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              px-4 py-2 text-xs tracking-widest uppercase border transition
              backdrop-blur-md
              ${
                i === active
                  ? "border-sky-400 bg-sky-400/10 shadow-[0_0_15px_#38bdf8]"
                  : "border-sky-400/20 hover:border-sky-400/50 hover:bg-sky-400/5"
              }
            `}
          >
            {j.name}
          </button>
        ))}
      </div>

      {/* MAIN PANEL */}
      <div className="flex-1 overflow-y-auto border border-sky-400/30 bg-black/40 backdrop-blur-lg rounded-lg shadow-[0_0_25px_rgba(56,189,248,0.15)] p-5">

        {/* TOP SECTION */}
        <div className="flex gap-6">

          {/* IMAGE */}
          <div className="w-1/2 border border-sky-400/30 rounded-md overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <img
              src={job.image}
              alt={job.name}
              className="w-full h-52 object-cover opacity-90"
            />
          </div>

          {/* TOOLS */}
          <div className="w-1/2">

            <div className="text-xs tracking-widest text-sky-300 mb-3">
              SYSTEM MODULES
            </div>

            <div className="flex flex-wrap gap-2">
              {job.tools.map((t, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs
                    border border-sky-400/30
                    bg-sky-400/5
                    text-sky-300
                    rounded-md
                    shadow-[inset_0_0_10px_rgba(56,189,248,0.05)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* TITLE BLOCK */}
        <div className="mt-6 border-l-2 border-sky-400 pl-4">

          <h2 className="text-xl text-sky-300 tracking-wide">
            {job.title}
          </h2>

          <p className="text-xs opacity-60">
            {job.subtitle}
          </p>

        </div>

        {/* POINTS */}
        <div className="mt-6 space-y-3">

          {job.points.map((p, i) => (
            <div
              key={i}
              className="
                text-sm text-sky-100/80
                border border-sky-400/10
                bg-black/30
                p-3 rounded-md
                hover:border-sky-400/40
                hover:shadow-[0_0_10px_rgba(56,189,248,0.15)]
                transition
              "
            >
              <span className="text-sky-400 mr-2">›</span>
              {p}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Experience;