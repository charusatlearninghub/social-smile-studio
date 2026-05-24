import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CompareSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  compareLabel?: string;
  className?: string;
};

export function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  beforeLabel = "Before",
  afterLabel = "After",
  compareLabel = "Compare before and after",
  className,
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl bg-ink/5 touch-none",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label={compareLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      <img
        src={beforeSrc}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      />
      <div
        className="absolute top-1/2 z-20 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-surface shadow-glow transition-transform group-active:scale-95"
        style={{ left: `${position}%` }}
      >
        <span className="flex gap-0.5 text-ink">
          <span className="block h-3 w-0.5 rounded-full bg-current opacity-60" />
          <span className="block h-3 w-0.5 rounded-full bg-current" />
        </span>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background backdrop-blur">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
        {afterLabel}
      </span>
    </div>
  );
}
