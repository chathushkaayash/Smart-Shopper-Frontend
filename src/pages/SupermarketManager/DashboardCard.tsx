import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
interface DashboardCardProps {
    title: string;
    content: string;
    icon : React.ReactNode;
    background?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content , icon ,background}) => {
    return (
        <Box w={'full'} 
        bg="white"
                borderRadius="xl"
                border={'1px solid'}
                borderColor={'gray.200'}
                shadow={'md'}

                p={4}>
            <Flex 
                justify={'center'}
                align={'space-between'}
            >
            <Box
                
                textAlign="left"
                w={'full'}
                
            >
                <Box fontSize="lg" fontWeight="semibold">
                    {title}
                </Box>
                <Box fontSize="2xl" fontWeight="bold">
                    {content}
                </Box>
            </Box>
            <Box
                bg={background}
                borderRadius="md"
                p={4}
                display={'flex'}
                alignItems={'center'}
                textAlign="center"
                justifyContent={'center'}
                
                >
                        {icon}
                </Box>
            </Flex>

        </Box>
    );
};

export default DashboardCard;