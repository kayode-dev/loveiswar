"use client";
"use client";
import Image from "next/image";
import starsamm from "@/assets/starsamm-hero.jpg";
import loveIsWarLogoMark from "@/assets/love-is-war.png";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect } from "react";
import { MailingListForm } from "@/components/mailing-list-form";

const writeUp =
  "Starsamm is war—grit forged through strife, a superhuman light born from brokenness. His path began in the quiet chaos of separation, music pulsing in his soul as life pushed him to the edge. Lagos to Osun and back, writing lyrics in forbidden moments to planning for a dream bigger than himself, every struggle became a step forward. A transient being, his essence transcends time, like starlight, burning bright and reaching us eons later. His music isn’t made; it unfolds, guided by experience and spirituality beyond bounds. Love is war, and Starsamm is the light in the fight.";

export default function Home() {
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap
      .to(".desc", {
        duration: 50,
        text: writeUp,
      })
      .then(() => {
        gsap.from(".ytVideos", {
          x: 100,
          opacity: 1,
          duration: 2,
          display: "none",
        });
      });
  }, []);
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
      <div className="p-4 md:p-20 flex flex-col md:flex-row gap-10 w-full md:h-screen">
        <div className="flex flex-col items-center justify-center md:w-3/4">
          <div className="h-[600px] md:h-[250px]  mx-auto">
            <p className="text-2xl desc"></p>
          </div>

          <MailingListForm />
        </div>
        <div className="ytVideos flex flex-col items-center overflow-y-auto md:w-1/4 justify-center gap-4">
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //referrerpolicy="strict-origin-when-cross-origin"
            //allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //referrerpolicy="strict-origin-when-cross-origin"
            //allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //referrerpolicy="strict-origin-when-cross-origin"
            //allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
