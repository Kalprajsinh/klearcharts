import * as React from "react";

interface HistogramProps {
  data: number[];
  bins?: number;
  height?: number;
  width?: number;
  barColor?: string;
  barHoverColor?: string;
  animate?: boolean;
  string?: boolean;
}

export function Histogram({
  data,
  bins = 10,
  height = 300,
  width = 600,
  barColor = "#3b82f6",
  barHoverColor = "#2563eb",
  animate = true,
  string = false,
}: HistogramProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? '' : <></>;
  }

  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Calculate histogram data
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const binWidth = range / bins;

  // Create bins
  const histogramData: { binStart: number; binEnd: number; count: number }[] = Array(bins).fill(0).map((_, i) => ({
    binStart: min + i * binWidth,
    binEnd: min + (i + 1) * binWidth,
    count: 0,
  }));

  // Count values in each bin
  data.forEach((value) => {
    const binIndex = Math.min(bins - 1, Math.floor((value - min) / binWidth));
    histogramData[binIndex].count++;
  });

  // Find maximum count for scaling
  const maxCount = Math.max(...histogramData.map((bin) => bin.count));

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Create background grid
  for (let i = 0; i <= 5; i++) {
    const y = padding + chartHeight - (i * chartHeight) / 5;
    const count = Math.round((maxCount * i) / 5);
    
    svgContent += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />`;
    svgContent += `<text x="${padding - 5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#6b7280">${count}</text>`;
  }

  // Create bars
  const barWidth = chartWidth / bins - 2;

  histogramData.forEach((bin, index) => {
    const barHeight = (bin.count / maxCount) * chartHeight;
    const x = padding + index * (chartWidth / bins) + 1;
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
          <rect x='${x + barWidth / 2 - 70}' y='${y - 60}' width='140' height='50' fill='#1f2937' rx='4'/>
          <text x='${x + barWidth / 2}' y='${y - 40}' text-anchor='middle' font-size='12' fill='white'>
            Range: ${bin.binStart.toFixed(1)} - ${bin.binEnd.toFixed(1)}
          </text>
          <text x='${x + barWidth / 2}' y='${y - 20}' text-anchor='middle' font-size='12' fill='white'>
            Count: ${bin.count}
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

    // Add bin labels (for every other bin to avoid crowding)
    if (index % 2 === 0 || index === bins - 1) {
      svgContent += `<text x="${x + barWidth / 2}" y="${height - padding + 15}" text-anchor="middle" font-size="10" fill="#6b7280">${bin.binStart.toFixed(1)}</text>`;
    }
  });

  // Add final x-axis label
  svgContent += `<text x="${padding + chartWidth}" y="${height - padding + 15}" text-anchor="middle" font-size="10" fill="#6b7280">${max.toFixed(1)}</text>`;

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return (
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
  }
}