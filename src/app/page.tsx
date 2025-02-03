"use client";
"use client";
import Image from "next/image";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useState } from "react";
import { MailingListForm } from "@/components/mailing-list-form";
import { cn } from "@/lib/utils";
import LOveIsWarGrunge from "@/assets/Love is war Grunge_2.gif";

const writeUp =
  "Starsamm is war—grit forged through strife, a superhuman light born from brokenness. His path began in the quiet chaos of separation, music pulsing in his soul as life pushed him to the edge. Lagos to Osun and back, writing lyrics in forbidden moments to planning for a dream bigger than himself, every struggle became a step forward. A transient being, his essence transcends time, like starlight, burning bright and reaching us eons later. His music isn’t made; it unfolds, guided by experience and spirituality beyond bounds. Love is war, and Starsamm is the light in the fight.";

export default function Home() {
  gsap.registerPlugin(TextPlugin);

  const [animationDone, setAnimationDone] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 3000);
  }, []);
  useEffect(() => {
    gsap
      .to(".desc", {
        delay: 2,
        duration: 20,
        text: writeUp,
      })
      .then(() => {
        setAnimationDone(true);
      });
  }, []);
  return (
    <div className="relative text-red-700 items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-bebas-neue)]">
      <div
        className={cn("fixed w-full h-dvh duration-1000 transition-[z-index]", {
          "-z-10": pageLoaded,
        })}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-1/2 bg-neutral-900 duration-1000 transition-[top] ease-in",
            {
              "-top-full": pageLoaded,
            }
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900 duration-1000 transition-[bottom] ease-in",
            {
              "-bottom-full": pageLoaded,
            }
          )}
        />
        <Image
          src={LOveIsWarGrunge}
          alt="Starsamm Love is War"
          className={cn(
            "absolute top-1/4 md:top-0 md:left-[20%] -left-2 z-20",
            {
              hidden: pageLoaded,
            }
          )}
        />
      </div>
      <div className="p-4 md:p-20 flex flex-col min-h-dvh md:h-screen md:flex-row gap-10 w-full ease-out duration-500">
        <div
          className={cn(
            "flex flex-col items-center writeup-container justify-center ",
            {
              "write-up-container-after": animationDone,
            }
          )}
        >
          <div className="mx-auto">
            <p className="text-2xl desc"></p>
          </div>
          <div
            className={cn(
              "mailing-list-container hidden transition-[width] delay-500",
              {
                "mailing-list-container-after block": animationDone,
              }
            )}
          >
            <MailingListForm />
          </div>
        </div>
        <div
          className={cn(
            "flex md:flex-col overflow-x-auto md:items-center overflow-y-auto youtube-container md:justify-center gap-4",
            { "youtube-container-after": animationDone }
          )}
        >
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube-nocookie.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="Starsamm - Waiting For, Give me love & Need you (Cover) | Live Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube-nocookie.com/embed/JPcO_jXj3vY?si=cEMLumgXUJq9uRJ8"
            title="Starsamm - On Me, Ocean Eyes & Infinity (Cover) | Live Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
