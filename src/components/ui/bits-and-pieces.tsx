import { YoutubeIFrame } from "../youtube-iframe";

export const BitsAndPieces = () => {
  return (
    <div
      className="relative text-white w-full md:text-lg space-y-8 p-4  md:pt-10 pb-5 md:py-10 lg:px-80 text-right font-[family-name:var(--font-old-typewriter)]"
      id="bits-and-pieces"
    >
      {/* <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-primary" /> */}
      <div className="space-y-4">
        <p>/ visuals</p>
        <div className="flex md:items-center overflow-y-auto  md:justify-center gap-4">
          <YoutubeIFrame
            videoSrc="https://www.youtube-nocookie.com/embed/JPcO_jXj3vY?si=cEMLumgXUJq9uRJ8"
            title="Starsamm - On Me, Ocean Eyes & Infinity (Cover) | Live Performance"
          />
          <YoutubeIFrame
            videoSrc="https://www.youtube-nocookie.com/embed/7GtNl7jBGAU?si=YZhWMmU6wgGI_5Ua"
            title="Starsamm - Waiting For, Give me love & Need you (Cover) | Live Performance"
          />
        </div>
      </div>
      <div className="space-y-4">
        <p>/ music</p>
        <div className="flex flex-col md:flex-row gap-4">
          <MusicIframe src="https://open.spotify.com/embed/artist/1iBtMaom4KzYIK2oynJGXY?utm_source=generator" />
          <MusicIframe src="https://embed.music.apple.com/us/artist/starsamm/1543820035" />
        </div>
        <p>...see you soon❤️‍🩹</p>
      </div>
    </div>
  );
};

export const MusicIframe = ({ src }: { src: string }) => {
  return (
    <div className="rounded-xl md:w-1/2 min-h-[450px] relative overflow-hidden">
      <div className="min-w-full min-h-[450px] animate-pulse bg-neutral-black/80 absolute -z-10"></div>

      <iframe
        className="rounded-xl w-full min-h-[450px]"
        src={src}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};
