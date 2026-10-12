import "./Sort.css";

const SORT_OPTIONS = [
  { value: "none", label: "None" },
  { value: "price-asc", label: "Cheapest" },
  { value: "price-desc", label: "Expensive" },
  { value: "size-desc", label: "Biggest" },
  { value: "size-asc", label: "Smallest" },
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
