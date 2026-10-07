import "./Button.css";

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
