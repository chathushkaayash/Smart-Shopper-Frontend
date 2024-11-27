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
import useSupermarketEarnings from "@/hooks/useSupermarketEarnings";
// import useCustomerEngagement from "@/hooks/useCustomerEngagement";
// import useSmartShopperRevenue from "@/hooks/useSmartShopperRevenue";
// import useCourierCompanyEarnings from "@/hooks/useCourierCompanyEarnings";
// import useSalesData from "@/hooks/useSalesData";
// import useOrdersData from "@/hooks/useOrdersData";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

interface SupermarketEarning {
  name: string;
  earnings: number;
}

interface CustomerEngagement {
  name: string;
  engagementScore: number;
}

interface SmartShopperRevenue {
  storeName: string;
  revenue: number;
}

interface CourierCompanyEarning {
  companyName: string;
  earnings: number;
}

interface SalesData {
  product: string;
  sales: number;
}

interface OrdersData {
  orderId: string;
  totalAmount: number;
}

const AdminReports: React.FC = () => {
  const [reportType, setReportType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reportData, setReportData] = useState<any[] | null>(null);

  const padding = useBreakpointValue({ base: "4", md: "6" });

  const supermarketsEarningData = useSupermarketEarnings();
//   const customerEngagementData = useCustomerEngagement();
//   const smartShopperRevenueData = useSmartShopperRevenue();
//   const courierCompanyEarningData = useCourierCompanyEarnings();
//   const salesData = useSalesData();
//   const ordersData = useOrdersData();

  useEffect(() => {
    const fetchData = async () => {
      let data: any[] = [];

      if (reportType && startDate && endDate) {
        switch (reportType) {
          case "supermarketsEarning":
            data = supermarketsEarningData.data?.results || [];
            break;
        //   case "customerEngagement":
        //     data = customerEngagementData.data?.results || [];
        //     break;
        //   case "smartShopperRevenue":
        //     data = smartShopperRevenueData.data?.results || [];
        //     break;
        //   case "courierCompanyEarning":
        //     data = courierCompanyEarningData.data?.results || [];
        //     break;
        //   case "sales":
        //     data = salesData.data?.results || [];
        //     break;
        //   case "orders":
        //     data = ordersData.data?.results || [];
        //     break;
          default:
            data = [];
        }

        setReportData(data);
      }
    };

    fetchData();
  }, [reportType, startDate, endDate]);

  const generateReport = () => {
    if (!reportType || !startDate || !endDate || !reportData) {
      alert(
        "Please select a report type, date range, and ensure data is loaded."
      );
      return;
    }

    const doc = new jsPDF();
    // const logo = new Image();
    // logo.src = "../../assets/logo.svg";
    const title = `Report of: ${reportType}`;
    const dateRange = `From: ${startDate.toDateString()} - ${endDate.toDateString()}`;

    const headers: string[][] = [];
    const rows: any[][] = [];

    switch (reportType) {
      case "supermarketsEarning":
        headers.push(["Name", "Earnings"]);
        rows.push(...reportData.map((item: SupermarketEarning) => [item.name, item.earnings]));
        break;
      case "customerEngagement":
        headers.push(["Name", "Engagement Score"]);
        rows.push(...reportData.map((item: CustomerEngagement) => [item.name, item.engagementScore]));
        break;
      case "smartShopperRevenue":
        headers.push(["Store Name", "Revenue"]);
        rows.push(...reportData.map((item: SmartShopperRevenue) => [item.storeName, item.revenue]));
        break;
      case "courierCompanyEarning":
        headers.push(["Company Name", "Earnings"]);
        rows.push(...reportData.map((item: CourierCompanyEarning) => [item.companyName, item.earnings]));
        break;
      case "sales":
        headers.push(["Product", "Sales"]);
        rows.push(...reportData.map((item: SalesData) => [item.product, item.sales]));
        break;
      case "orders":
        headers.push(["Order ID", "Total Amount"]);
        rows.push(...reportData.map((item: OrdersData) => [item.orderId, item.totalAmount]));
        break;
      default:
        break;
    }

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
                <option value="customerEngagement">Customer Engagement</option>
                <option value="supermarketsEarning">Supermarket Earning</option>
                <option value="smartShopperRevenue">Smart Shopper Revenue</option>
                <option value="courierCompanyEarning">Courier Company Earning</option>
                <option value="sales">Sales</option>
                <option value="orders">Orders</option>
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
                isDisabled={
                  !reportType || !startDate || !endDate || !reportData
                }
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
