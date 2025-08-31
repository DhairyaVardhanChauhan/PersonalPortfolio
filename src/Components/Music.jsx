import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayerButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Floating circular audio button */}
      <button
        onClick={handleToggle}
className="fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full 
bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 
shadow-lg border-2 border-yellow-500 hover:scale-110 transition-transform"

      >
        {isPlaying ? <FaPause className="text-black w-4 h-4" /> : <FaPlay className="text-black w-4 h-4" />}
      </button>

      {/* Audio element */}
      <audio ref={audioRef} src="/gow.mp3" />
    </>
  );
};

export default AudioPlayerButton;
