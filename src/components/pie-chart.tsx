import * as React from "react";

interface PieSlice {
  label: string;
  value: number;
}

interface PieChartProps {
  data: PieSlice[];
  height?: number;
  width?: number;
  donut?: boolean;
  animate?: boolean;
  colors?: string[];
  string?: boolean;
}

export function PieChart({
  data,
  height = 300,
  width = 300,
  donut = false,
  animate = true,
  colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#6366f1", "#14b8a6"],
  string = false,
}: PieChartProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? '' : <></>;
  }

  const total = data.reduce((sum, slice) => sum + slice.value, 0);
  const radius = Math.min(width, height) / 2 - 40;
  const innerRadius = donut ? radius * 0.6 : 0;
  const centerX = width / 2;
  const centerY = height / 2;

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  let startAngle = 0;
  data.forEach((slice, index) => {
    const percentage = slice.value / total;
    const endAngle = startAngle + percentage * 2 * Math.PI;

    // Calculate path coordinates
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    // Create slice path
    let d = `M ${centerX} ${centerY} `;

    if (donut) {
      const innerX1 = centerX + innerRadius * Math.cos(startAngle);
      const innerY1 = centerY + innerRadius * Math.sin(startAngle);
      const innerX2 = centerX + innerRadius * Math.cos(endAngle);
      const innerY2 = centerY + innerRadius * Math.sin(endAngle);

      d += `L ${x1} ${y1} `;
      d += `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} `;
      d += `L ${centerX} ${centerY} `;
      d += `L ${innerX2} ${innerY2} `;
      d += `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerX1} ${innerY1} `;
      d += `L ${centerX} ${centerY} `;
    } else {
      d += `L ${x1} ${y1} `;
      d += `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} `;
      d += `Z`;
    }

    const midAngle = startAngle + (endAngle - startAngle) / 2;
    const labelRadius = donut ? (radius + innerRadius) / 2 : radius * 0.7;
    const labelX = centerX + labelRadius * Math.cos(midAngle);
    const labelY = centerY + labelRadius * Math.sin(midAngle);

    // Add hover effect coordinates
    const tooltipX = centerX + (radius + 20) * Math.cos(midAngle);
    const tooltipY = centerY + (radius + 20) * Math.sin(midAngle);

    svgContent += `<path 
      d="${d}" 
      fill="${colors[index % colors.length]}"
      opacity="${animate ? '0' : '1'}"
      onmouseenter="
        const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        tooltip.innerHTML = \`
          <rect x='${tooltipX - 60}' y='${tooltipY - 30}' width='80' height='40' fill='#1f2937' rx='4'/>
          <text x='${tooltipX}' y='${tooltipY - 10}' text-anchor='middle' font-size='12' fill='white'>
            ${slice.label}
          </text>
          <text x='${tooltipX}' y='${tooltipY + 10}' text-anchor='middle' font-size='12' fill='white'>
            ${Math.round(percentage * 100)}%
          </text>
        \`;
        this.parentNode.appendChild(tooltip);
        this.addEventListener('mouseleave', () => {
          this.setAttribute('transform', '');
          this.parentNode.removeChild(tooltip);
        });"
    >`;

    if (animate) {
      svgContent += `<animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="${index * 0.15}s" fill="freeze" />
        <animate attributeName="transform" from="scale(0.8) translate(${centerX * 0.2}, ${centerY * 0.2})" to="scale(1) translate(0,0)" dur="0.5s" begin="${index * 0.15}s" fill="freeze" />`;
    }

    svgContent += `</path>`;

    // Add label
    if (percentage > 0.05) {
      svgContent += `<text 
        x="${labelX}" 
        y="${labelY}" 
        text-anchor="middle" 
        dominant-baseline="middle" 
        font-size="12" 
        fill="white" 
        pointer-events="none"
        opacity="${animate ? '0' : '1'}"
      >`;

      if (animate) {
        svgContent += `<animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="${index * 0.15}s" fill="freeze" />`;
      }

      svgContent += `${slice.label}</text>`;
    }

    startAngle = endAngle;
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