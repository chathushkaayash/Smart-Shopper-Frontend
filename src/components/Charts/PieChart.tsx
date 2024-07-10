import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Heading,Box,Center } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props{
  title: string;
};

const data = {
  labels: ['Cargills', 'keells', 'Arpico', 'Glomark', 'Others'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 0, 0, 1)',     // Cargills
        'rgba(0, 128, 0, 1)',     // Keells
        'rgba(0, 0, 255, 1)',     // Arpico
        'rgba(255, 165, 0, 1)',   // Glomark
        'rgba(128, 0, 128, 1)',   // Others
        
      ],
      borderColor: [
        'rgba(255, 0, 0, 0.2)',   // Cargills
        'rgba(0, 128, 0, 0.2)',   // Keells
        'rgba(0, 0, 255, 0.2)',   // Arpico
        'rgba(255, 165, 0, 0.2)', // Glomark
        'rgba(128, 0, 128, 0.2)', // Others
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      
    },
  },
};

const PieChart: React.FC<Props> = ({ title }) => {
  return (

<Box p={10} shadow='md'>
      
<Heading as='h3' size='lg' >
  {title}
</Heading>


<Center>
<Box height="300px" width={"auto"} > 
<Pie data={data} options={options}/>
</Box>
</Center>

</Box>
  );
};

export default PieChart;
