"use client";

import { useEffect, useRef } from "react";

export default function ParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const offset = window.pageYOffset;
        imageRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={imageRef}
      className="w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    ></div>
  );
}
