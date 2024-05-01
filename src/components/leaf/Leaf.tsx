import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Leaf.css";
import { Icon } from "leaflet";
import { useState } from "react";

function LocationMarker() {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
  });
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click: (e: any) => {
      map.locate();
      // map.flyTo(e.latlng, map.getZoom());
      setPosition(e.latlng);
    }
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Leaf() {
  return (
    <MapContainer center={[48.864716, 2.349014]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Leaf;
