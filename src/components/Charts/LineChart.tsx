import Chart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

interface LineChartProps {
    width: string;
    ldata: number[];
    labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ width,ldata,labels }) => {
    const data = {
        series: [{
            name: 'No of Customers',
            data: ldata // Default data
        }],
        options: {
            chart: {
                id: 'basic-line',
                toolbar: {
                    show: false
                },
                height: '150', // Adjust the height as needed
                width: '100%' // Adjust the width as needed, '100%' for full width
            },
            colors: ['#ff7708'],
            xaxis: {
                categories: labels, // Default labels
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
