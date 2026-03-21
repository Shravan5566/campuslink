import React from "react";

export function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-60${className ? ` ${className}` : ""}`}
      style={{ perspective: "200px" }}
    >
      {/* Grid plane */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotateX(${angle}deg)`,
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
            width: "600vw",
            height: "300vh",
            marginLeft: "-50%",
            transformOrigin: "100% 0 0",
            animation: "retroGridScroll 15s linear infinite",
          }}
        />
      </div>

      {/* Fade gradient — blends the grid into the page background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #000 10%, transparent 90%)",
        }}
      />
    </div>
  );
}
