import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../../../shared/components/Input/Input";
import { Button } from "../../../shared/components/Button/Button";
import "./LocationSearch.css";

export function LocationSearch({ onLocationFound }) {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const place = search.trim();
    if (!place) return;

    setIsSearching(true);
    setError("");

    try {
      const params = new URLSearchParams({
        q: place,
        format: "jsonv2",
        limit: "1",
      });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`,
      );

      if (!response.ok) {
        throw new Error("Location search failed.");
      }

      const results = await response.json();

      if (!results.length) {
        setError("Location not found. Try another search.");
        return;
      }

      onLocationFound({
        latitude: Number(results[0].lat),
        longitude: Number(results[0].lon),
        label: results[0].display_name,
      });
    } catch {
      setError("Couldn't search for this location. Please try again.");
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <form className="location__form" onSubmit={handleSubmit}>
      <Input
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        startAdornment={<Search width={22} height={22} />}
        placeholder="Search by city, country, village..."
        endAdornment={
          <Button
            type="submit"
            className="location__search-button"
            disabled={isSearching}
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        }
        className="location__input"
      />

      {error && <p className="location__form__error">{error}</p>}
    </form>
  );
}
