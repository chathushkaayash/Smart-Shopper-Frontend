import { useEffect, useState } from "react";


const useFetchStats = (endpoint: string, supermarketId: number) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!supermarketId) {
      setError("Supermarket ID is required.");
      return;
    }

    fetch(`http://localhost:9090/${endpoint}?supermarketId=${supermarketId}`, {
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


  }, [endpoint, supermarketId]);

  return { data, error };
};


export const useSupermarketMonthlyEarnings = (supermarketId: number) =>
  useFetchStats("get_supermarket_monthly_earnings", supermarketId);



