import * as React from "react";
import { ReactNode } from "react";

type BarChartProps = {
  data: number[];
  height?: number;
  width?: number;
  barColor?: string;
  hoverColor?: string;
  string?: boolean;
};

function GenerateBarChartSVG({ data, height = 200, width = 400, barColor = '#4f46e5', hoverColor = '#3b82f6', string = false }: BarChartProps) {
  if (!Array.isArray(data) || data.length === 0) return '';

  const maxValue = Math.max(...data, 0);
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = chartWidth / data.length - 10;

  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  // Create background grid (lines and labels)
  for (let i = 0; i <= 5; i++) {
    const y = padding + chartHeight - (i * chartHeight) / 5;
    svgContent += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1" />`;
    svgContent += `<text x="${padding - 5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="12" fill="#6b7280">${Math.round((maxValue * i) / 5)}</text>`;
  }

  // Create bars and their labels
  data.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + 5;
    const y = height - padding - barHeight;

    // Bars
    svgContent += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${barColor}" rx="4" />`;

    // Add value label on top of the bar
    svgContent += `<text x="${x + barWidth / 2}" y="${y - 10}" text-anchor="middle" font-size="12" fill="#6b7280">${value}</text>`;
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

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

type SvgPropsType = {
  width: number;
  height: number;
};

const SvgComponent = ({ width, height }: SvgPropsType) => {
  return (
    <div>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect
          width={width - 100} 
          height={height - 30}
          x="10"
          y="10"
          rx="20"
          ry="20"
          fill="blue"
        />
      </svg>
    </div>
  );
};

export { Button, SvgComponent, GenerateBarChartSVG };
