import { useEffect } from "react";
import { useMap } from "react-leaflet";

export function MapController({ selectedField }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedField) return;

    const { latitude, longitude } = selectedField.location;

    map.flyTo([latitude, longitude], 12, {
      duration: 1.2,
    });
  }, [selectedField, map]);

  return null;
}
