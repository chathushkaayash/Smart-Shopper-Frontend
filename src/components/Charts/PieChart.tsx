import { Box } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ["Keells", "Cargills", "Arpico", "Glomark", "Spar"],
      colors: ["#FF4768", "#1E90FF", "#FFD700", "#00CED1", "#8A2BE2"],
      legend: {
        position: "bottom" as "top" | "right" | "bottom" | "left",
        top: 0,
        fontSize: "14px", // Setting the font size of the legend
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };
  return (
    <Box width="100%" pb={2}>
      <Chart options={data.options} series={data.series} type="pie" />
    </Box>
  );
};

export default PieChart;
