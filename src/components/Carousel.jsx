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
    "assets/net/7.jpg",
    "assets/net/earth.gif",
    "assets/net/earth.jpg",
    "assets/net/earth.jpg",
    "assets/net/earth.gif",
    "assets/net/earth.jpg",
  ];

  return (
    <div id="gallery" className="banner">

      <style>{`
        .banner {
          width: 100%;
          height: 70vh;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
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

          /* SKY BLUE CYBER GLOW */
          box-shadow:
            0 0 18px rgba(56, 189, 248, 0.9),
            0 0 55px rgba(56, 189, 248, 0.6),
            0 0 110px rgba(56, 189, 248, 0.25);

          transition: all 0.3s ease;
        }

        .item img:hover {
          box-shadow:
            0 0 25px rgba(56, 189, 248, 1),
            0 0 80px rgba(56, 189, 248, 0.7),
            0 0 140px rgba(56, 189, 248, 0.35);
        }
      `}</style>

      {/* ROTATING CARDS */}
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