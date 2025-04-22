import * as React from "react";

interface DataPoint {
  x: number;
  y: number;
}

interface AreaChartProps {
  data: DataPoint[];
  height?: number;
  width?: number;
  lineColor?: string;
  areaColor?: string;
  areaOpacity?: number;
  showPoints?: boolean;
  pointColor?: string;
  animate?: boolean;
  string?: boolean;
}

export function AreaChart({
  data,
  height = 300,
  width = 600,
  lineColor = "#3b82f6",
  areaColor = "#3b82f6",
  areaOpacity = 0.2,
  showPoints = true,
  pointColor = "#2563eb",
  animate = true,
  string = false,
}: AreaChartProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? '' : <></>;
  }

  data = [...data].sort((a, b) => a.x - b.x);

  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find data ranges
  const xValues = data.map((d) => d.x);
  const yValues = data.map((d) => d.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = 0; // Start from 0 for area charts
  const yMax = Math.max(...yValues) * 1.1; // Add 10% padding

  // Scale factors
  const xScale = chartWidth / (xMax - xMin || 1);
  const yScale = chartHeight / (yMax - yMin || 1);

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Create grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding + chartHeight - (i * chartHeight) / 5;
    const value = Math.round((yMax * i) / 5);
    
    svgContent += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />`;
    svgContent += `<text x="${padding - 10}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#6b7280">${value}</text>`;
  }

  // Create x-axis labels
  const xStep = Math.max(1, Math.floor(data.length / 5));
  for (let i = 0; i < data.length; i += xStep) {
    const point = data[i];
    const x = padding + (point.x - xMin) * xScale;
    
    svgContent += `<text x="${x}" y="${height - padding + 15}" text-anchor="middle" font-size="10" fill="#6b7280">${point.x}</text>`;
  }

  // Create area path
  let areaPathD = `M ${padding + (data[0].x - xMin) * xScale} ${height - padding} `;
  data.forEach((point) => {
    const x = padding + (point.x - xMin) * xScale;
    const y = padding + chartHeight - (point.y - yMin) * yScale;
    areaPathD += `L ${x} ${y} `;
  });
  areaPathD += `L ${padding + (data[data.length - 1].x - xMin) * xScale} ${height - padding} Z`;
  
  svgContent += `<path d="${areaPathD}" fill="${areaColor}" fill-opacity="${areaOpacity}" opacity="${animate ? '0' : '1'}"`;
  if (animate) {
    svgContent += `><animate attributeName="opacity" from="0" to="1" dur="2s" begin="0.3s" fill="freeze" /></path>`;
  } else {
    svgContent += ` />`;
  }

  // Create line path
  let linePathD = "";
  data.forEach((point, index) => {
    const x = padding + (point.x - xMin) * xScale;
    const y = padding + chartHeight - (point.y - yMin) * yScale;
    linePathD += index === 0 ? `M ${x} ${y} ` : `L ${x} ${y} `;
  });

  svgContent += `<path d="${linePathD}" fill="none" stroke="${lineColor}" stroke-width="2"`;
  const pathLength = data.length * 1000;

  if (animate) {
    svgContent += ` stroke-dasharray="${pathLength}" stroke-dashoffset="${pathLength}">`;
    svgContent += `<animate attributeName="stroke-dashoffset" from="${pathLength}" to="0" dur="2s" begin="0.3s" fill="freeze" /></path>`;
  } else {
    svgContent += ` />`;
  }

  // Create points
  if (showPoints) {
    data.forEach((point, index) => {
      const x = padding + (point.x - xMin) * xScale;
      const y = padding + chartHeight - (point.y - yMin) * yScale;
      
      svgContent += `<circle cx="${x}" cy="${y}" r="4" fill="${pointColor}" opacity="${animate ? '0' : '1'}"`;
      svgContent += ` onmouseenter="this.setAttribute('r', '6');
        const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        tooltip.innerHTML = \`
          <rect x='${x - 40}' y='${y - 40}' width='80' height='30' fill='#1f2937' rx='4'/>
          <text x='${x}' y='${y - 20}' text-anchor='middle' font-size='12' fill='white'>
            (${point.x}, ${point.y})
          </text>
        \`;
        this.parentNode.appendChild(tooltip);
        this.addEventListener('mouseleave', () => {
          this.setAttribute('r', '4');
          if (tooltip.parentNode === this.parentNode) {
            this.parentNode.removeChild(tooltip);
          }
        });"`;
      
      if (animate) {
        svgContent += `><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="${0.3 + index * 0.1}s" fill="freeze" /></circle>`;
      } else {
        svgContent += ` />`;
      }
    });
  }

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return (
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
  }
}