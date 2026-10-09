import { useState } from "react";
import { Filter as FilterIcon } from "lucide-react";
import { Button } from "../Button/Button";
import "./Filter.css";

export function Filter({ current, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    onChange({
      ...current,
      [name]: value,
    });
  }

  function resetFilters() {
    onChange({
      name: "",
      country: "",
      size: "",
      guidePrice: "",
    });
  }

  return (
    <div className="filter">
      <Button
        type="button"
        variant="outline"
        className="filter__trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        Filter
        <FilterIcon size={15} />
      </Button>

      {isOpen && (
        <div className="filter__panel">
          <div className="filter__field">
            <label htmlFor="filter-name">Name</label>
            <input
              id="filter-name"
              name="name"
              type="text"
              value={current.name}
              onChange={handleChange}
              placeholder="Field name"
            />
          </div>

          <div className="filter__field">
            <label htmlFor="filter-country">Country</label>
            <input
              id="filter-country"
              name="country"
              type="text"
              value={current.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>

          <div className="filter__field">
            <label htmlFor="filter-size">Size (sqm)</label>
            <input
              id="filter-size"
              name="size"
              type="number"
              min="0"
              value={current.size}
              onChange={handleChange}
              placeholder="Size"
            />
          </div>

          <div className="filter__field">
            <label htmlFor="filter-guide-price">Guide price (€)</label>
            <input
              id="filter-guide-price"
              name="guidePrice"
              type="number"
              min="0"
              value={current.guidePrice}
              onChange={handleChange}
              placeholder="Guide price"
            />
          </div>

          <div className="filter__actions">
            <Button type="button" variant="ghost" onClick={resetFilters}>
              Reset
            </Button>

            <Button type="button" onClick={() => setIsOpen(false)}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
