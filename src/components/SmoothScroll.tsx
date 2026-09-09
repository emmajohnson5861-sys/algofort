"use client";

import React from "react";

/**
 * SmoothScroll wrapper — Lenis is now initialized by algofort_script.js
 * (which guards against double-init with window.__lenisInstance).
 * This component is kept as a simple passthrough to avoid refactoring
 * the layout tree, but no longer creates its own Lenis instance.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
