import Image from "next/image";
import starsamm from "@/assets/starsamm-hero.jpg";
import loveIsWarLogoMark from "@/assets/love-is-war.png";

//const writeUp =
//"Starsamm is war—grit forged through strife, a superhuman light born from brokenness. His path began in the quiet chaos of separation, music pulsing in his soul as life pushed him to the edge. Lagos to Osun and back, writing lyrics in forbidden moments to planning for a dream bigger than himself, every struggle became a step forward. A transient being, his essence transcends time, like starlight, burning bright and reaching us eons later. His music isn’t made; it unfolds, guided by experience and spirituality beyond bounds. Love is war, and Starsamm is the light in the fight.";

export default function Home() {
  return (
    <div className="text-red-700 items-center justify-items-center min-h-screen gap-16 ">
      <div className="relative h-screen overflow-hidden">
        <Image
          src={starsamm}
          alt="starsamm"
          className="object-cover h-full"
          placeholder="blur"
        />
        <div className="absolute bottom-0 left-0 h-full w-full bg-black/80 z-10 flex items-center justify-center">
          <Image
            src={loveIsWarLogoMark}
            alt="love is war logo"
            className="md:max-w-[50%] animate-pulse"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
