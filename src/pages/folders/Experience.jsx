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
    <div className="h-full flex flex-col bg-black text-white font-mono pt-4 px-4">

      {/* FILE TABS */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {jobs.map((j, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              px-4 py-2 text-sm border rounded whitespace-nowrap transition
              ${
                i === active
                  ? "border-sky-400 bg-sky-400/10 text-sky-300"
                  : "border-sky-400/20 hover:border-sky-400/50 hover:bg-sky-400/5"
              }
            `}
          >
            {j.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto border border-sky-400/20 rounded-lg p-5 bg-black/30 backdrop-blur">

        {/* TOP ROW */}
        <div className="flex gap-6">

          {/* IMAGE */}
          {job.image && (
            <div className="w-1/2 border border-sky-400/20 rounded-lg overflow-hidden shadow-[0_0_10px_rgba(56,189,248,0.15)]">
              <img
                src={job.image}
                alt={job.name}
                className="w-full h-52 object-cover"
              />
            </div>
          )}

          {/* TOOLS */}
          <div className="w-1/2">
            <p className="text-sm text-sky-400 mb-3 tracking-wide">
              PROGRAMS / TOOLS
            </p>

            <div className="flex flex-wrap gap-2">
              {job.tools.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm border border-sky-400/30 rounded bg-sky-400/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">

          <h2 className="text-sky-400 text-2xl font-semibold">
            {job.title}
          </h2>

          <p className="text-sm opacity-60 mb-4">
            {job.subtitle}
          </p>

          <ul className="list-disc pl-6 space-y-2 text-base text-white/85">
            {job.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Experience;