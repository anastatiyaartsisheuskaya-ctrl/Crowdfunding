import "./Sort.css";

const SORT_OPTIONS = [
  { value: "none", label: "None" },
  { value: "price-asc", label: "Guide price: cheapest first" },
  { value: "price-desc", label: "Guide price: most expensive first" },
  { value: "size-desc", label: "Size: biggest first" },
  { value: "size-asc", label: "Size: smallest first" },
];

export function Sort({ current, onChange }) {
  return (
    <div className="sort">
      <label className="sort__label" htmlFor="field-sort">
        Sort by
      </label>

      <select
        id="field-sort"
        className="sort__select"
        value={current}
        onChange={(event) => onChange(event.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
