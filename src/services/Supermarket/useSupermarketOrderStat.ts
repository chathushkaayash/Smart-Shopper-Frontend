import { useEffect, useState } from "react";


const useFetchStats = (endpoint: string, supermarketId: number) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const currentMonth = new Date().getMonth() + 1;

  useEffect(() => {
    if (!supermarketId) {
      setError("Supermarket ID is required.");
      return;
    }

    fetch(`http://localhost:9090/${endpoint}?supermarketId=${supermarketId}&month=${currentMonth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        console.log(responseData, "response data");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });


  }, [endpoint, supermarketId, currentMonth]);

  return { data, error };
};


export const useSupermarketEarningsStats = (supermarketId: number) =>
  useFetchStats("supermarket_earnings_stats", supermarketId);


export const useSupermarketOrderStats = (supermarketId: number) =>
  useFetchStats("supermarket_order_stats", supermarketId);
