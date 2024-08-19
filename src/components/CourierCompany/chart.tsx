import { Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"],
  datasets: [
    {
      label: "Customer Engagement",
      data: [20, 40, 50, 75, 40, 55, 75, 60, 70, 50, 60, 70],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const Graph = () => {
  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white" mt={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Customer Engagement</Text>
      <Line data={data} />
    </Box>
  );
};

export default Graph;
