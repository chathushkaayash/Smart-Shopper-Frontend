import Chart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

interface LineChartProps {
    width: string;
}

const LineChart: React.FC<LineChartProps> = ({ width }) => {
    const data = {
        series: [{
            name: 'No of Customers',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 130, 160, 110, 120, 90, 80, 70, 60, 50, 55, 30, 80, 10, 5, 0, 100, 20, 30, 40, 50]
        }],
        options: {
            chart: {
                id: 'basic-line',
                toolbar: {
                    show: false
                },
                height: 400, // Adjust the height as needed
                width: '100%' // Adjust the width as needed, '100%' for full width
            },
            colors: ['#ff7708'],
            xaxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
            },
            
            
        }
    };

    return (
        <Box width={width} mt={2}>
            <Chart options={data.options} series={data.series} type="line" />
        </Box>
    );
};

export default LineChart;
