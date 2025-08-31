import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaChevronUp, FaChevronDown } from "react-icons/fa";

const songsList = [
  { src: "/roses.mp3", title: "Roses", artist: "Chainsmokers" },
  { src: "/better.mp3", title: "I Like Me Better", artist: "Lauv" },
  { src: "/gow.mp3", title: "God of War Holding On", artist: "Various Artists" }
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Load first song
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = songsList[0].src;
    setCurrentSongIndex(0);
  }, []);

  // Update time and duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
    };
  }, [isDragging]);

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

  // Next / Previous
  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songsList.length;
    setCurrentSongIndex(nextIndex);
    const audio = audioRef.current;
    audio.src = songsList[nextIndex].src;
    audio.play();
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handlePrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songsList.length) % songsList.length;
    setCurrentSongIndex(prevIndex);
    const audio = audioRef.current;
    audio.src = songsList[prevIndex].src;
    audio.play();
    setIsPlaying(true);
    setCurrentTime(0);
  };

  // Slider
  const handleSliderChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  const handleSliderMouseDown = () => setIsDragging(true);
  const handleSliderMouseUp = () => setIsDragging(false);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Equalizer
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const analyser = analyserRef.current;
    if (!analyser || !canvas || !ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barSpacing = 2;
    const marginX = 5;
    const availableWidth = canvas.width - 2 * marginX;
    const barWidth = (availableWidth - (bufferLength - 1) * barSpacing) / bufferLength;

    let animationId;
    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let x = marginX;
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

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center justify-center w-12 h-12 rounded-full
        bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400
        text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
      >
        {isVisible ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      {/* Player */}
      <div className={`flex flex-col items-end space-y-3 transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16 pointer-events-none"}`}>

        {/* Song Info */}
        <div className="w-64 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 text-center mb-2">
          <h3 className="text-white font-semibold text-sm truncate">{songsList[currentSongIndex].title}</h3>
          <p className="text-white/70 text-xs truncate">{songsList[currentSongIndex].artist}</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center space-y-3 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/20">
          <div className="flex space-x-4">
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

          {/* Slider below buttons */}
          <div className="w-full mt-2">
            <div className="flex items-center justify-between text-white/80 text-xs mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="relative w-full h-2 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 transition-all duration-150"
                style={{ width: `${progressPercentage}%` }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={progressPercentage}
                onChange={handleSliderChange}
                onMouseDown={handleSliderMouseDown}
                onMouseUp={handleSliderMouseUp}
                onTouchStart={handleSliderMouseDown}
                onTouchEnd={handleSliderMouseUp}
                className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Equalizer */}
        {isPlaying && (
          <canvas
            ref={canvasRef}
            width={220}
            height={70}
            className="rounded-xl shadow-2xl bg-black/70 mt-2"
          />
        )}
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayerVisualizer;
