"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionSection({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.section id={id} className={className} initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.section>;
}
