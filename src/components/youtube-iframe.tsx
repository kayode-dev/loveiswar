interface YoutubeIFrameProps {
  videoSrc: string;
  title: string;
}
export const YoutubeIFrame = ({ videoSrc, title }: YoutubeIFrameProps) => {
  return (
    <iframe
      className="w-full min-h-full border-2 rounded-lg border-red-700/30"
      height="315"
      src={videoSrc}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
