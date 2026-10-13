import { useCallback, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Sort.css";

export function Sort({ value, options, onChange, label = "Sort by" }) {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(sortRef, closeMenu, isOpen);

  const selectedOption = options.find((option) => option.value === value);

  function handleSelect(optionValue) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <div className="sort" ref={sortRef}>
      <span className="sort__label">{label}</span>

      <button
        type="button"
        className="sort__trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sort__selected">
          {selectedOption?.label ?? "Select"}
        </span>

        <ChevronDown
          size={16}
          className={`sort__chevron ${isOpen ? "sort__chevron--open" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="sort__panel" role="listbox" aria-label={label}>
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`sort__option ${
                  isSelected ? "sort__option--selected" : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                <span>{option.label}</span>
                {isSelected && <Check size={16} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
