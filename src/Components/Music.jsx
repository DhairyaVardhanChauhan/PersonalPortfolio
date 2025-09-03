import { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const songsList = [
  { src: "/roses.mp3", title: "Roses", artist: "Chainsmokers" },
  { src: "/feeling.mp3", title: "This Feeling", artist: "Chainsmokers" },
  { src: "/riptide.mp3", title: "Riptide", artist: "Chainsmokers" },
  { src: "/badLiar.mp3", title: "Bad Liar", artist: "Imagine Dragons" },
  { src: "/better.mp3", title: "I Like Me Better", artist: "Lauv" },
  { src: "/gow.mp3", title: "God of War Holding On", artist: "Various Artists" },
];

// Enhanced Heart Animation Component with improved visuals
const HeartAnimation = ({ isBroken, isPlaying }) => {
  const [beatPhase, setBeatPhase] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);

  // Create rhythmic beating effect when playing
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setBeatPhase(prev => (prev + 1) % 4);
      setGlowIntensity(prev => (prev + 1) % 3);
    }, 120); // Slightly faster rhythm

    return () => clearInterval(interval);
  }, [isPlaying]);

  const HeartShape = ({ className, gradient, delay = 0, sparkles = false }) => (
    <div className="relative">
      <div 
        className={`w-20 h-20 relative transition-all duration-200 ${
          isPlaying ? `transform ${
            (beatPhase + delay) % 4 === 0 || (beatPhase + delay) % 4 === 2 ? 'scale-125' : 'scale-110'
          }` : 'scale-100'
        } ${className}`}
        style={{
          filter: `drop-shadow(0 0 ${20 + glowIntensity * 8}px rgba(255, 20, 147, ${0.7 + glowIntensity * 0.2}))`
        }}
      >
        {/* Heart shape using CSS */}
        <div className="absolute inset-0 transform rotate-45">
          <div 
            className={`absolute w-14 h-14 rounded-full -left-7 top-0 ${gradient}`}
            style={{
              boxShadow: `0 0 ${15 + glowIntensity * 5}px rgba(255, 105, 180, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)`
            }}
          />
          <div 
            className={`absolute w-14 h-14 rounded-full left-0 -top-7 ${gradient}`}
            style={{
              boxShadow: `0 0 ${15 + glowIntensity * 5}px rgba(255, 105, 180, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)`
            }}
          />
        </div>
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 transform rotate-45">
          <div className="absolute w-10 h-10 rounded-full -left-5 top-2 bg-white/20 blur-sm" />
          <div className="absolute w-10 h-10 rounded-full left-2 -top-5 bg-white/20 blur-sm" />
        </div>

        {/* Pulsing center light */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-4 h-4 rounded-full bg-white transition-all duration-200 ${
            isPlaying && ((beatPhase + delay) % 4 === 0) ? 'opacity-90 scale-150' : 'opacity-40 scale-100'
          }`} />
        </div>
      </div>

      {/* Enhanced sparkles */}
      {sparkles && isPlaying && (
        <>
          <div className="absolute -top-3 -right-3">
            <div className={`w-3 h-3 bg-yellow-200 rounded-full transition-all duration-300 ${
              (beatPhase + delay) % 2 === 0 ? 'opacity-100 scale-100 animate-ping' : 'opacity-0 scale-50'
            }`} />
          </div>
          <div className="absolute -bottom-2 -left-3">
            <div className={`w-2 h-2 bg-pink-200 rounded-full transition-all duration-300 ${
              (beatPhase + delay) % 3 === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} />
          </div>
          <div className="absolute top-2 -left-4">
            <div className={`w-2 h-2 bg-purple-200 rounded-full transition-all duration-300 ${
              (beatPhase + delay) % 3 === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} />
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex space-x-6 justify-center items-center mt-6 mb-4">
      {!isBroken ? (
        <>
          {/* First Enhanced Heart */}
          <HeartShape
            gradient="bg-gradient-to-br from-pink-400 via-red-400 to-purple-500"
            sparkles={true}
          />

          {/* Second Enhanced Heart */}
          <HeartShape
            gradient="bg-gradient-to-br from-purple-400 via-pink-400 to-red-500"
            delay={2}
            sparkles={true}
          />
        </>
      ) : (
        // Enhanced broken hearts with more dramatic effects
        <div className="flex space-x-4 relative">
          {/* First broken heart piece */}
          <div className="relative">
            <div className="w-20 h-20 relative transform -rotate-12 animate-bounce"
                 style={{
                   filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8))',
                   animationDuration: '2s'
                 }}>
              <div className="absolute inset-0 transform rotate-45">
                <div className="absolute w-14 h-14 rounded-full -left-7 top-0 
                               bg-gradient-to-br from-red-800 via-red-700 to-red-900 
                               opacity-90 shadow-lg shadow-red-800/60"
                     style={{
                       clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 80%)'
                     }} />
                <div className="absolute w-14 h-14 rounded-full left-0 -top-7 
                               bg-gradient-to-br from-red-800 via-red-700 to-red-900 
                               opacity-90 shadow-lg shadow-red-800/60"
                     style={{
                       clipPath: 'polygon(30% 0, 100% 0, 100% 80%, 50% 100%)'
                     }} />
              </div>
              
              {/* Jagged crack lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-1 bg-black/80 transform rotate-45 shadow-md" />
                <div className="w-10 h-1 bg-black/60 transform -rotate-45 absolute shadow-md" />
                <div className="w-8 h-1 bg-black/40 transform rotate-12 absolute shadow-md" />
              </div>
            </div>
            
            {/* Falling heart pieces */}
            <div className="absolute top-12 left-3 w-3 h-3 bg-red-600 rounded animate-bounce opacity-80" 
                 style={{ animationDelay: '0.5s', animationDuration: '1.5s' }} />
            <div className="absolute top-8 right-2 w-2 h-2 bg-red-700 rounded animate-bounce opacity-60" 
                 style={{ animationDelay: '1s', animationDuration: '2s' }} />
          </div>

          {/* Second broken heart piece */}
          <div className="relative">
            <div className="w-20 h-20 relative transform rotate-12 animate-bounce"
                 style={{
                   filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8))',
                   animationDelay: '0.3s',
                   animationDuration: '2s'
                 }}>
              <div className="absolute inset-0 transform rotate-45">
                <div className="absolute w-14 h-14 rounded-full -left-7 top-0 
                               bg-gradient-to-br from-red-900 via-red-800 to-red-700 
                               opacity-90 shadow-lg shadow-red-800/60"
                     style={{
                       clipPath: 'polygon(50% 0, 100% 20%, 100% 100%, 0 100%)'
                     }} />
                <div className="absolute w-14 h-14 rounded-full left-0 -top-7 
                               bg-gradient-to-br from-red-900 via-red-800 to-red-700 
                               opacity-90 shadow-lg shadow-red-800/60"
                     style={{
                       clipPath: 'polygon(0 20%, 50% 0, 100% 100%, 0 100%)'
                     }} />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-1 bg-black/80 transform -rotate-45 shadow-md" />
                <div className="w-10 h-1 bg-black/60 transform rotate-45 absolute shadow-md" />
                <div className="w-6 h-1 bg-black/40 transform -rotate-12 absolute shadow-md" />
              </div>
            </div>
            
            <div className="absolute top-12 right-3 w-3 h-3 bg-red-600 rounded animate-bounce opacity-80" 
                 style={{ animationDelay: '0.8s', animationDuration: '1.8s' }} />
            <div className="absolute top-10 left-2 w-2 h-2 bg-red-700 rounded animate-bounce opacity-60" 
                 style={{ animationDelay: '1.2s', animationDuration: '1.6s' }} />
          </div>
          
          {/* Enhanced floating debris */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-red-500 rounded animate-ping opacity-70" />
          </div>
          <div className="absolute top-16 left-1/4">
            <div className="w-2 h-2 bg-red-400 rounded animate-pulse opacity-60" />
          </div>
          <div className="absolute top-16 right-1/4">
            <div className="w-2 h-2 bg-red-400 rounded animate-pulse opacity-60" 
                 style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-20 left-1/3">
            <div className="w-1 h-1 bg-red-300 rounded animate-bounce opacity-50" 
                 style={{ animationDelay: '0.7s' }} />
          </div>
        </div>
      )}
    </div>
  );
};

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

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
    };
  }, [isDragging]);

  // Play / Pause
  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current =
        new (window.AudioContext || window.webkitAudioContext)();
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
    const prevIndex =
      (currentSongIndex - 1 + songsList.length) % songsList.length;
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
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
    const barWidth =
      (availableWidth - (bufferLength - 1) * barSpacing) / bufferLength;

    let animationId;
    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let x = marginX;
      const maxBarHeight = canvas.height - 5;
      const maxValue = Math.max(...dataArray) || 1;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / maxValue) * maxBarHeight;
        const gradient = ctx.createLinearGradient(
          0,
          canvas.height - barHeight,
          0,
          canvas.height
        );
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
      <div
        className={`flex flex-col items-end space-y-3 transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-16 pointer-events-none"
        }`}
      >
        {/* Song Info */}
        <div className="w-64 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 text-center mb-2">
          <h3 className="text-black font-semibold text-sm truncate">
            {songsList[currentSongIndex].title}
          </h3>
          <p className="text-black/70 text-xs truncate">
            {songsList[currentSongIndex].artist}
          </p>
        </div>

        {/* Enhanced Hearts for "This Feeling" */}
        {songsList[currentSongIndex].title === "This Feeling" && (
          <div className="w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden">
            <HeartAnimation 
              isBroken={currentTime >= 174.8} 
              isPlaying={isPlaying}
            />  
          </div>
        )}

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
              {isPlaying ? (
                <FaPause className="text-white w-6 h-6" />
              ) : (
                <FaPlay className="text-white w-6 h-6" />
              )}
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

          {/* Enhanced Slider with red hearts */}
          <div className="w-full mt-2">
            <div className="flex items-center justify-between text-white/80 text-xs mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="relative w-full h-3 rounded-full bg-white/20 overflow-visible">
              {/* Progress bar background */}
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 transition-all duration-150 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
              
              {/* Red hearts at timeline positions for "This Feeling" */}
              {songsList[currentSongIndex].title === "This Feeling" && duration > 0 && (
                <div className="absolute top-0 left-0 w-full h-3 pointer-events-none">
                  {/* Heart at 174.8 seconds (heartbreak moment) */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
                    style={{ left: `${(174.8 / duration) * 100}%` }}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 transform rotate-45 bg-gradient-to-br from-red-500 to-red-700 shadow-lg animate-pulse">
                        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 -left-3 top-0" />
                        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 left-0 -top-3" />
                      </div>
                      {/* Crack effect when reached */}
                      {currentTime >= 174.8 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-black/80 transform rotate-45" />
                          <div className="w-3 h-0.5 bg-black/60 transform -rotate-45 absolute" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Additional smaller hearts at other emotional moments */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${(60 / duration) * 100}%` }}
                  >
                    <div className="w-3 h-3 transform rotate-45 bg-gradient-to-br from-pink-400 to-red-400 opacity-70">
                      <div className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-red-400 -left-1.5 top-0" />
                      <div className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-red-400 left-0 -top-1.5" />
                    </div>
                  </div>
                  
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${(120 / duration) * 100}%` }}
                  >
                    <div className="w-3 h-3 transform rotate-45 bg-gradient-to-br from-pink-400 to-red-400 opacity-70">
                      <div className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-red-400 -left-1.5 top-0" />
                      <div className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-red-400 left-0 -top-1.5" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Slider input */}
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
                className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer z-20"
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