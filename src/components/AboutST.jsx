import React from "react";

import STG from "./STG";
import STG_T from "./layout/terminal/STG_T";

const AboutST = () => {
  return (
    <section className="
      w-full min-h-screen
     
      flex items-center justify-center
      px-10
      overflow-hidden
    ">
      <div className="
        w-full max-w-7xl
        flex flex-col md:flex-row
        items-center justify-between
        gap-16
      ">

        {/* LEFT SIDE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <STG />
        </div>

        {/* RIGHT SIDE */}
        <div className="
          flex-1
          flex justify-center md:justify-end
          h-[700px]
        ">
          <STG_T />
        </div>

      </div>
    </section>
  );
};

export default AboutST;