import { useEffect, useState, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import HeadingTypewriter from "./TypeWriter";

export default function Hero() {
  const [name, setName] = useState("ആൻ്റണി");
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setName("एंटोनी");
    }, 1000);

    const timer2 = setTimeout(() => {
      setName("Antony");
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

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
        highlightColor: 0x6e0250,
        midtoneColor: 0x840e0e,
        lowlightColor: 0x9d5309,
        baseColor: 0xd46415,
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
    <div ref={vantaRef} className="bg-amber-300 min-h-screen ">
      <h1>{name}</h1>
      <h4>
        <HeadingTypewriter />
      </h4>
    </div>
  );
}
