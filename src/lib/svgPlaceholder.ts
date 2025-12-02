// Utility to generate small inline SVG data URIs so we avoid remote image fetches.
export function svgPlaceholder(text: string, opts?: { width?: number; height?: number }) {
  const width = opts?.width ?? 1200;
  const height = opts?.height ?? 600;
  const safeText = text.replace(/[^\w\s-]/g, "").slice(0, 60);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#0b1220'/>
        <stop offset='50%' stop-color='#0f172a'/>
        <stop offset='100%' stop-color='#111827'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='50%' font-family='Arial, sans-serif' font-size='64' fill='#fbbf24' text-anchor='middle' alignment-baseline='middle'>${safeText || "Travel"}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
