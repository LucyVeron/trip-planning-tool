import "./Geolocation.css";
import { useGeolocation } from "../../hooks/useGeolocation";

function Geolocation() {
  const { locationInfo, locationError } = useGeolocation();
  console.warn(locationInfo, locationError);
  return (
    <div>
      <h1>Your Location</h1>
      <p>{locationInfo && locationInfo}</p>
    </div>
  );
}

export default Geolocation;
