import { Box } from "@chakra-ui/react";
import Chart from "react-apexcharts";

// Define the PieChartProps interface
interface PieChartProps {
  chartData: number[];
  labels: string[];
  textPosition: string;
}

const PieChart = ({ chartData, labels,textPosition }: PieChartProps) => {
  const data = {
    series: chartData,
    options: {
      labels: labels,
      colors: ["#FF4768", "#1E90FF", "#FFD700", "#00CED1", "#8A2BE2"],
      legend: {
        position: textPosition as "top" | "right" | "bottom" | "left",
        top: 0,
        fontSize: "14px", // Setting the font size of the legend
      },
    },
  };
  return (
    <Box width="100%" pb={2}>
      <Chart options={data.options} series={data.series} type="pie" />
    </Box>
  );
};

export default PieChart;
