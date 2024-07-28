import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@chakra-ui/react";

const RadialBarCharts: React.FC = () => {
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "radialBar" as const, // Type assertion for ApexCharts type
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
      labels: ["Keells", "Cargills", "Arpico", "Glomark", "Spar"],
      colors: ["#FF4768", "#1E90FF", "#FFD700", "#00CED1", "#8A2BE2"],
      legend: {
        position: "bottom" as 'top' | 'right' | 'bottom' | 'left',
        fontSize: "14px",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom" as "top" | "right" | "bottom" | "left",
            },
          },
        },
      ],
    },
  };

  return (
    <Box width="100%" pb={2}>
      <Chart options={data.options} series={data.series} type="radialBar" />
    </Box>
  );
};

export default RadialBarCharts;
