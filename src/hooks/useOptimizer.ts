import { useEffect, useState } from "react";
import useAuthStore from "@/state-management/auth/store";
import useUser from "@/services/User/useUser";
import useCurrentLocation from "@/hooks/useCurrentLocation";

const useOptimizer = () => {
  const [data, setData] = useState<any>(null); 
  const [error, setError] = useState<string | null>(null); 

  
  const { location, errorr: locationError } = useCurrentLocation();
  console.log(locationError);
  
  const { user: authUser, logout } = useAuthStore();
  console.log(logout);
  
  const user = useUser([authUser?.id || 0])[0].data;

  useEffect(() => {
    
    if (!user?.id || !location) {
      setError("User or location is not available.");
      return;
    }

    const userId = user.id;
    const currentLocation = location;

    const requestBody = {
      userId,
      currentLocation,
    };

    // Fetch data from backend
    fetch("http://localhost:8080/optimizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); 
        setError(null);
      })
      .catch((err) => {
        setError(err.message); 
      });
  }, [user, location]); 

  
  return { data, error };
};

export default useOptimizer;
