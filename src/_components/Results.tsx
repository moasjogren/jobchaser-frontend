"use client";

import { useEffect } from "react";

import { animate, motion, useMotionValue, useTransform } from "motion/react";

interface ResultProps {
  number: number;
}

export default function Result({ number }: ResultProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `Results: ${Math.round(latest)}`);

  useEffect(() => {
    const controls = animate(count, number, { duration: 1 });
    return () => controls.stop();
  }, [number, count]);

  return <motion.p className="results">{rounded}</motion.p>;
}
