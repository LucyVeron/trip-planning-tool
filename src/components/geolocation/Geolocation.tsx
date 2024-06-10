import "./Geolocation.css";
import { useGeolocation } from "../../hooks/useGeolocation";

interface Geo {
  locationInfo: GeolocationCoordinates | null;
  locationError: any;
}

function Geolocation() {
  const loc = useGeolocation() as Geo;

  return (
    <div>
      <h1>Your Location:</h1>
      {loc?.locationInfo ? (
        <>
          <div>
            <b>Lat:</b> {loc.locationInfo.latitude}
          </div>
          <div>
            <b>Lon:</b> {loc.locationInfo.longitude}
          </div>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Geolocation;
