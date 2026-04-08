"use client";

import { type CSSProperties, type ReactNode, useMemo, useRef } from "react";

type SceneStyle = CSSProperties & {
  "--mx"?: string;
  "--my"?: string;
  "--rx"?: string;
  "--ry"?: string;
};

export function InteractiveScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const initialStyle = useMemo<SceneStyle>(
    () => ({
      "--mx": "50%",
      "--my": "40%",
      "--rx": "0",
      "--ry": "0",
    }),
    [],
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const nx = ((x / rect.width) * 2 - 1) * 8;
    const ny = ((y / rect.height) * 2 - 1) * 8;

    node.style.setProperty("--mx", `${px.toFixed(2)}%`);
    node.style.setProperty("--my", `${py.toFixed(2)}%`);
    node.style.setProperty("--rx", nx.toFixed(2));
    node.style.setProperty("--ry", ny.toFixed(2));
  }

  return (
    <div ref={ref} style={initialStyle} onPointerMove={handlePointerMove} className="interactive-scene relative">
      <div aria-hidden className="pointer-glow pointer-events-none absolute inset-0" />
      {children}
    </div>
  );
}
