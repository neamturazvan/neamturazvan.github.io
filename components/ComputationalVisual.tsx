type Props = { kind?: "network" | "pixels" | "tree"; hero?: boolean };
export function ComputationalVisual({ kind = "network", hero = false }: Props) {
  if (kind === "pixels")
    return (
      <div className="pixel-art" aria-hidden="true">
        {Array.from({ length: 144 }, (_, i) => {
          const x = i % 12;
          const y = Math.floor(i / 12);
          const v = Math.round(
            40 + (Math.sin(x * 0.65 + y * 0.3) * Math.cos(y * 0.5) + 1) * 88,
          );
          return (
            <span key={i} style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
          );
        })}
      </div>
    );
  if (kind === "tree")
    return (
      <svg
        className="tree-art"
        viewBox="0 0 560 260"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor">
          <path d="M280 35 170 108 92 205M170 108l72 97M280 35l110 73-65 97M390 108l78 97" />
          {[
            [280, 35],
            [170, 108],
            [390, 108],
            [92, 205],
            [242, 205],
            [325, 205],
            [468, 205],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i < 3 ? 9 : 6}
              fill="var(--surface)"
            />
          ))}
        </g>
        <g fill="currentColor" fontFamily="monospace" fontSize="13">
          <text x="210" y="64">
            0
          </text>
          <text x="344" y="64">
            1
          </text>
          <text x="117" y="151">
            0
          </text>
          <text x="212" y="151">
            1
          </text>
          <text x="344" y="151">
            0
          </text>
          <text x="441" y="151">
            1
          </text>
        </g>
      </svg>
    );
  const layers = [3, 5, 6, 5, 3];
  const nodes = layers.flatMap((count, l) =>
    Array.from({ length: count }, (_, n) => ({
      x: 65 + l * 105,
      y: 170 + (n - (count - 1) / 2) * 43,
      l,
      n,
    })),
  );
  return (
    <svg
      className={`network-art ${hero ? "hero-network" : ""}`}
      viewBox="0 0 550 340"
      fill="none"
      aria-hidden="true"
    >
      <g className="network-grid" stroke="currentColor" opacity=".16">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M${i * 50} 0v340 M0 ${i * 40}h550`} />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth=".75">
        {nodes.flatMap((a, i) =>
          nodes
            .filter((b) => b.l === a.l + 1)
            .map((b, j) => (
              <path
                className={(i + j) % 9 === 0 ? "signal-line" : ""}
                key={`${i}-${j}`}
                opacity={(i + j) % 9 === 0 ? 0.65 : 0.16}
                d={`M${a.x} ${a.y}L${b.x} ${b.y}`}
              />
            )),
        )}
      </g>
      {nodes.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="5"
            fill="var(--background)"
            stroke="currentColor"
            opacity=".8"
          />
          {i % 6 === 0 && (
            <circle
              className="signal-node"
              cx={p.x}
              cy={p.y}
              r="2"
              fill="currentColor"
            />
          )}
        </g>
      ))}
      <g fill="currentColor" opacity=".6" fontFamily="monospace" fontSize="12">
        <text x="50" y="323">
          x
        </text>
        <text x="255" y="323">
          f(x; θ)
        </text>
        <text x="477" y="323">
          ŷ
        </text>
      </g>
    </svg>
  );
}
