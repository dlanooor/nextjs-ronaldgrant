"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ParsedStat = {
  target: number;
  unit: string;
  hasPlus: boolean;
  decimals: number;
};

type AnimatedStatValueProps = {
  value: string;
};

function parseStatValue(value: string): ParsedStat | null {
  const match = value.trim().match(/^([\d,.]+)\s*([a-zA-Z]*)\s*(\+?)$/);

  if (!match) {
    return null;
  }

  const [, numberPart, unitPart, plusPart] = match;
  const normalizedNumber = Number(numberPart.replace(/,/g, ""));

  if (!Number.isFinite(normalizedNumber)) {
    return null;
  }

  const unit = unitPart.toLowerCase();
  const multiplier = unit === "k" ? 1000 : unit === "m" ? 1000000 : 1;

  return {
    target: normalizedNumber * multiplier,
    unit,
    hasPlus: plusPart === "+",
    decimals: numberPart.includes(".") ? numberPart.split(".")[1].length : 0,
  };
}

function formatStatValue(amount: number, stat: ParsedStat) {
  const plus = stat.hasPlus ? "+" : "";

  if (stat.unit === "k" && amount >= 1000) {
    return `${(amount / 1000).toFixed(stat.decimals).replace(/\.0$/, "")}k${plus}`;
  }

  if (stat.unit === "m" && amount >= 1000000) {
    return `${(amount / 1000000)
      .toFixed(stat.decimals)
      .replace(/\.0$/, "")}m${plus}`;
  }

  return `${Math.round(amount).toLocaleString("en-US")}${plus}`;
}

export function AnimatedStatValue({ value }: AnimatedStatValueProps) {
  const stat = useMemo(() => parseStatValue(value), [value]);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const frameRef = useRef<number | null>(null);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!stat || hasAnimated.current) {
      return;
    }

    const animate = () => {
      hasAnimated.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setAmount(stat.target);
        return;
      }

      const duration = stat.target <= 10 ? 900 : 1400;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setAmount(stat.target * eased);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setAmount(stat.target);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const element = elementRef.current;

    if (!element || !("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [stat]);

  if (!stat) {
    return value;
  }

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      <span aria-hidden="true">{formatStatValue(amount, stat)}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
