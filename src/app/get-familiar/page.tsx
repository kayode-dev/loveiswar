import Image from "next/image";
import { YoutubeIFrame } from "../page";
import loveIsWar from "@/assets/love-is-war.png";
export default function GetFamiliarPage() {
  return (
    <div className="relative md:max-w-5xl mx-auto space-y-12 p-4 pt-10 pb-5 md:py-10 text-right font-[family-name:var(--font-old-typewriter)]">
      <div className="fixed bg-black/50 drop-shadow-lg h-20 backdrop-blur-lg top-0 left-0 flex items-center justify-center w-full">
        <Image
          src={loveIsWar}
          alt="Love is war by Starsamm"
          className="w-3/5 md:w-1/5"
        />
      </div>
      <div className="space-y-4">
        <p>/ music</p>
        <div className="flex flex-col md:flex-row gap-4">
          <iframe
            className="rounded-xl md:w-1/2 min-h-[450px]"
            src="https://open.spotify.com/embed/artist/1iBtMaom4KzYIK2oynJGXY?utm_source=generator"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            allow="autoplay *; encrypted-media *;"
            className="w-full overflow-hidden bg-transparent min-h-[450px] md:w-1/2"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/artist/starsamm/1543820035"
          ></iframe>
        </div>
      </div>
      <div className="space-y-4">
        <p>/ visuals</p>
        <div className="flex  md:items-center overflow-y-auto  md:justify-center gap-4">
          <YoutubeIFrame
            videoSrc="https://www.youtube-nocookie.com/embed/JPcO_jXj3vY?si=cEMLumgXUJq9uRJ8"
            title="Starsamm - Waiting For, Give me love & Need you (Cover) | Live Performance"
          />
          <YoutubeIFrame
            videoSrc="https://www.youtube-nocookie.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="Starsamm - Waiting For, Give me love & Need you (Cover) | Live Performance"
          />
        </div>
        <p>...see you soon❤️‍🩹</p>
      </div>
    </div>
  );
}
