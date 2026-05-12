"use client";

import { useEffect, useMemo, useState } from "react";

type TypingRoleTextProps = {
  words: string[];
  className?: string;
};

const typingDelay = 72;
const deletingDelay = 34;
const wordHoldDelay = 1500;
const nextWordDelay = 220;

export function TypingRoleText({ words, className = "" }: TypingRoleTextProps) {
  const roles = useMemo(
    () => words.map((word) => word.trim()).filter(Boolean),
    [words],
  );
  const fallbackRole = roles[0] ?? "Quality Assurance Engineer";
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(
    fallbackRole.length,
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const shouldAnimate = roles.length > 1 && !prefersReducedMotion;
  const currentRole = shouldAnimate
    ? (roles[wordIndex] ?? fallbackRole)
    : fallbackRole;
  const displayedRole = shouldAnimate
    ? currentRole.slice(0, visibleCharacters)
    : fallbackRole;
  const longestRole = roles.reduce(
    (longest, role) => (role.length > longest.length ? role : longest),
    fallbackRole,
  );

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    let delay = isDeleting ? deletingDelay : typingDelay;

    if (!isDeleting && visibleCharacters === currentRole.length) {
      delay = wordHoldDelay;
    }

    if (isDeleting && visibleCharacters === 0) {
      delay = nextWordDelay;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && visibleCharacters === currentRole.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && visibleCharacters === 0) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % roles.length);
        return;
      }

      setVisibleCharacters((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [
    currentRole,
    fallbackRole,
    isDeleting,
    shouldAnimate,
    roles.length,
    visibleCharacters,
  ]);

  return (
    <span
      aria-label={currentRole}
      className={`inline-block max-w-full align-baseline ${className}`}
      style={{ minWidth: `min(${longestRole.length + 2}ch, 100%)` }}
    >
      <span
        aria-hidden="true"
        className="whitespace-normal pr-4 sm:whitespace-nowrap"
      >
        {displayedRole}
        <span className="ml-1 inline-block h-[0.88em] w-[2px] translate-y-[0.1em] animate-pulse bg-pink-700 align-baseline dark:bg-[#f0b7cf]" />
      </span>
    </span>
  );
}
