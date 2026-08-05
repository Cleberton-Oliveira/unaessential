"use client";

import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type ViewportVideoProps = {
  src: string;
  objectPosition?: string;
};

export function ViewportVideo({ src, objectPosition = "50% 50%" }: ViewportVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        setIsVisible(visible);
        if (visible) setHasEnteredViewport(true);
      },
      { threshold: [0, 0.2, 0.6] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && hasEnteredViewport && !prefersReducedMotion) {
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
  }, [hasEnteredViewport, isVisible, prefersReducedMotion]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#e9e5dc",
        overflow: "hidden",
      }}
    >
      <Box
        ref={videoRef}
        component="video"
        src={hasEnteredViewport ? src : undefined}
        muted
        loop
        playsInline
        preload={hasEnteredViewport ? "metadata" : "none"}
        aria-hidden="true"
        onCanPlay={() => {
          if (isVisible && !prefersReducedMotion) {
            void videoRef.current?.play().catch(() => undefined);
          }
        }}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          display: "block",
        }}
      />
    </Box>
  );
}
