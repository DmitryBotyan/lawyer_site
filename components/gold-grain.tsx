export function GoldGrain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ mixBlendMode: "screen", opacity: 0.32 }}
    >
      <filter id="gold-dust" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.62 0.78"
          numOctaves="6"
          seed="4"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          in="noise"
          type="matrix"
          values="0.82 0 0 0 0
                  0.68 0 0 0 0
                  0.39 0 0 0 0
                  0    0 0 1 0"
          result="goldNoise"
        />
        <feComponentTransfer in="goldNoise">
          <feFuncR type="gamma" amplitude="1" exponent="3.8" offset="0" />
          <feFuncG type="gamma" amplitude="1" exponent="3.8" offset="0" />
          <feFuncB type="gamma" amplitude="1" exponent="3.8" offset="0" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#gold-dust)" />
    </svg>
  );
}
