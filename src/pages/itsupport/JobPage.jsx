import React from "react";
import CvNavbar from "../../components/layout/CvNavbar"
export default function JobPage({ onApply }) {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

     

  <CvNavbar
        onAbout={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}

        onExperience={() => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        }}

        onSkills={() => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        }}

        onContact={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      />


      {/* MAIN */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

          <h1 className="text-2xl text-black font-semibold mb-4">
            აბონენტთა ტექნიკური მხარდაჭერის სპეციალისტი
          </h1>

          {/* INFO TABLE */}
          <div className="space-y-2 text-sm text-black ">
            <InfoRow label="განცხ. ვადა" value="30 აპრ. 2026" />
            <InfoRow label="კატეგორია" value="აბონენტთა მომსახურება" />
            <InfoRow label="ანაზღაურება" value="1000 - 1280 ლარი + ბონუსი" />
            <InfoRow label="სამუშაო" value="სრული, კვირაში 6 დღე" />
            <InfoRow label="ლოკაცია" value="თბილისი" />
            <InfoRow label="გამოცდილება" value="1 წლამდე" />
          </div>

<button
  onClick={onApply}
  className="
    relative w-full mt-4 py-2 rounded-lg
    bg-sky-600 text-white font-semibold
    border border-sky-300
    shadow-[0_0_25px_rgba(56,189,248,0.6)]
    overflow-hidden
    transition-all duration-300
    active:scale-95
  "
>
  {/* STRONG WHITE GLOW LAYER */}
  <span className="
    absolute inset-0 rounded-lg
    bg-white/10
  " />

  {/* WHITE SCANNING LIGHT (VERY VISIBLE) */}
  <span className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white to-transparent
    opacity-40
    -translate-x-full
    animate-[slide_1.8s_linear_infinite]
  " />

  {/* SOFT OUTER EDGE GLOW */}
  <span className="
    absolute inset-0 rounded-lg
    border border-white/30
    shadow-[0_0_20px_rgba(255,255,255,0.25)]
  " />

  {/* TEXT */}
  <span className="relative z-10 tracking-wide font-geo">
    განაცხადის გაკეთება
  </span>

  {/* ANIMATION */}
  <style>
    {`
      @keyframes slide {
        0% { transform: translateX(-120%); }
        100% { transform: translateX(120%); }
      }
    `}
  </style>
</button>
<div className="mt-3 divide-y divide-sky-400/30 ">

  <div className="py-2 pb-4">
    <Section title="ძირითადი ფუნქციები">
      <li>ტელეფონით მომხმარებელთა დახმარება</li>
      <li>ინტერნეტისა და ქსელის დიაგნოსტიკა</li>
      <li>სისტემური პრობლემების იდენტიფიკაცია</li>
      <li>მომხმარებლის კონსულტაცია</li>
    </Section>
  </div>

  <div className="py-2 pb-4">
    <Section title="საკვალიფიკაციო მოთხოვნები">
      <li>Windows ცოდნა</li>
      <li>ქსელის საბაზისო ცოდნა</li>
      <li>ping / traceroute / nslookup</li>
      <li>პრობლემების დიაგნოსტიკა</li>
    </Section>
  </div>

  <div className="py-2 pb-4">
    <Section title="პიროვნული მახასიათებლები">
      <li>კომუნიკაცია</li>
      <li>დისციპლინა</li>
      <li>მომხმარებელზე ორიენტაცია</li>
      <li>სწავლის სწრაფი უნარი</li>
    </Section>
  </div>

</div>
        
        </div>

        {/* RIGHT SIDEBAR */}
{/* RIGHT SIDEBAR */}
<div className="space-y-[1px]">

  {/* COUNTDOWN */}
  <div className="bg-[#3173a7]
    bg-black/70
    p-3
    text-center
    border border-[#266698]
    shadow-[0_0_10px_rgba(34,94,139,0.25)]
  ">
    <h3 className=" text-[#ffffff] mb-1 text-sm  font-geo">
      დარჩენილი დრო
    </h3>
    <div className="text-xl font-mono text-white">
      0d : 20h : 43m
    </div>
  </div>

  {/* BANNERS */}
  <SidebarImg src="/assets/net/bits.gif" />
  <SidebarImg src="/assets/net/4.gif" />
  <SidebarImg src="/assets/net/6.gif" />
  <SidebarImg src="/assets/net/3.gif" />

</div>

      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b py-1">
      <span className="text-[#3a95db] font-geo font-bold">
        {label}
      </span>
      <span className="font-medium text-gray-800">
        {value}
      </span>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2 text-sky-600">
        {title}
      </h2>

      <ul className="space-y-1 text-sm text-gray-700">
        {React.Children.map(children, (child, i) => (
          <li key={i} className="flex items-start gap-2">
            
            {/* BLUE CHECK MARK */}
            <span className="text-sky-500 mt-[2px] text-sm">
              ✓
            </span>

            {/* CONTENT */}
            <span>{child.props.children}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SidebarImg({ src }) {
  return (
    <div className="
      w-full h-[185px]
      overflow-hidden
      border border-[#266698]
      shadow-[0_0_12px_rgba(38,102,152,0.25)]
      bg-black
    ">
      <img
        src={src}
        className="w-full h-full object-cover"
      />
    </div>
  );
}