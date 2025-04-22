import * as React from "react";

interface HistogramProps {
  data: { x: number; label: string }[];
  height?: number;
  width?: number;
  barColor?: string;
  barHoverColor?: string;
  animate?: boolean;
  string?: boolean;
}

export function Histogram({
  data,
  height = 300,
  width = 600,
  barColor = "#3b82f6",
  barHoverColor = "#2563eb",
  animate = true,
  string = false,
}: HistogramProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? "" : <></>;
  }

  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const maxCount = Math.max(...data.map((d) => d.x));
  const barWidth = chartWidth / data.length;

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding + chartHeight - (i * chartHeight) / 5;
    const count = Math.round((maxCount * i) / 5);
    svgContent += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />`;
    svgContent += `<text x="${padding - 5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#6b7280">${count}</text>`;
  }

  // Bars
  data.forEach((item, index) => {
    const barHeight = (item.x / maxCount) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + 1;
    const y = height - padding - barHeight;

    svgContent += `<rect 
      x="${x}" 
      y="${animate ? height - padding : y}" 
      width="${barWidth}" 
      height="${animate ? 0 : barHeight}" 
      fill="${barColor}"
      onmouseenter="this.setAttribute('fill', '${barHoverColor}');
        const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        tooltip.innerHTML = \`
          <rect x='${x + barWidth/2 - 30}' y='${y - 30}' width='60' height='25' fill='#1f2937' rx='4'/>
          <text x='${x + barWidth/2}' y='${y - 15}' text-anchor='middle' font-size='12' fill='white'>
          ${item.x}
          </text>
        \`;
        this.parentNode.appendChild(tooltip);
        this.addEventListener('mouseleave', () => {
          this.setAttribute('fill', '${barColor}');
          if (tooltip.parentNode === this.parentNode) {
            this.parentNode.removeChild(tooltip);
          }
        });"
    >`;

    if (animate) {
      svgContent += `
        <animate attributeName="y" from="${height - padding}" to="${y}" dur="0.5s" begin="${index * 0.05}s" fill="freeze" />
        <animate attributeName="height" from="0" to="${barHeight}" dur="0.5s" begin="${index * 0.05}s" fill="freeze" />
      `;
    }

    svgContent += `</rect>`;

    // X-axis label
    svgContent += `<text x="${x + barWidth / 2}" y="${height - padding + 15}" text-anchor="middle" font-size="10" fill="#6b7280">${item.label}</text>`;
  });

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
  }
}
