"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface AudioProps {
  src: string;
  titulo?: string;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function Audio({ src, titulo }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (audio.duration && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      updateDuration();
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplaythrough", updateDuration);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    // Check if duration is already available
    updateDuration();

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplaythrough", updateDuration);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const bar = progressRef.current;
      if (!audio || !bar || !duration) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * duration;
    },
    [duration]
  );

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <figure className="my-8 flex w-full flex-col items-center gap-3">
          <div
            className="w-full overflow-hidden rounded-2xl bg-white p-5 sm:p-6"
            style={{
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
              border: "1px solid #E2E8F0",
            }}
          >
            <audio ref={audioRef} src={src} preload="metadata" />

            {titulo && (
              <p className="mb-4 text-center font-inter text-[14px] font-medium text-[#64748B]">
                {titulo}
              </p>
            )}

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Play/Pause button */}
              <button
                onClick={togglePlay}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-white transition-all hover:bg-[#2563EB] hover:shadow-lg"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <rect x="1" y="1" width="4" height="14" rx="1" fill="currentColor" />
                    <rect x="9" y="1" width="4" height="14" rx="1" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M2 1.5V14.5L13 8L2 1.5Z" fill="currentColor" />
                  </svg>
                )}
              </button>

              {/* Time current */}
              <span className="min-w-[36px] text-right font-mono text-[13px] text-[#64748B]">
                {formatTime(currentTime)}
              </span>

              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="group relative flex h-8 flex-1 cursor-pointer items-center"
              >
                <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#E2E8F0]">
                  <div
                    className="h-full rounded-full bg-[#3B82F6] transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Thumb */}
                <div
                  className="absolute h-3.5 w-3.5 rounded-full bg-[#3B82F6] shadow-md opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ left: `calc(${progress}% - 7px)` }}
                />
              </div>

              {/* Time total */}
              <span className="min-w-[36px] font-mono text-[13px] text-[#64748B]">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
