import { Box } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const data={
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Keells', 'Cargills', 'Arpico', 'Glomark', 'Spar'],
      colors: ['#FF4768', '#1E90FF', '#FFD700', '#00CED1', '#8A2BE2'],
      legend: {
        position: 'bottom', // Positioning the legend at the bottom
        fontSize: '14px', // Setting the font size of the legend
    },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
        }
      }]
      
    }
  }
  return (
    <Box  width="100%" pb={2}>
      <Chart options={data.options} series={data.series} type="pie"/>
      
    </Box>
  )
}

export default PieChart
