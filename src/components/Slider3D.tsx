"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Slider3DProps {
  slides: string[];
}

export function Slider3D({ slides: initialSlides }: Slider3DProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [slideCount, setSlideCount] = useState(initialSlides.length);
  const [perspective, setPerspective] = useState(1000);
  const [backfaceVisible, setBackfaceVisible] = useState(true);
  const [overflowVisible, setOverflowVisible] = useState(true);

  const step = 360 / slideCount;

  // Apply rotation to wrap
  const applyRotation = useCallback(
    (angle: number) => {
      if (!wrapRef.current || !sliderRef.current) return;
      const width = sliderRef.current.offsetWidth;
      const myR = width / (2 * Math.tan(Math.PI / slideCount));
      wrapRef.current.style.transform = `translateZ(${-myR}px) rotateY(${angle}deg)`;
    },
    [slideCount]
  );

  // createSlider3d - position all slides in 3D cylinder
  const createSlider3d = useCallback(() => {
    if (!sliderRef.current || !wrapRef.current) return;

    const width = sliderRef.current.offsetWidth;
    const myR = width / (2 * Math.tan(Math.PI / slideCount));
    const children = wrapRef.current.children;

    for (let i = 0; i < slideCount; i++) {
      const rad = (i * step * Math.PI) / 180;
      const el = children[i] as HTMLElement;
      if (!el) continue;

      el.style.transform = `translate3d(${myR * Math.sin(rad)}px, 0, ${myR * Math.cos(rad)}px) rotateY(${i * step}deg)`;
    }

    wrapRef.current.style.transform = `translateZ(${-myR}px) rotateY(${angleRef.current}deg)`;
  }, [slideCount, step]);

  // Start auto-rotate
  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      angleRef.current += step;
      applyRotation(angleRef.current);
    }, 2500);
  }, [step, applyRotation]);

  // Stop auto-rotate
  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Initialize, handle resize, and auto-rotate
  useEffect(() => {
    createSlider3d();
    startAutoRotate();

    const handleResize = () => createSlider3d();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAutoRotate();
    };
  }, [createSlider3d, startAutoRotate, stopAutoRotate]);

  // Drag handlers
  const getClientX = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) return e.touches[0].clientX;
    return e.clientX;
  };

  const handleDragStart = useCallback(
    (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      startX.current = getClientX(e);
      startAngle.current = angleRef.current;
      stopAutoRotate();

      if (wrapRef.current) {
        wrapRef.current.style.transition = "none";
      }
    },
    [stopAutoRotate]
  );

  const handleDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || !sliderRef.current) return;

      const currentX = getClientX(e);
      const deltaX = currentX - startX.current;
      const width = sliderRef.current.offsetWidth;
      const sensitivity = 0.3;
      const newAngle = startAngle.current + deltaX * sensitivity;

      angleRef.current = newAngle;
      applyRotation(newAngle);
    },
    [applyRotation]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (wrapRef.current) {
      wrapRef.current.style.transition = "transform 1.5s ease-in-out";
    }

    // Snap to nearest step
    const snapped = Math.round(angleRef.current / step) * step;
    angleRef.current = snapped;
    applyRotation(snapped);

    startAutoRotate();
  }, [step, applyRotation, startAutoRotate]);

  // Attach drag listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => handleDragStart(e);
    const onMouseMove = (e: MouseEvent) => handleDragMove(e);
    const onMouseUp = () => handleDragEnd();
    const onTouchStart = (e: TouchEvent) => handleDragStart(e);
    const onTouchMove = (e: TouchEvent) => handleDragMove(e);
    const onTouchEnd = () => handleDragEnd();

    slider.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleDragStart, handleDragMove, handleDragEnd]);

  // Update backface-visibility on all slides
  useEffect(() => {
    if (!wrapRef.current) return;
    const children = wrapRef.current.children;
    const value = backfaceVisible ? "visible" : "hidden";

    for (let i = 0; i < children.length; i++) {
      (children[i] as HTMLElement).style.backfaceVisibility = value;
    }
  }, [backfaceVisible]);

  // Update overflow
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.overflow = overflowVisible ? "visible" : "hidden";
    }
  }, [overflowVisible]);

  // Update perspective
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.perspective = `${perspective}px`;
    }
  }, [perspective]);

  // Remove slide
  const removeSlide = useCallback(() => {
    if (slideCount <= 4) return;
    setSlideCount((prev) => prev - 1);
  }, [slideCount]);

  // Add slide
  const addSlide = useCallback(() => {
    if (slideCount >= initialSlides.length) return;
    setSlideCount((prev) => prev + 1);
  }, [slideCount, initialSlides.length]);

  return (
    <>
      {/* Main 3D Slider - centered absolutely */}
      <div
        ref={sliderRef}
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          top: 0,
          bottom: "25vmin",
          right: 0,
          left: 0,
          margin: "auto",
          userSelect: "none",
          perspectiveOrigin: "50% 10%",
          transition: "perspective-origin .5s, perspective .5s",
          perspective: `${perspective}px`,
          width: "50vmin",
          height: "50vmin",
        }}
      >
        {/* 3D Wrap */}
        <div
          ref={wrapRef}
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: "transform 1.5s ease-in-out",
          }}
        >
          {initialSlides.slice(0, slideCount).map((slide, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                boxSizing: "border-box",
                width: "95%",
                left: "2.5%",
                top: "30%",
                height: "80%",
                backfaceVisibility: backfaceVisible ? "hidden" : "visible",
                padding: "5vmin",
                fontSize: "calc(15vmin + 15px)",
                color: "rgba(250,250,250,.35)",
                cursor: "default",
              }}
            >
              <img
                src={slide}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls Panel */}
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto user-select-none"
        style={{
          minHeight: "100px",
          width: "370px",
          height: "20vmin",
        }}
      >
      </div>
    </>
  );
}
