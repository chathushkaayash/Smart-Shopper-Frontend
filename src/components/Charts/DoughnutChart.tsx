import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

const DoughnutChart: React.FC = () => {
    const data = {
        series: [20, 20, 60],
        options: {
            chart: {
                id: "basic-donut",
                width: '100%', // Ensure the chart spans the full width of its container
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%', // Adjust the size of the donut here
                    },
                },
            },
            colors: ['#ff7708', '#ff3308', '#ff9908'], 
            labels: ['Current Customers', 'New Customers','Visitors'], // Add labels to the chart
            width: 'full', // Set the width of the chart
            height:'full', // Set the height of the chart   
            legend: {
                position: 'bottom' as 'top' | 'right' | 'bottom' | 'left', // Positioning the legend at the bottom
                fontSize: '14px', // Setting the font size of the legend
            },
        },
    };

    return (
        <Box py={10} >
            <Chart options={data.options} series={data.series} type="donut" width="100%" />
        </Box>
    );
};

export default DoughnutChart;
