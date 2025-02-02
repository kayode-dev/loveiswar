"use client";
import Image from "next/image";
import loveIsWarGrunge from "@/assets/Love is war Grunge.gif";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <div className="h-dvh flex items-center justify-center ">
      <Image
        src={loveIsWarGrunge}
        alt="love is war logo"
        className={cn(
          "relative -left-2 md:w-1/2 opacity-0 duration-[2s] ease-in transition-opacity",
          {
            "opacity-100": isLoading,
          }
        )}
      />
    </div>
  );
}
