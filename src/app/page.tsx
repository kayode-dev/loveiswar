"use client";
"use client";
import Image from "next/image";
import starsamm from "@/assets/starsamm-hero.jpg";
import loveIsWarLogoMark from "@/assets/love-is-war.png";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useState } from "react";
import { MailingListForm } from "@/components/mailing-list-form";
import { cn } from "@/lib/utils";

const writeUp =
  "Starsamm is war—grit forged through strife, a superhuman light born from brokenness. His path began in the quiet chaos of separation, music pulsing in his soul as life pushed him to the edge. Lagos to Osun and back, writing lyrics in forbidden moments to planning for a dream bigger than himself, every struggle became a step forward. A transient being, his essence transcends time, like starlight, burning bright and reaching us eons later. His music isn’t made; it unfolds, guided by experience and spirituality beyond bounds. Love is war, and Starsamm is the light in the fight.";

export default function Home() {
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap
      .to(".desc", {
        duration: 15,
        text: writeUp,
      })
      .then(() => {
        setAnimationDone(true);
      });
  }, []);
  const [animationDone, setAnimationDone] = useState(false);
  return (
    <div className="text-red-700 items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-bebas-neue)]">
      <div className="relative h-screen overflow-hidden">
        <Image
          src={starsamm}
          alt="starsamm"
          className="object-cover h-full"
          placeholder="blur"
        />
        <div className="absolute bottom-0 left-0 h-full w-full bg-black/70 z-10 flex items-center justify-center">
          <Image
            src={loveIsWarLogoMark}
            alt="love is war logo"
            className="md:max-w-[50%]"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="p-4 md:p-20 flex flex-col md:flex-row gap-10 w-full md:h-screen ease-out duration-500">
        <div
          className={cn(
            "flex flex-col items-center writeup-container justify-center ",
            {
              "write-up-container-after": animationDone,
            }
          )}
        >
          <div className="h-[600px] md:h-[250px]  mx-auto">
            <p className="text-2xl desc"></p>
          </div>
          <div
            className={cn("w-0 hidden transition-[width] delay-500", {
              "w-full block": animationDone,
            })}
          >
            <MailingListForm />
          </div>
        </div>
        <div
          className={cn(
            "flex md:flex-col overflow-x-auto md:items-center overflow-y-auto youtube-container justify-center gap-4",
            { "youtube-container-after": animationDone }
          )}
        >
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/JPcO_jXj3vY?si=cEMLumgXUJq9uRJ8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
