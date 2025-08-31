import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaChevronUp, FaChevronDown } from "react-icons/fa";

const songsList = [
  "/roses.mp3",
  "/better.mp3",
  "/gow.mp3",
];

const AudioPlayerVisualizer = () => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Load first song
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = songsList[0];
    setCurrentSongIndex(0);
  }, []);

  // Play / Pause
  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioCtxRef.current.createAnalyser();
      sourceRef.current = audioCtxRef.current.createMediaElementSource(audio);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioCtxRef.current.destination);
      analyserRef.current.fftSize = 128;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Next song
  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songsList.length;
    setCurrentSongIndex(nextIndex);
    const audio = audioRef.current;
    audio.src = songsList[nextIndex];
    audio.play();
    setIsPlaying(true);
  };

  // Previous song
  const handlePrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songsList.length) % songsList.length;
    setCurrentSongIndex(prevIndex);
    const audio = audioRef.current;
    audio.src = songsList[prevIndex];
    audio.play();
    setIsPlaying(true);
  };

  // Draw equalizer
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const analyser = analyserRef.current;
    if (!analyser || !canvas || !ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barSpacing = 2;
    const availableWidth = canvas.width;
    const barWidth = (availableWidth - (bufferLength - 1) * barSpacing) / bufferLength;

    let animationId;

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Total width of bars + spacing
      const totalBarsWidth = bufferLength * barWidth + (bufferLength - 1) * barSpacing;
      // Starting X to center the bars
      let x = (canvas.width - totalBarsWidth) / 2;
      
      const maxBarHeight = canvas.height - 5;
      const maxValue = Math.max(...dataArray) || 1;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / maxValue) * maxBarHeight;

        const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
        gradient.addColorStop(0, "#ff6a00");
        gradient.addColorStop(0.5, "#ffcc00");
        gradient.addColorStop(1, "#00ffcc");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + barSpacing;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center justify-center w-12 h-12 rounded-full
        bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400
        text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
      >
        {isVisible ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      {/* Player */}
      <div
        className={`flex flex-col items-end space-y-3 transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16 pointer-events-none"}`}
      >
        <div className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/20">
          <button
            onClick={handlePrevSong}
            className="flex items-center justify-center w-12 h-12 rounded-full
            bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300
            shadow-lg hover:scale-110 transition-transform"
          >
            <FaBackward className="text-white w-4 h-4" />
          </button>

          <button
            onClick={handleToggle}
            className="flex items-center justify-center w-16 h-16 rounded-full
            bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300
            shadow-xl hover:scale-110 transition-transform"
          >
            {isPlaying ? <FaPause className="text-white w-6 h-6" /> : <FaPlay className="text-white w-6 h-6" />}
          </button>

          <button
            onClick={handleNextSong}
            className="flex items-center justify-center w-12 h-12 rounded-full
            bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300
            shadow-lg hover:scale-110 transition-transform"
          >
            <FaForward className="text-white w-4 h-4" />
          </button>
        </div>

        {/* Equalizer */}
        {isPlaying && (
          <canvas
            ref={canvasRef}
            width={220}
            height={70}
            className="rounded-xl shadow-2xl bg-black/70"
          />
        )}
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayerVisualizer;
