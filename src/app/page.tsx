"use client";
import Image from "next/image";
import starsamm from "@/assets/starsamm-hero.jpg";
import loveIsWarLogoMark from "@/assets/love-is-war.png";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(".desc", {
      duration: 20,
      text: "a battlefield where hearts clash, not to conquer, but to surrender to the beauty of connection. Ready to join the fight for love? Share your name and email, and let’s embark on this journey together!",
    });
  }, []);
  return (
    <div className="text-red-700 items-center justify-items-center min-h-screen gap-16 ">
      <div className="relative h-screen overflow-hidden">
        <Image
          src={starsamm}
          alt="starsamm"
          className="object-cover h-full"
          placeholder="blur"
        />
        <div className="absolute bottom-0 left-0 h-full w-full bg-black/50 z-10 flex items-center justify-center">
          <Image
            src={loveIsWarLogoMark}
            alt="love is war logo"
            className="md:max-w-[50%]"
          />
        </div>
      </div>
      <div className="p-4 md:p-20 w-full">
        <p className="text-2xl desc min-h-[400px]"></p>
      </div>
    </div>
  );
}
