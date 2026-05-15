"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Speed multiplier. Positive numbers move the element in the opposite
   * direction of scroll (classic parallax), negative numbers move with scroll.
   * Typical values: 0.05 (subtle) to 0.4 (strong).
   */
  speed?: number;
  /** Optional rotation factor in degrees per pixel of scroll. */
  rotate?: number;
  /** Optional scale factor: element scales by `1 + scrollProgress * scale`. */
  scale?: number;
  className?: string;
  style?: CSSProperties;
  /** Aria-hidden by default since parallax wrappers are decorative. */
  ariaHidden?: boolean;
};

export function Parallax({
  children,
  speed = 0.15,
  rotate = 0,
  scale = 0,
  className = "",
  style,
  ariaHidden = true,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduce) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const translateY = -centerOffset * speed;
      const rotateDeg = centerOffset * rotate * 0.01;
      const scaleAmount = 1 + (centerOffset / viewportH) * scale;

      node.style.transform = `translate3d(0, ${translateY.toFixed(
        2
      )}px, 0) rotate(${rotateDeg.toFixed(3)}deg) scale(${scaleAmount.toFixed(
        4
      )})`;
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [speed, rotate, scale]);

  return (
    <div
      ref={ref}
      aria-hidden={ariaHidden}
      className={`parallax will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
