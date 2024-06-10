import "./Geolocation.css";
import { useGeolocation } from "../../hooks/useGeolocation";

function Geolocation() {
  const { locationInfo, locationError } = useGeolocation();
  console.error(locationInfo, locationError);
  return (
    <div>
      <h1>Your Location</h1>
      <p>{locationInfo && (locationInfo as any).latitude}</p>
    </div>
  );
}

export default Geolocation;
