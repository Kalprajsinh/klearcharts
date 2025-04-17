import * as React from "react";

function GenerateBarChartSVG({ data, height = 200, width = 400, barColor = '#4f46e5',animate, string = false }: {
  data: number[];
  height?: number;
  width?: number;
  barColor?: string;
  animate?:boolean;
  string?: boolean;
}) {

  if (!Array.isArray(data) || data.length === 0) return '';

  const maxValue = Math.max(...data, 0);
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = chartWidth / data.length - 10;

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // grid
  for (let i = 0; i <= 5; i++) {
    const y = padding + chartHeight - (i * chartHeight) / 5;
    svgContent += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />`;
    svgContent += `<text x="${padding - 5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="12" fill="#6b7280">${Math.round((maxValue * i) / 5)}</text>`;
  }

  data.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + 5;
    const finalY = height - padding - barHeight;
    const duration = 0.5 + index * 0.1; // stagger animation for effect

    svgContent += `<rect x="${x}" y="${animate ? height - padding : finalY}" width="${barWidth}" height="${animate ? 0 : barHeight}" fill="${barColor}" rx="4">`;

    if (animate) {
      svgContent += `
        <animate attributeName="y" from="${height - padding}" to="${finalY}" dur="${duration}s" fill="freeze" />
        <animate attributeName="height" from="0" to="${barHeight}" dur="${duration}s" fill="freeze" />
      `;
    }

    svgContent += `</rect>`;
  });

  svgContent += `</svg>`;

  if (string) {
    return svgContent;
  } else {
    return (
      <div className="chart-container">
        <div className="chart" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
    );
  }
}

export {GenerateBarChartSVG};