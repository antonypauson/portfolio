import { useEffect, useState, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import HeadingTypewriter from "./TypeWriter";

export default function Hero() {
  const vantaRef = useRef(null);
  useEffect(() => {
    let vantaEffect: any;
    if (!window.THREE) {
      window.THREE = THREE;
    }
    if (vantaRef.current) {
      vantaEffect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xf7cb40,
        midtoneColor: 0xe81e6f,
        lowlightColor: 0xeb8017,
        baseColor: 0xe14220,
        blurFactor: 0.62,
        speed: 2.6,
        zoom: 0.4,
      });
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen">
      <h1 className="text-[10rem] font-semibold">
        <HeadingTypewriter /> SUN
      </h1>
      <h4></h4>
    </div>
  );
}
