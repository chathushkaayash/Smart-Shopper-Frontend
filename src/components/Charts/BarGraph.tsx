import { Box } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";

interface BarGraphProps {
  chartData: number[];
  labels: string[];
  height?: string;
}

const BarGraph: React.FC<BarGraphProps>= ({chartData,labels,height}) => {

  const data = [
    {
      name: "Revenue",
      data: chartData,
      
    },
    // {
    //   name: "Free Cash Flow",
    //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 50, 60, 70],
    // },
  ];

  const options = {
    
    chart: {
      id: "basic-bar",
    },
    xaxis: {
       categories: labels
      //[
      //   "Jan",
      //   "Feb",
      //   "Mar",
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      //   "Oct",
      //   "Nov",
      //   "Dec",
      // ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#ff7708"],
  };

  return (
    <Box>
      {/* <Bar data={data} options={options} className="h-full" /> */}
      <Chart options={options} series={data} type="bar" width="100%" height={height}/>
    </Box>
  );
};

export default BarGraph;
