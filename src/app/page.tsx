import Image from "next/image";
import loveIsWarGrunge from "@/assets/Love is war Grunge.gif";

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <Image
        src={loveIsWarGrunge}
        alt="love is war logo"
        className="relative -left-2 md:w-1/2"
      />
    </div>
  );
}
