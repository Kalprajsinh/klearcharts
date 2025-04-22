
# 📊 KlearCharts

KlearCharts is a lightweight, SVG-based charting library designed for simplicity, high performance, and easy customization. Built with React and TypeScript, it provides a collection of beautiful and interactive charts for data visualization.

## 🚀 Installation

```bash
npm install klearcharts
# or
yarn add klearcharts
```

---

## 📘 Available Charts

### Bar Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/54a817ad-e575-4a83-bd14-83dd10a6a6de" width="250"/>
    </td>
    <td>

```javascript
import { BarChart } from 'klearcharts';

<BarChart
  data={[42, 54, 12, 64, 73, 13]}
  height={300}
  width={600}
  barColor="#10b981"
  hoverColor="#059669"
  animate={true}
/>
```

  </tr>
</table>

---

### Line Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/e5a5e3e8-e37b-4159-9a49-7832596f2049" width="250"/>
    </td>
    <td>

```javascript
import { LineChart } from 'klearcharts';

<LineChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
  lineColor="#10b981"
  pointColor="#059669"
  animate={true}
/>
```

  </tr>
</table>

---

### Pie Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/dadda9a1-6a51-471d-b493-224d4b59ad23" width="250"/>
    </td>
    <td>

```javascript
import { PieChart } from 'klearcharts';

<PieChart
  data={[
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 20 },
    { label: "D", value: 15 },
    { label: "E", value: 5 }
  ]}
  height={300}
  width={600}
  donut={true}
  colors={["#10b981", "#059669", "#047857", "#065f46", "#064e3b"]}
  animate={true}
/>
```

  </tr>
</table>

---

### Area Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/8fe5b59f-fc15-477d-bea7-e20e5dc9b8de" width="250"/>
    </td>
    <td>

```javascript
import { AreaChart } from 'klearcharts';

<AreaChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
  lineColor="#10b981"
  areaColor="#10b981"
  areaOpacity={0.2}
  showPoints={true}
  pointColor="#059669"
  animate={true}
/>
```

  </tr>
</table>

---

### Scatter Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/fe6f5ac9-4aa5-480a-ae6b-a17cd77688f2" width="250"/>
    </td>
    <td>

```javascript
import { ScatterChart } from 'klearcharts';

<ScatterPlot
  data={[
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" }
  ]}
  height={300}
  width={600}
  xAxisLabel="X Axis"
  yAxisLabel="Y Axis"
  pointColor="#10b981"
  pointOpacity={0.8}
  animate={true}
/>
```

  </tr>
</table>

---

### Histogram Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/aef8f3cb-cd1c-47bf-aafb-2c5ee45a8416" width="250"/>
    </td>
    <td>

```javascript
import { HistogramChart } from 'klearcharts';

<Histogram
  data={[12, 15, 18, 22, 25, 26, 28, 30, 32, 35, 38, 40]}
  bins={6}
  height={300}
  width={600}
  barColor="#10b981"
  barHoverColor="#059669"
  animate={true}
/>
```

  </tr>
</table>

---

### Waterfall Chart

<table>
  <tr>
    <td width="280">
      <img src="https://github.com/user-attachments/assets/744abcd3-8769-4910-9239-9f3a14c3ea0d" width="250"/>
    </td>
    <td>

```javascript
import { WaterfallChart } from 'klearcharts';

<WaterfallChart
  data={[
    { label: "Start", value: 500 },
    { label: "Product A", value: 200 },
    { label: "Product B", value: 150 },
    { label: "Product C", value: -100 },
    { label: "Tax", value: -50 },
    { label: "Total", value: 700 }
  ]}
  height={300}
  width={600}
  positiveColor="#10b981"
  negativeColor="#ef4444"
  totalColor="#3b82f6"
  animate={true}
/>
```

  </tr>
</table>

---
