import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
  useBreakpointValue,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import useAllOrders from "@/hooks/useAllOrders";
import useSupermarketEarnings from "@/hooks/useSupermarketEarnings";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const AdminReports: React.FC = () => {
  const [reportType, setReportType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reportData, setReportData] = useState<any[] | null>(null);

  const padding = useBreakpointValue({ base: "4", md: "6" });

  const ordersData = useAllOrders();

  const processOrdersData = (results: any[]) => {
    if (!results) return { labels: [], counts: [] };

    const groupedData: { [key: string]: number } = {};

    results.forEach((order) => {
      const orderDate = order.orderPlacedOn;
      if (orderDate?.year && orderDate?.month) {
        const year = orderDate.year;
        const month = String(orderDate.month).padStart(2, "0"); // Ensure two-digit month format
        const key = `${year}-${month}`;
        groupedData[key] = (groupedData[key] || 0) + 1;
      }
    });

    const sortedKeys = Object.keys(groupedData).sort();
    const labels = sortedKeys.map((key) => {
      const [year, month] = key.split("-");
      const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleString("default", {
        month: "long",
      });
      return `${monthName} ${year}`;
    });

    const counts = sortedKeys.map((key) => groupedData[key]);

    return { labels, counts };
  };

  useEffect(() => {
    if (reportType === "orders" && ordersData.data?.results) {
      const processedData = processOrdersData(ordersData.data.results);
      setReportData(processedData.labels.map((label, index) => ({
        label,
        count: processedData.counts[index],
      })));
    }
  }, [reportType, ordersData]);


  const supermarketsEarningData = useSupermarketEarnings();
  useEffect(() => {
  if (reportType === "supermarketsEarning" && supermarketsEarningData.data?.results) {
    setReportData(supermarketsEarningData.data.results.map((item) => ({
      label: item.name,
      count: item.earnings,
    })));
   
  }
}, [reportType, supermarketsEarningData]);

//smartShopperRevenue

// Assume startMonth and endMonth are inputs from the user, for example:
const startMonth = startDate ? startDate.getMonth() + 1 : 1;
const endMonth = endDate ? endDate.getMonth() + 1 : 12;

useEffect(() => {
  if (reportType === "smartShopperRevenue") {
    // Dummy data representing the revenue results for each month
    const dummyData = [
      { month: 1, earnings: 1000 },
      { month: 2, earnings: 1500 },
      { month: 3, earnings: 2000 },
      { month: 4, earnings: 2500 },
      { month: 5, earnings: 3000 },
      { month: 6, earnings: 3500 },
      { month: 7, earnings: 4000 },
      { month: 8, earnings: 4500 },
      { month: 9, earnings: 5000 },
      { month: 10, earnings: 5500 },
      { month: 11, earnings: 6000 },
      { month: 12, earnings: 6500 },
    ];

    // Map months to names
    const monthsMap = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Filter the dummyData to include only the months in the specified range
    const filteredData = dummyData.filter((item) => item.month >= startMonth && item.month <= endMonth);

    // Group data by month and calculate total earnings and 10% revenue
    const groupedByMonth = filteredData.reduce((acc: any, item: any) => {
      const month = monthsMap[item.month - 1]; // Map month number to name
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(item);
      return acc;
    }, {});

    // Process data and calculate monthly revenue and total earnings
    const processedData = Object.keys(groupedByMonth).map((month) => {
      const monthData = groupedByMonth[month];
      const totalEarnings = monthData.reduce((sum: number, item: any) => sum + item.earnings, 0);
      const monthRevenue = totalEarnings * 0.1; // 10% of total earnings for that month
      return {
        label: month,
        count: monthRevenue,
        totalEarnings: totalEarnings,
        revenue: monthRevenue,
      };
    });

    // Calculate summary: total earnings and revenue across the selected months
    const totalEarningsSummary = processedData.reduce((sum, data) => sum + data.totalEarnings, 0);
    const totalRevenueSummary = processedData.reduce((sum, data) => sum + data.revenue, 0);

    // Add a summary row for total earnings and revenue
    processedData.push({
      label: "Total Summary",
      count: totalRevenueSummary,
      totalEarnings: totalEarningsSummary,
      revenue: totalRevenueSummary,
    });

    setReportData(processedData);
  }
}, [reportType, startMonth, endMonth]);




  const generateReport = () => {
    if (!reportType || !startDate || !endDate || !reportData) {
      alert(
        "Please select a report type, date range, and ensure data is loaded."
      );
      return;
    }

    const doc = new jsPDF();
    const title = `Report of: ${reportType}`;
    const dateRange = `From: ${startDate.toDateString()} - ${endDate.toDateString()}`;

    const headers = [["Label", "Count"]];
    const rows = reportData.map((item) => [item.label, item.count]);

    doc.text(title, 10, 10);
    doc.text(dateRange, 10, 20);

    doc.autoTable({
      startY: 30,
      head: headers,
      body: rows,
    });

    doc.save(`${reportType}_report.pdf`);
  };

  return (
    <Box p={padding} maxW="container.xl" mx="auto">
      <Heading mb={6} size="md">
        Admin Report Generation
      </Heading>

      <VStack spacing={6} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={4}>
            Filter Reports
          </Heading>

          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel htmlFor="reportType">Report Type</FormLabel>
              <Select
                id="reportType"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">Select a report type</option>
                
                
                <option value="supermarketsEarning">Monthly Supermarket Earning</option>
                <option value="orders">Monthly Order Count</option>
                <option value="smartShopperRevenue">Smart Shopper Revenue</option>
                {/* <option value="courierCompanyEarning">Courier Company Earning</option>
                <option value="sales">Sales</option>
                <option value="customerEngagement">Customer Engagement</option> */}
                

              </Select>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="startDate">Start Date</FormLabel>
              <Input
                type="date"
                id="startDate"
                onChange={(e) =>
                  setStartDate(e.target.value ? new Date(e.target.value) : null)
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="endDate">End Date</FormLabel>
              <Input
                type="date"
                id="endDate"
                onChange={(e) =>
                  setEndDate(e.target.value ? new Date(e.target.value) : null)
                }
              />
            </FormControl>

            <HStack spacing={4}>
              <Button
                bg="primary"
                onClick={generateReport}
                isDisabled={!reportType || !startDate || !endDate || !reportData}
                color={"white"}
              >
                Generate Report
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default AdminReports;
