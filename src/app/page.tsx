"use client";

import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface WriteUpBody {
  triggerClass: string;
  text: string;
}
const writeUp: WriteUpBody[] = [
  { triggerClass: ".start", text: "Hey, I’m Starsamm " },
  {
    triggerClass: ".para1",
    text: "Artist by passion, and romantic by instinct. I create, I feel, and I might just know a thing or two about love.",
  },
  {
    triggerClass: ".para2",
    text: "Love is many things. It’s a connection, a feeling, a choice, a mix of comfort and challenge. At its core, it is what makes us human. It’s deep and complex, hard to define but easy to feel.",
  },
  {
    triggerClass: ".para3",
    text: "Love is many things, but if you ask me, I’ll tell you what love truly is:",
  },
  { triggerClass: ".para4", text: "LOVE IS WAR" },
  { triggerClass: ".para5", text: "How so? You'll have to find out" },
  { triggerClass: ".cta", text: "dare to uncover the truth?" },
];
export default function Home() {
  gsap.registerPlugin(TextPlugin);
  const [start, setStart] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (start) {
      if (audioRef.current) audioRef.current.play();
      gsap.to(writeUp[activeTextIndex].triggerClass, {
        delay: 1,
        duration: writeUp[activeTextIndex].text.length * 0.1,
        text: {
          value: writeUp[activeTextIndex].text,
        },
        ease: "none",
        onComplete: () => {
          if (activeTextIndex !== writeUp.length - 1) {
            audioRef.current?.pause();
            setActiveTextIndex((prev) => prev + 1);
            return;
          }
          audioRef.current?.pause();
        },
      });
    }
  }, [activeTextIndex, start]);
  return (
    <div className="relative text-red-700 items-center justify-center min-h-screen gap-16 font-[family-name:var(--font-old-typewriter)]">
      <div
        className={cn(
          "fixed w-full h-dvh flex items-center justify-center bg-black",
          { hidden: videoEnded }
        )}
      >
        <video
          preload="none"
          className="md:w-1/2 relative z-0"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setVideoEnded(true);
          }}
        >
          <source
            src="/loveiswarGrunge.mp4"
            className="bg-black"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="p-4 md:p-20 flex flex-col min-h-dvh items-center justify-center md:h-screen md:flex-row gap-10 w-full ease-out duration-500">
        {!start ? (
          <button
            className={cn("animate-pulse underline underline-offset-2", {
              hidden: !videoEnded,
            })}
            onClick={() => {
              setStart(true);
            }}
          >
            start
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4 justify-center ">
            <div className="mx-auto space-y-4 tracking-widest">
              <p className="md:text-lg text-center start"></p>
              <p className="md:text-lg text-center para1"></p>
              <p className="md:text-lg text-center para2"></p>
              <p className="md:text-lg text-center para3"></p>
              <p className="md:text-lg text-center para4"></p>
              <p className="md:text-lg text-center para5"></p>
            </div>
            <Link
              href="/register"
              className="cta underline underline-offset-2 md:text-lg"
            ></Link>
          </div>
        )}
      </div>
      <audio src="/typewriter.mp3" ref={audioRef} playsInline></audio>
    </div>
  );
}
