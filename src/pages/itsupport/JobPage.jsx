import React from "react";

export default function JobPage({ onApply }) {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* NAVBAR */}
 {/* NAVBAR */}
<div className=" shadow-md border-b border-sky-200">
  <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
    
    <div className="font-bold text-sky-600">
      JOBS.SILKNET.COM
    </div>

    <div className="flex gap-6 text-sm text-gray-700">
      
      <button
        type="button"
        className="hover:text-sky-600 transition"
        onClick={() => console.log("Vacancies clicked")}
      >
        ვაკანსიები
      </button>

      <a
        href="https://silknet.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-600 transition"
      >
        ჩვენ შესახებ
      </a>

      <button
        type="button"
        className="hover:text-sky-600 transition"
        onClick={() => console.log("FAQ clicked")}
      >
        FAQ
      </button>

      <button
        type="button"
        className="hover:text-sky-600 transition"
        onClick={() => console.log("Contact clicked")}
      >
        კონტაქტი
      </button>

    </div>
  </div>
</div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

          <h1 className="text-2xl font-semibold mb-4">
            აბონენტთა ტექნიკური მხარდაჭერის სპეციალისტი
          </h1>

          {/* INFO TABLE */}
          <div className="space-y-2 text-sm">
            <InfoRow label="განცხ. ვადა" value="30 აპრ. 2026" />
            <InfoRow label="კატეგორია" value="აბონენტთა მომსახურება" />
            <InfoRow label="ანაზღაურება" value="1000 - 1280 ლარი + ბონუსი" />
            <InfoRow label="სამუშაო" value="სრული, კვირაში 6 დღე" />
            <InfoRow label="ლოკაცია" value="თბილისი" />
            <InfoRow label="გამოცდილება" value="1 წლამდე" />
          </div>

<button
  onClick={onApply}
  className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
>
  განაცხადის გაკეთება
</button>
          {/* FUNCTIONS */}
          <Section title="ძირითადი ფუნქციები">
            <li>ტელეფონით მომხმარებელთა დახმარება</li>
            <li>ინტერნეტისა და ქსელის დიაგნოსტიკა</li>
            <li>სისტემური პრობლემების იდენტიფიკაცია</li>
            <li>მომხმარებლის კონსულტაცია</li>
          </Section>

          {/* REQUIREMENTS */}
          <Section title="საკვალიფიკაციო მოთხოვნები">
            <li>Windows ცოდნა</li>
            <li>ქსელის საბაზისო ცოდნა</li>
            <li>ping / traceroute / nslookup</li>
            <li>პრობლემების დიაგნოსტიკა</li>
          </Section>

          {/* SKILLS */}
          <Section title="პიროვნული მახასიათებლები">
            <li>კომუნიკაცია</li>
            <li>დისციპლინა</li>
            <li>მომხმარებელზე ორიენტაცია</li>
            <li>სწავლის სწრაფი უნარი</li>
          </Section>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-4">

          {/* COUNTDOWN */}
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-sky-600 mb-2">დარჩენილი დრო</h3>
            <div className="text-2xl font-mono text-gray-800">
              0d : 20h : 43m
            </div>
          </div>

          {/* BANNERS */}
          <SidebarImg src="/assets/5g.png" />
          <SidebarImg src="/assets/esim.jpg" />
          <SidebarImg src="/assets/zoomap.png" />
          <SidebarImg src="/assets/cavea.png" />

        </div>

      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b py-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2 text-sky-600">{title}</h2>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        {children}
      </ul>
    </div>
  );
}

function SidebarImg({ src }) {
  return (
    <img
      src={src}
      className="w-full rounded-xl shadow hover:scale-105 transition"
    />
  );
}