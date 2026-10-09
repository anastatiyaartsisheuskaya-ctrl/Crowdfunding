import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "./FieldMarker.css";

const fieldIcon = L.divIcon({
  className: "field-marker",
  html: `
    <div class="field-marker__pin">
      <div class="field-marker__inner">🌱</div>
    </div>
  `,
  iconSize: [44, 52],
  iconAnchor: [22, 52],
  popupAnchor: [0, -48],
});

export function FieldMarker({ field, onSelect }) {
  const { latitude, longitude } = field.location;

  return (
    <Marker
      position={[latitude, longitude]}
      icon={fieldIcon}
      eventHandlers={{
        click: () => onSelect(field.id),
      }}
    >
      <Popup>{field.title}</Popup>
    </Marker>
  );
}
