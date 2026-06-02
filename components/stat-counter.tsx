"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  count: number;
  decimals?: number;
  suffix: string;
  label: string;
  duration?: number;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const numStyle: React.CSSProperties = {
  fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
  fontWeight: 300,
  letterSpacing: "-0.01em",
  lineHeight: 1,
};

const suffixStyle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "0.8rem",
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: "0.01em",
};

export function StatCounter({
  count,
  decimals = 0,
  suffix,
  label,
  duration = 1800,
}: StatCounterProps) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(count);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCurrent(easeOutQuart(progress) * count);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [started, count, duration]);

  const formatted =
    decimals > 0
      ? current.toFixed(decimals).replace(".", ",")
      : Math.floor(current).toLocaleString("ru-RU").replace(/\s/g, " ");

  return (
    <div ref={ref} className="flex flex-col justify-between gap-3 bg-card px-6 py-7">
      {/* Number row: big Cormorant digit + small Manrope suffix */}
      <div className="flex items-baseline gap-2">
        <span
          className="font-num text-[var(--gold)]"
          style={numStyle}
          aria-label={`${formatted}${suffix}`}
        >
          {formatted}
        </span>
        <span className="text-muted-foreground" style={suffixStyle}>
          {suffix}
        </span>
      </div>
      <p className="text-xs leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}
