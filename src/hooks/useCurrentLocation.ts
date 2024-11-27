import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [errorr, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude.toFixed(4)},${longitude.toFixed(4)}`);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setError("User denied Geolocation access.");
          // Handle the case where the user denies location access (e.g., use a fallback location or ask them to enter manually)
        } else {
          setError(err.message);
        }
      }
    );
  }, []);

  return { location, errorr };
};

export default useCurrentLocation;
