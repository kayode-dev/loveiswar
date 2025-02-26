"use client";

import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { writeUp } from "@/lib/constants";
import { ShowWriteUp } from "@/components/show-write-up";
import Image from "next/image";
import starsamm from "@/assets/starsamm.png";

export default function Home() {
  gsap.registerPlugin(TextPlugin);

  const [start, setStart] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [skip, setSkip] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (skip) audioRef.current?.pause();
    if (start && !skip) {
      if (audioRef.current) audioRef.current.play();
      const tl = gsap.timeline({
        delay: 0.04,
        defaults: {
          duration: writeUp[activeTextIndex].text.length * 0.06,
        },
      });
      tl.to(writeUp[activeTextIndex].triggerClass, {
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
  }, [activeTextIndex, start, skip]);

  return (
    <div className="relative text-primary flex flex-col items-center justify-center min-h-dvh gap-16">
      <Image
        src={starsamm}
        alt="starsamm love is war"
        className={cn(
          "fixed top-0 -z-10 w-full h-full opacity-0 object-left object-cover duration-500 ease-in-out",
          videoEnded && "opacity-100"
        )}
      />

      <div
        className={cn("fixed w-full h-full flex items-center justify-center", {
          hidden: videoEnded,
        })}
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
          <source src="/loveiswarGrunge.mp4" className="" type="video/mp4" />
        </video>
      </div>
      <div className="bg-black/80 min-h-dvh w-full flex items-center justify-center">
        {!start ? (
          <button
            className={cn(
              "animate-pulse underline text-lg text-primary font-bold underline-offset-2",
              {
                hidden: !videoEnded,
              }
            )}
            onClick={() => {
              setStart(true);
            }}
          >
            start
          </button>
        ) : (
          <ShowWriteUp skip={skip} setSkip={setSkip} />
        )}
      </div>
      <audio src="/typewriter.mp3" ref={audioRef} autoPlay playsInline></audio>
    </div>
  );
}
