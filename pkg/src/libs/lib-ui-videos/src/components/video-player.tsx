type Source = {
  src: string;
  type: "video/mp4";
};

interface VideoPlayerProps {
  sources: Source[];
}

export const VideoPlayer = ({ sources }: VideoPlayerProps) => {
  return (
    <video className="w-full" controls>
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      Your browser does not support HTML5 video.
    </video>
  );
};
