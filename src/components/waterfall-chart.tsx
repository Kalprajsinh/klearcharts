import * as React from "react";

interface WaterfallItem {
  label: string;
  value: number;
}

interface WaterfallChartProps {
  data: WaterfallItem[];
  height?: number;
  width?: number;
  positiveColor?: string;
  negativeColor?: string;
  totalColor?: string;
  animate?: boolean;
  string?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function WaterfallChart({
  data,
  height = 300,
  width = 600,
  positiveColor = "#10b981",
  negativeColor = "#ef4444",
  totalColor = "#3b82f6",
  animate = true,
  string = false,
  className,
  style,
}: WaterfallChartProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return string ? '' : <></>;
  }

  const padding = 60;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Calculate running totals and find max/min values
  let runningTotal = 0;
  const totals: number[] = [];
  const values: number[] = [];

  data.forEach((item) => {
    values.push(item.value);
    runningTotal += item.value;
    totals.push(runningTotal);
  });

  const maxValue = Math.max(...totals, ...values, 0);
  const minValue = Math.min(...totals, ...values, 0);
  const valueRange = maxValue - minValue;

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Create background grid
  for (let i = 0; i <= 5; i++) {
    const value = minValue + (valueRange * i) / 5;
    const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
    
    svgContent += `
      <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />
      <text x="${padding - 10}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#6b7280">${value.toFixed(0)}</text>
    `;
  }

  // Create zero line if needed
  if (minValue < 0 && maxValue > 0) {
    const zeroY = padding + chartHeight - ((0 - minValue) / valueRange) * chartHeight;
    svgContent += `
      <line x1="${padding}" y1="${zeroY}" x2="${width - padding}" y2="${zeroY}" stroke="#6b7280" stroke-width="1" stroke-dasharray="4" />
    `;
  }

  // Calculate bar width
  const barWidth = chartWidth / data.length - 10;

  // Create bars and connecting lines
  let prevEndY = padding + chartHeight - ((0 - minValue) / valueRange) * chartHeight;

  data.forEach((item, index) => {
    const x = padding + index * (chartWidth / data.length) + 5;
    const isTotal = index === data.length - 1 && item.label.toLowerCase().includes("total");

    // Calculate bar position
    let startY, endY;

    if (isTotal) {
      // Total bar starts from zero
      startY = padding + chartHeight - ((0 - minValue) / valueRange) * chartHeight;
      endY = padding + chartHeight - ((item.value - minValue) / valueRange) * chartHeight;
    } else {
      // Regular bars
      const prevTotal = index === 0 ? 0 : totals[index - 1];
      startY = padding + chartHeight - ((prevTotal - minValue) / valueRange) * chartHeight;
      endY = padding + chartHeight - ((totals[index] - minValue) / valueRange) * chartHeight;
    }

    // Create connecting line from previous bar
    if (!isTotal && index > 0) {
      svgContent += `
        <line x1="${x - 5}" y1="${prevEndY}" x2="${x}" y2="${startY}" stroke="#6b7280" stroke-width="1" stroke-dasharray="3" />
      `;
    }

    // Set bar color based on value
    let barColor;
    if (isTotal) {
      barColor = totalColor;
    } else if (item.value >= 0) {
      barColor = positiveColor;
    } else {
      barColor = negativeColor;
    }

    // Create bar
    const initialHeight = animate ? "0" : (item.value >= 0 ? (startY - endY) : (endY - startY)).toString();
    const initialY = animate ? (item.value >= 0 ? startY : startY) : (item.value >= 0 ? endY : startY);

    svgContent += `
      <rect 
        x="${x}" 
        y="${initialY}" 
        width="${barWidth}" 
        height="${initialHeight}" 
        fill="${barColor}"
        onmouseenter="this.setAttribute('opacity', '0.8');
          const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          tooltip.innerHTML = \`
            <rect x='${x + barWidth / 2 - 30}' y='${Math.min(startY, endY) - 30}' width='60' height='25' fill='#1f2937' rx='4'/>
            <text x='${x + barWidth / 2}' y='${Math.min(startY, endY) - 15}' text-anchor='middle' font-size='12' fill='white'>
              ${item.value}
            </text>
          \`;

          this.parentNode.appendChild(tooltip);
          this.addEventListener('mouseleave', () => {
            this.setAttribute('opacity', '1');
            if (tooltip.parentNode === this.parentNode) {
               this.parentNode.removeChild(tooltip);
            }
          });"
    `;

    if (animate) {
      const finalHeight = (item.value >= 0 ? (startY - endY) : (endY - startY)).toString();
      const finalY = item.value >= 0 ? endY : startY;

      svgContent += `>
        <animate attributeName="y" from="${initialY}" to="${finalY}" dur="0.5s" begin="${index * 0.1}s" fill="freeze" />
        <animate attributeName="height" from="${initialHeight}" to="${finalHeight}" dur="0.5s" begin="${index * 0.1}s" fill="freeze" />
      </rect>`;
    } else {
      svgContent += ` />`;
    }

    // Add label
    svgContent += `
      <text x="${x + barWidth / 2}" y="${height - padding + 15}" text-anchor="middle" font-size="10" fill="#6b7280">${item.label}</text>
    `;

    // Add value label
    svgContent += `
      <text x="${x + barWidth / 2}" y="${(startY + endY) / 2}" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="white">${item.value}</text>
    `;

    prevEndY = endY;
  });

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return (
      <div className={className} style={style} dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
  }
}