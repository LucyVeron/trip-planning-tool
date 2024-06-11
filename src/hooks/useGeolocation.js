import { useState } from "react";

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const { geolocation } = navigator;

  if (!error && !coords) {
    geolocation.getCurrentPosition(
      (res) => {
        setCoords(res.coords);
      }, (res) => {
        setError(res.message);
      });
  }

  return { error, coords };
};
