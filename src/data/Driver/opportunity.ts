import { Opportunity } from "@/hooks/useOpportunity";

const opportunities: Opportunity[] = [
  {
    id: "1",
    opportunitysupermarket: [
      { id: "1", supermarketId: "New York" },
      { id: "2", supermarketId: "Los Angeles" },
    ],
    totalDistance: 100,
    tripCost: 1000,
    orderPlacedOn: "2021-09-01",
    customer: "John Doe",
    deliveryCost: 100,
    startLocation: "Moratuwa",
    deliveryLocation: "Nugegoda",
    status: "Pending",
  },
];

export default opportunities;
