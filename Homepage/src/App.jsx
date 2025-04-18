// import './App.css'
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  ScatterPlot,
  Histogram,
  WaterfallChart,
} from '../..';
import Testimonial from './Testimonial';


function App() {

  const barData = [45, 75, 35, 90, 60, 80, 25]

  const lineData = [
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" },
    { x: 50, y: 70, label: "Item F" },
    { x: 15, y: 35, label: "Item G" },
    { x: 30, y: 55, label: "Item H" },
    { x: 45, y: 25, label: "Item I" },
    { x: 70, y: 60, label: "Item J" },
    { x: 90, y: 10, label: "Item K" },
    { x: 35, y: 65, label: "Item L" },
    { x: 20, y: 45, label: "Item M" },
    { x: 55, y: 20, label: "Item N" },
    { x: 65, y: 40, label: "Item O" },
    { x: 75, y: 30, label: "Item P" },
    { x: 85, y: 50, label: "Item Q" },
    { x: 95, y: 70, label: "Item R" },
    { x: 5,  y: 10, label: "Item S" },
    { x: 12, y: 22, label: "Item T" },
    { x: 28, y: 38, label: "Item U" },
    { x: 38, y: 28, label: "Item V" },
    { x: 48, y: 48, label: "Item W" },
    { x: 58, y: 58, label: "Item X" },
    { x: 68, y: 18, label: "Item Y" },
    { x: 78, y: 68, label: "Item Z" },
    { x: 88, y: 38, label: "Item AA" },
    { x: 98, y: 8,  label: "Item AB" },
    { x: 33, y: 33, label: "Item AC" },
    { x: 43, y: 63, label: "Item AD" }
  ]

  const pieData = [
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 20 },
    { label: "D", value: 15 },
    { label: "E", value: 5 },
  ]

  // Advanced chart data
  const bubbleData = [
    { x: 10, y: 20, size: 15, label: "Item A" },
    { x: 25, y: 40, size: 30, label: "Item B" },
    { x: 40, y: 30, size: 20, label: "Item C" },
    { x: 60, y: 50, size: 45, label: "Item D" },
    { x: 80, y: 15, size: 25, label: "Item E" },
    { x: 50, y: 70, size: 35, label: "Item F" },
  ]

  const areaData = [
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" },
    { x: 50, y: 70, label: "Item F" },
    { x: 15, y: 35, label: "Item G" },
    { x: 30, y: 55, label: "Item H" },
    { x: 45, y: 25, label: "Item I" },
    { x: 70, y: 60, label: "Item J" },
    { x: 90, y: 10, label: "Item K" },
    { x: 35, y: 65, label: "Item L" },
    { x: 20, y: 45, label: "Item M" },
    { x: 55, y: 20, label: "Item N" },
    { x: 65, y: 40, label: "Item O" },
    { x: 75, y: 30, label: "Item P" },
    { x: 85, y: 50, label: "Item Q" },
    { x: 95, y: 70, label: "Item R" },
    { x: 5,  y: 10, label: "Item S" },
    { x: 12, y: 22, label: "Item T" },
    { x: 28, y: 38, label: "Item U" },
    { x: 38, y: 28, label: "Item V" },
    { x: 48, y: 48, label: "Item W" },
    { x: 58, y: 58, label: "Item X" },
    { x: 68, y: 18, label: "Item Y" },
    { x: 78, y: 68, label: "Item Z" },
    { x: 88, y: 38, label: "Item AA" },
    { x: 98, y: 8,  label: "Item AB" },
    { x: 33, y: 33, label: "Item AC" },
    { x: 43, y: 63, label: "Item AD" },
    { x: 10+2, y: 20+2, label: "Item A" },
    { x: 25+2, y: 40+2, label: "Item B" },
    { x: 40+2, y: 30+2, label: "Item C" },
    { x: 60+2, y: 50+2, label: "Item D" },
    { x: 80+2, y: 15+2, label: "Item E" },
    { x: 50+2, y: 70+2, label: "Item F" },
    { x: 15+2, y: 35+2, label: "Item G" },
    { x: 30+2, y: 55+2, label: "Item H" },
    { x: 45+2, y: 25+2, label: "Item I" },
    { x: 70+2, y: 60+2, label: "Item J" },
    { x: 90+2, y: 10+2, label: "Item K" },
    { x: 35+2, y: 65+2, label: "Item L" },
    { x: 20+2, y: 45+2, label: "Item M" },
    { x: 55+2, y: 20+2, label: "Item N" },
    { x: 65+2, y: 40+2, label: "Item O" },
    { x: 75+2, y: 30+2, label: "Item P" },
    { x: 85+2, y: 50+2, label: "Item Q" },
    { x: 95+2, y: 70+2, label: "Item R" },
    { x: 5+2,  y: 10+2, label: "Item S" },
    { x: 12+2, y: 22+2, label: "Item T" },
    { x: 28+2, y: 38+2, label: "Item U" },
    { x: 38+2, y: 28+2, label: "Item V" },
    { x: 48+2, y: 48+2, label: "Item W" },
    { x: 58+2, y: 58+2, label: "Item X" },
    { x: 68+2, y: 18+2, label: "Item Y" },
    { x: 78+2, y: 68+2, label: "Item Z" },
    { x: 88+2, y: 38+2, label: "Item AA" },
    { x: 98+2, y: 8+2,  label: "Item AB" },
    { x: 33+2, y: 33+2, label: "Item AC" },
    { x: 43+2, y: 63+2, label: "Item AD" }
        
  ]

  const histogramData = [
    12, 15, 18, 22, 25, 26, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 15, 20, 25, 30, 35, 40, 45, 50, 55,
    60, 65, 70, 75, 80, 85, 90, 95, 100,
  ]

  const waterfallData = [
    { label: "Start", value: 500 },
    { label: "Product A", value: 200 },
    { label: "Product B", value: 150 },
    { label: "Product C", value: -100 },
    { label: "Tax", value: -50 },
    { label: "Total", value: 700 },
  ]

  const Stdata = [
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" },
    { x: 50, y: 70, label: "Item F" },
    { x: 15, y: 35, label: "Item G" },
    { x: 30, y: 55, label: "Item H" },
    { x: 45, y: 25, label: "Item I" },
    { x: 70, y: 60, label: "Item J" },
    { x: 90, y: 10, label: "Item K" },
    { x: 35, y: 65, label: "Item L" },
    { x: 20, y: 45, label: "Item M" },
    { x: 55, y: 20, label: "Item N" },
    { x: 65, y: 40, label: "Item O" },
    { x: 75, y: 30, label: "Item P" },
    { x: 85, y: 50, label: "Item Q" },
    { x: 95, y: 70, label: "Item R" },
    { x: 5,  y: 10, label: "Item S" },
    { x: 12, y: 22, label: "Item T" },
    { x: 28, y: 38, label: "Item U" },
    { x: 38, y: 28, label: "Item V" },
    { x: 48, y: 48, label: "Item W" },
    { x: 58, y: 58, label: "Item X" },
    { x: 68, y: 18, label: "Item Y" },
    { x: 78, y: 68, label: "Item Z" },
    { x: 88, y: 38, label: "Item AA" },
    { x: 98, y: 8,  label: "Item AB" },
    { x: 33, y: 33, label: "Item AC" },
    { x: 43, y: 63, label: "Item AD" },
    { x: 10+2, y: 20+2, label: "Item A" },
    { x: 25+2, y: 40+2, label: "Item B" },
    { x: 40+2, y: 30+2, label: "Item C" },
    { x: 60+2, y: 50+2, label: "Item D" },
    { x: 80+2, y: 15+2, label: "Item E" },
    { x: 50+2, y: 70+2, label: "Item F" },
    { x: 15+2, y: 35+2, label: "Item G" },
    { x: 30+2, y: 55+2, label: "Item H" },
    { x: 45+2, y: 25+2, label: "Item I" },
    { x: 70+2, y: 60+2, label: "Item J" },
    { x: 90+2, y: 10+2, label: "Item K" },
    { x: 35+2, y: 65+2, label: "Item L" },
    { x: 20+2, y: 45+2, label: "Item M" },
    { x: 55+2, y: 20+2, label: "Item N" },
    { x: 65+2, y: 40+2, label: "Item O" },
    { x: 75+2, y: 30+2, label: "Item P" },
    { x: 85+2, y: 50+2, label: "Item Q" },
    { x: 95+2, y: 70+2, label: "Item R" },
    { x: 5+2,  y: 10+2, label: "Item S" },
    { x: 12+2, y: 22+2, label: "Item T" },
    { x: 28+2, y: 38+2, label: "Item U" },
    { x: 38+2, y: 28+2, label: "Item V" },
    { x: 48+2, y: 48+2, label: "Item W" },
    { x: 58+2, y: 58+2, label: "Item X" },
    { x: 68+2, y: 18+2, label: "Item Y" },
    { x: 78+2, y: 68+2, label: "Item Z" },
    { x: 88+2, y: 38+2, label: "Item AA" },
    { x: 98+2, y: 8+2,  label: "Item AB" },
    { x: 33+2, y: 33+2, label: "Item AC" },
    { x: 43+2, y: 63+2, label: "Item AD" }
  ];
  

  const boxplotData = [
    {
      min: 10,
      q1: 15,
      median: 20,
      q3: 25,
      max: 30,
      outliers: [5, 35],
      label: "Group A",
    },
    {
      min: 15,
      q1: 20,
      median: 25,
      q3: 30,
      max: 40,
      label: "Group B",
    },
    {
      min: 5,
      q1: 10,
      median: 15,
      q3: 20,
      max: 25,
      outliers: [2, 30],
      label: "Group C",
    },
  ]

  const today = new Date()
  const ganttData = [
    {
      id: "task1",
      task: "Research",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 10),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
      progress: 100,
      color: "#3b82f6",
    },
    {
      id: "task2",
      task: "Design",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      progress: 80,
      dependencies: ["task1"],
      color: "#10b981",
    },
    {
      id: "task3",
      task: "Development",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
      progress: 30,
      dependencies: ["task2"],
      color: "#f59e0b",
    },
    {
      id: "task4",
      task: "Testing",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15),
      progress: 0,
      dependencies: ["task3"],
      color: "#ef4444",
    },
  ]
  // return (
  //   <>
  //   <Testimonial />
  //   </>
  // );
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Chart Types</h2>

      <BarChart data={barData} height = {300}
  width = {600}
  barColor = "#ffff11"
  hoverColor = "#ffff11"
  animate = {true}
  string = {false} />

      <LineChart data={lineData} />
      <ScatterPlot data={Stdata} />
      <PieChart data={pieData} />
      <PieChart data={pieData} donut={true} />
      <AreaChart
        data={areaData}
        lineColor="#10b981"
        areaColor="#10b981"
        areaOpacity={0.2}
        pointColor="#059669"
        width={1000}
      />
      <Histogram data={histogramData} bins={12} barColor="#8b5cf6" barHoverColor="#7c3aed" />
      <WaterfallChart
        data={waterfallData}
        positiveColor="#10b981"
        negativeColor="#ef4444"
        totalColor="#3b82f6"
      />
     
    </div>
  )
}

export default App