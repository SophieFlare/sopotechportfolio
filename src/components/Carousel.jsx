import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    let speed = 0.05;

    const slider = sliderRef.current;
    if (!slider) return;

    const spin = () => {
      angle += speed;

      slider.style.transform =
        `perspective(500px) translate(-50%, -50%) rotateX(-5deg) rotateY(${angle}deg)`;

      requestAnimationFrame(spin);
    };

    spin();
  }, []);

  const images = [
    "assets/net/1.gif",
    "assets/net/2.gif",
    "assets/net/3.gif",
    "assets/net/4.gif",
    "assets/net/5.gif",
    "assets/net/6.gif",
    "assets/net/5.gif",
    "assets/net/11.jpg",
    "assets/net/12.jpg",
    "assets/net/ss.jpg",
    "assets/net/14.jpg",
    "assets/net/15.jpg",
  ];

return (
  <div id="gallery" className="w-full min-h-[80vh] py-20 flex justify-center items-center overflow-hidden pt-[35%]">

    <style>{`
      .banner {
        width: 100%;
        min-height: 150vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
      }

      .slider {
        position: relative;
        width: 270px;
        height: 370px;
        transform-style: preserve-3d;
      }

      .item {
        position: absolute;
        inset: 0;
        transform:
          rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
          translateZ(-1200px);
      }

      .item img {
        width: 130%;
        height: 130%;
        object-fit: cover;
        transform: rotateY(180deg);
        border-radius: 12px;

        box-shadow:
          0 0 18px rgba(56, 189, 248, 0.9),
          0 0 55px rgba(56, 189, 248, 0.6),
          0 0 110px rgba(56, 189, 248, 0.25);
      }
    `}</style>

    <div
      className="slider"
      ref={sliderRef}
      style={{ "--quantity": images.length }}
    >
      {images.map((img, i) => (
        <div className="item" key={i} style={{ "--position": i + 1 }}>
          <img src={img} alt="" draggable="false" />
        </div>
      ))}
    </div>

  </div>
);
};

export default Carousel;