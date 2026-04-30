import React from "react";
import CvViewer from "./CvViewer";
export default function Form({ onClose }) {
  const fields = [
    { label: "სახელი:", value: "სოფო" },
    { label: "გვარი:", value: "გურგენიძე" },
    { label: "პირადი ნომერი:", value: "01010101010" },
       { label: "სქესი:", value: "მდედრობითი" },
    { label: "დაბადების თარიღი:", value: "03-05-2004" },
    { label: "ელ-ფოსტა:", value: "sopo.@email.com" },
    { label: "ტელეფონი:", value: "+995 555 12 34 56" },
    { label: "ქალაქი:", value: "თბილისი" },
    { label: "მისამართი:", value: "ო ლ ქ 24" }
  ];

  return (
<div className="w-[520px] h-full max-h-[780px] bg-gray-100 rounded-2xl shadow-2xl flex flex-col border-4 border-[#266698]">
      {/* HEADER */}
      <div
        className="h-14 flex items-center justify-between px-4 text-white font-semibold font-geo"
        style={{ backgroundColor: "#2b75ae" }}
      >
        <span>📄 განაცხადის გაკეთება</span>

        <span
          onClick={onClose}
          className="cursor-pointer text-lg opacity-80 hover:opacity-100"
        >
          ✕
        </span>
      </div>

      {/* BODY */}
    <div className="flex-1 min-h-0 overflow-y-auto p-4 bg-gray-50 space-y-4">    {/* FIELDS (NEW LAYOUT) */}
        <div className="space-y-3">
          {fields.map((item, i) => (
            <div key={i} className="flex items-center gap-4 ">

              {/* LABEL (OUTSIDE BOX) */}
              <div className="w-[171px] text-s text-gray-600 font-geo font-bold">
                {item.label}
              </div>

              {/* VALUE BOX (NORMAL FONT) */}
              <div className="flex-1 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 font-sans">
                {item.value}
              </div>

            </div>
          ))}
        </div>

        {/* CV */}
        <div className="bg-white p-3 rounded-xl border border-[#266698]">
          <div className="text-xs text-gray-500 mb-1 font-geo">
            რეზიუმე (PDF/Word)
          </div>
        <div className="text-sm font-sans flex justify-center">
  <CvViewer />
</div>
        </div>

        {/* EDUCATION */}
        <div className="bg-n p-3 rounded-xl border border-[#266698]">
          <div className="font-semibold text-sm mb-2 font-geo">
            განათლება
          </div>
          <div className="text-sm text-gray-700 font-sans">
            IT College - Networking
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-white p-3 rounded-xl border border-[#266698]">
          <div className="font-semibold text-sm mb-2 font-geo">
            გამოცდილება
          </div>
          <div className="text-sm text-gray-700 font-sans">
            Junior Support (1 წელი)
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="bg-white p-3 rounded-xl border border-[#266698]">
          <div className="font-semibold text-sm mb-2 font-geo">
            ენების ცოდნა
          </div>
          <div className="text-sm text-gray-700 font-sans">
            English, Russian
          </div>
        </div>

        {/* LICENSE */}
        <div className="bg-white p-3 rounded-xl border border-[#266698]">
          <div className="font-semibold text-sm mb-2 font-geo">
            მართვის მოწმობა
          </div>
          <div className="text-sm text-gray-700 font-sans">
            B, C
          </div>
        </div>

        {/* AGREEMENT */}
        <div className="text-[11px] text-gray-600 leading-4 font-geo">
          ✔ თანახმა ვარ მონაცემების დამუშავებაზე
        </div>

        <div className="h-10" />
      </div>

      {/* FOOTER */}
      <div className="p-3 border-t border-[#266698] bg-gray-100">
        <button className="w-full h-10 bg-[#2b75ae] hover:bg-[#225e8b] text-white rounded-lg font-semibold font-geo">
          განაცხადის გაკეთება
        </button>
      </div>

    </div>
  );
}