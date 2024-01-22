import React from "react";

type Source = {
  src: string;
  type: "audio/mpeg";
};

interface AudioPlayerProps {
  sources: Source[];
}

export const AudioPlayer = ({ sources }: AudioPlayerProps) => {
  return (
    <audio className="w-full" controls loop>
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      Your browser does not support the audio element.
    </audio>
  );
};
