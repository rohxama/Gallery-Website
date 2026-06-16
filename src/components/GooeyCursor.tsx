"use client";

import { useEffect, useRef } from "react";

const TAIL_LENGTH = 40;

export function GooeyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    const cursorHistory = Array.from({ length: TAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
    }));
    let cursorCircles: HTMLElement[] = [];

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function onClick() {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        cursorHistory[i].x += Math.random() * 100 - 50;
        cursorHistory[i].y += Math.random() * 100 - 50;
      }
    }

    function initCursor() {
      if (!cursor) return;

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const div = document.createElement("div");
        div.classList.add("cursor-circle");

        div.style.position = "fixed";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.borderRadius = "50%";
        div.style.background = "white";
        div.style.pointerEvents = "none";

        cursor.appendChild(div);
      }

      cursorCircles = Array.from(cursor.querySelectorAll(".cursor-circle"));
    }

    function updateCursor() {
      if (!cursorCircles.length) return requestAnimationFrame(updateCursor);

      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory[i];
        const next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        const el = cursorCircles[i];
        if (!el) continue;

        el.style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
      }

      requestAnimationFrame(updateCursor);
    }

    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("click", onClick, false);
    initCursor();
    const frameId = requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frameId);
      cursor.innerHTML = "";
    };
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="goo"
        version="1.1"
        width="100%"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div ref={cursorRef} id="cursor" />
    </>
  );
}
