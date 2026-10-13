import { useEffect } from "react";
import { useMap } from "react-leaflet";

export function MapController({ location }) {
  const map = useMap();

  useEffect(() => {
    if (!location) return;

    map.flyTo([location.latitude, location.longitude], 10, { duration: 1.2 });
  }, [location, map]);

  return null;
}
