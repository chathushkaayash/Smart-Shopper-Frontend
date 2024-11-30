import { useEffect, useState } from "react";
import useAuthStore from "@/state-management/auth/store";
import useUser from "@/services/User/useUser";
import useCurrentLocation from "@/hooks/useCurrentLocation";

const useOptimizer = () => {
  const [data, setData] = useState<any>(null); // Optimized cart data
  const [error, setError] = useState<string | null>(null); // Error state

  const { location, errorr: locationError } = useCurrentLocation(); // Get user's current location
  const { user: authUser } = useAuthStore(); // Authenticated user data
  const user = useUser([authUser?.id || 0])[0]?.data; // Fetch user data

  useEffect(() => {
    // Ensure both user and location data are available
    if (!user?.id || !location) {
      setError("User or location is not available.");
      return;
    }

    const userId = 1; // Extract user ID
    const userLocation = location; // Extract current location

    // Fetch data from the backend using query parameters
    fetch(`http://localhost:9090/optimizer?userId=${userId}&location=${encodeURIComponent(userLocation)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Optional for GET requests
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); // Update state with the response data
        setError(null); // Clear any previous error
      })
      .catch((err) => {
        setError(err.message); // Handle fetch errors
      });
  }, [user, location]); // Re-run effect when user or location changes

  return { data, error }; // Return optimized data and any error
};

export default useOptimizer;
