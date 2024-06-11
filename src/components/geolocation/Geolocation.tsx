import "./Geolocation.css";
import { useGeolocation } from "../../hooks/useGeolocation";

interface Geo {
  coords: GeolocationCoordinates | null;
  error: any;
}

function Geolocation() {
  const loc = useGeolocation() as Geo;

  return (
    <div>
      <h1>Your Location:</h1>
      {loc?.coords ? (
        <>
          <div>
            <b>Lat:</b> {loc.coords.latitude}
          </div>
          <div>
            <b>Lon:</b> {loc.coords.longitude}
          </div>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Geolocation;
