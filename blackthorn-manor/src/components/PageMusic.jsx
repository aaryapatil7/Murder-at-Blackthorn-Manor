import { useEffect, useRef } from "react";

export default function PageMusic({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;

    const playAudio = () => {
      audioRef.current
        .play()
        .catch(() => {});

      document.removeEventListener(
        "click",
        playAudio
      );
    };

    document.addEventListener(
      "click",
      playAudio
    );

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      document.removeEventListener(
        "click",
        playAudio
      );
    };
  }, [src]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source
        src={src}
        type="audio/mpeg"
      />
    </audio>
  );
}