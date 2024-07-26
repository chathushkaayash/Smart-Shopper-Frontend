import { Box } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";



const BarGraph: React.FC = () => {

  const data = [
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 120, 130],
      
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#ff7708"],
  };

  return (
    <Box>
      {/* <Bar data={data} options={options} className="h-full" /> */}
      <Chart options={options} series={data} type="bar" width="100%"/>
    </Box>
  );
};

export default BarGraph;
