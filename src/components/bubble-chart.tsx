import * as React from "react";

interface ScatterDataPoint {
  x: number;
  y: number;
  label?: string;
}

interface ScatterPlotProps {
  data: ScatterDataPoint[];
  height?: number;
  width?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
  pointColor?: string;
  pointOpacity?: number;
  animate?: boolean;
  string?: boolean;
}

export function ScatterPlot({
  data,
  height = 300,
  width = 600,
  xAxisLabel = "X Axis",
  yAxisLabel = "Y Axis",
  pointColor = "#3b82f6",
  pointOpacity = 0.7,
  animate = true,
  string = false,
}: ScatterPlotProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? '' : <></>;
  }

  const padding = 50;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const xValues = data.map((d) => d.x);
  const yValues = data.map((d) => d.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xScale = chartWidth / (xMax - xMin || 1);
  const yScale = chartHeight / (yMax - yMin || 1);

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Create axes
  svgContent += `
    <!-- X-axis -->
    <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#e5e7eb" stroke-width="1" />
    <!-- Y-axis -->
    <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#e5e7eb" stroke-width="1" />
    <!-- X-axis label -->
    <text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-size="12" fill="#6b7280">${xAxisLabel}</text>
    <!-- Y-axis label -->
    <text x="15" y="${height / 2}" text-anchor="middle" font-size="12" fill="#6b7280" transform="rotate(-90, 15, ${height / 2})">${yAxisLabel}</text>
  `;

  // X-axis ticks
  for (let i = 0; i <= 5; i++) {
    const x = padding + (i * chartWidth) / 5;
    const xVal = xMin + (i * (xMax - xMin)) / 5;
    
    svgContent += `
      <line x1="${x}" y1="${height - padding}" x2="${x}" y2="${height - padding + 5}" stroke="#6b7280" stroke-width="1" />
      <text x="${x}" y="${height - padding + 20}" text-anchor="middle" font-size="10" fill="#6b7280">${xVal.toFixed(1)}</text>
    `;
  }

  // Y-axis ticks
  for (let i = 0; i <= 5; i++) {
    const y = height - padding - (i * chartHeight) / 5;
    const yVal = yMin + (i * (yMax - yMin)) / 5;
    
    svgContent += `
      <line x1="${padding}" y1="${y}" x2="${padding - 5}" y2="${y}" stroke="#6b7280" stroke-width="1" />
      <text x="${padding - 10}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#6b7280">${yVal.toFixed(1)}</text>
    `;
  }

  // Create points
  data.forEach((point, index) => {
    const cx = padding + (point.x - xMin) * xScale;
    const cy = height - padding - (point.y - yMin) * yScale;
    const r = 6; // Fixed size for scatter plot
    const label = point.label || `Point ${index + 1}`;

    svgContent += `
      <circle 
        cx="${cx}" 
        cy="${cy}" 
        r="${animate ? '0' : r}" 
        fill="${pointColor}" 
        fill-opacity="${pointOpacity}" 
        stroke="${pointColor}" 
        stroke-width="1"
        onmouseenter="this.setAttribute('stroke-width', '2'); this.setAttribute('stroke', '#1f2937');
          const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          tooltip.innerHTML = \`
            <rect x='${cx - 70}' y='${cy - 50}' width='140' height='40' fill='#1f2937' rx='4'/>
            <text x='${cx}' y='${cy - 30}' text-anchor='middle' font-size='12' fill='white'>${label}</text>
            <text x='${cx}' y='${cy - 15}' text-anchor='middle' font-size='12' fill='white'>
              (${point.x.toFixed(1)}, ${point.y.toFixed(1)})
            </text>
          \`;
          this.parentNode.appendChild(tooltip);
          this.addEventListener('mouseleave', () => {
            this.setAttribute('stroke-width', '1');
            this.setAttribute('stroke', '${pointColor}');
            this.parentNode.removeChild(tooltip);
          });"
      >`;

    if (animate) {
      svgContent += `
        <animate attributeName="r" from="0" to="${r}" dur="0.3s" begin="${index * 0.1}s" fill="freeze" />
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="${index * 0.1}s" fill="freeze" />
      </circle>`;
    } else {
      svgContent += ` />`;
    }
  });

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return (
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
  }
}