import { useEffect, useState, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
 import * as THREE from "three";


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
        blurFactor: 0.21,
        speed: 3.2,
        zoom: 0.1,
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
    </div>
  );
}
