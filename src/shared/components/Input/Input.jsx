import "./Input.css";

export function Input({
  startAdornment,
  endAdornment,
  className = "",
  ...props
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      {startAdornment && <span className="input__start">{startAdornment}</span>}

      <input className="input" {...props} />

      {endAdornment && <span className="input__end">{endAdornment}</span>}
    </div>
  );
}
