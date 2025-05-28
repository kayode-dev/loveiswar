export const BitsAndPieces = () => {
  return (
    <div
      className="relative text-white w-full md:text-lg space-y-8 p-4  md:pt-10 pb-5 md:py-10 lg:px-80 text-right font-[family-name:var(--font-old-typewriter)]"
      id="bits-and-pieces"
    >
      <div className="space-y-4">
        <p>/ music</p>
        <MusicIframe src="https://starsamm.fanlink.tv/loveiswar" />
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
    <div className="rounded-xl w-full min-h-[450px] relative overflow-hidden">
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
