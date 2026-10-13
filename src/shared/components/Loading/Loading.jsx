import "./Loading.css";

export function Loading({ fullPage = false, label = "Loading..." }) {
  return (
    <div
      className={`loading ${fullPage ? "loading--full-page" : ""}`}
      role="status"
      aria-label={label}
    >
      <span className="loading__spinner" aria-hidden="true" />
      <span className="loading__label">{label}</span>
    </div>
  );
}
