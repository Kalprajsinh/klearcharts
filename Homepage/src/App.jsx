// import './App.css'
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  BubbleChart,
  Histogram,
  WaterfallChart,
  RadarChart,
  BoxplotChart,
  GanttChart,
  GenerateBarChartSVG
} from '../..';
import Testimonial from './Testimonial';


function App() {

  const barData = [45, 75, 35, 90, 60, 80, 25]

  const lineData = [
    { x: 0, y: 20 },
    { x: 1, y: 45 },
    { x: 2, y: 30 },
    { x: 3, y: 60 },
    { x: 4, y: 40 },
    { x: 5, y: 70 },
    { x: 6, y: 55 },
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
    { x: 0, y: 20 },
    { x: 1, y: 35 },
    { x: 2, y: 25 },
    { x: 3, y: 40 },
    { x: 4, y: 30 },
    { x: 5, y: 50 },
    { x: 6, y: 35 },
    { x: 7, y: 60 },
    { x: 8, y: 45 },
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

  const radarData = [
    [
      { axis: "Speed", value: 80 },
      { axis: "Reliability", value: 70 },
      { axis: "Comfort", value: 90 },
      { axis: "Safety", value: 85 },
      { axis: "Efficiency", value: 65 },
      { axis: "Design", value: 75 },
    ],
    [
      { axis: "Speed", value: 65 },
      { axis: "Reliability", value: 90 },
      { axis: "Comfort", value: 75 },
      { axis: "Safety", value: 95 },
      { axis: "Efficiency", value: 85 },
      { axis: "Design", value: 60 },
    ],
  ]

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
      <GenerateBarChartSVG data={barData} height = {300}
  width = {600}
  barColor = "#ffff11"
  hoverColor = "#ffff11"
  animate = {true}
  string = {false} />
      <LineChart data={lineData} />
      <PieChart data={pieData} />
      <PieChart data={pieData} donut={true} />
      <AreaChart
        data={areaData}
        lineColor="#10b981"
        areaColor="#10b981"
        areaOpacity={0.2}
        pointColor="#059669"
      />
      <BubbleChart data={bubbleData} xAxisLabel="X Axis" yAxisLabel="Y Axis" />
      <Histogram data={histogramData} bins={12} barColor="#8b5cf6" barHoverColor="#7c3aed" />
      <WaterfallChart
        data={waterfallData}
        positiveColor="#10b981"
        negativeColor="#ef4444"
        totalColor="#3b82f6"
      />
      <RadarChart data={radarData} labels={["Model A", "Model B"]} colors={["#3b82f6", "#ef4444"]} />
      <BoxplotChart data={boxplotData} boxColor="#3b82f6" whiskerColor="#6b7280" outlierColor="#ef4444" />
      <GanttChart
        data={ganttData}
        barHeight={30}
        barSpacing={15}
        barColor="#3b82f6"
        progressColor="#1d4ed8"
      />
    </div>
  )
}

export default App