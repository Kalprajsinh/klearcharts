# KlearCharts

KlearCharts is a lightweight, SVG-based charting library designed for simplicity, high performance, and easy customization. Built with React and TypeScript, it provides a collection of beautiful and interactive charts for data visualization.

## Features

- 🚀 Lightweight and performant
- 📊 Multiple chart types:
  - Line Chart
  - Area Chart
  - Bar Chart
  - Pie Chart
  - Bubble Chart
  - Waterfall Chart
  - Histogram
- 🎨 Customizable styling
- 📱 Responsive design
- ⚡ SVG-based rendering
- 🔍 Interactive elements
- 📦 TypeScript support

## Installation

```bash
npm install klearcharts
# or
yarn add klearcharts
```

## Quick Start

```tsx
import { LineChart } from 'klearcharts';

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
];

function App() {
  return (
    <LineChart
      data={data}
      width={600}
      height={400}
      title="Sample Line Chart"
    />
  );
}
```

## Available Charts

### Line Chart
```tsx
import { LineChart } from 'klearcharts';
```

### Area Chart
```tsx
import { AreaChart } from 'klearcharts';
```

### Bar Chart
```tsx
import { BarChart } from 'klearcharts';
```

### Pie Chart
```tsx
import { PieChart } from 'klearcharts';
```

### Bubble Chart
```tsx
import { BubbleChart } from 'klearcharts';
```

### Waterfall Chart
```tsx
import { WaterfallChart } from 'klearcharts';
```

### Histogram
```tsx
import { Histogram } from 'klearcharts';
```

## Props

Each chart component accepts the following common props:

- `data`: Array of data points
- `width`: Chart width in pixels
- `height`: Chart height in pixels
- `animate`: Boolean to enable/disable animations
