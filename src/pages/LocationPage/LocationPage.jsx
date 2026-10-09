import { useState } from "react";
import { Input } from "../../shared/components/Input/Input";
import { Search } from "lucide-react";
import { Button } from "../../shared/components/Button/Button";
import "./LocationPage.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { FieldMarker } from "../../shared/components/Marker/FieldMarker";
import {
  useGetFieldsQuery,
  useLazyGetFieldDetailsQuery,
} from "../../modules/fields/api/fieldsApi";
import { LocationSearch } from "../../modules/location/ui/LocationSearch";
import { MapController } from "../../modules/location/halper/MapController";
import { Filter } from "../../shared/components/FIlter/Filter";
import { Card } from "../../shared/components/Card/Card";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";

export function LocationPage() {
  const [mapLocation, setMapLocation] = useState(null);
  const [select, setSelect] = useState(false);
  const [mode, setMode] = useState("map");

  const isTablet = useMediaQuery("(max-width: 1300px)");

  const [filters, setFilters] = useState({
    name: "",
    country: "",
    size: "",
    guidePrice: "",
  });

  const {
    data: fields = [],
    isLoading,
    isError: getError,
  } = useGetFieldsQuery({ sort: "none", filters });
  const [getFieldDetails, { data: selectedField, isFetching, isError, error }] =
    useLazyGetFieldDetailsQuery();

  const handleSelectField = (id) => {
    getFieldDetails(id);
    setSelect(true);
  };

  const drawData = selectedField && select ? [selectedField] : fields;
  // TODO fix
  if (isLoading || getError) return <p>Wait</p>;
  return (
    <main className="location container">
      <section className="location__search">
        <h1 className="location__title">Locations</h1>
        <LocationSearch onLocationFound={setMapLocation} />
      </section>
      {isTablet && (
        <div className="location__switch">
          <Button variant="link" onClick={() => setMode("list")}>
            Fields list
          </Button>
          <Button variant="link" onClick={() => setMode("map")}>
            Map
          </Button>
        </div>
      )}

      <section className="location__map-section">
        <div
          className="location__field-list"
          data-hidden={isTablet && mode !== "list"}
        >
          <div className="location__toolbar">
            <div>
              {select && (
                <Button variant="ghost" onClick={() => setSelect(false)}>
                  Reset
                </Button>
              )}
            </div>

            <Filter current={filters} onChange={setFilters} />
          </div>
          <div className="location__field-list">
            {drawData.map((field) => (
              <Card key={field.id} className="location__field-card">
                <Card.Image src={field.image} alt={field.title} />
                <Card.Content>
                  <div className="location__card-content">
                    <div className="location__card-text">
                      <h2 className="location__card-title">{field.title}</h2>
                      <p>{field.location.country}</p>
                    </div>
                    <Button variant="outline" className="location__shop-btn">
                      Shop
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <div className="location__map" data-hidden={isTablet && mode !== "map"}>
          <MapContainer
            center={[51.195, 0.064]}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <MapController location={mapLocation} />

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {fields.map((field) => (
              <FieldMarker
                key={field.id}
                field={field}
                onSelect={handleSelectField}
              >
                <Popup>{field.title}</Popup>
              </FieldMarker>
            ))}
          </MapContainer>
        </div>
      </section>
    </main>
  );
}
