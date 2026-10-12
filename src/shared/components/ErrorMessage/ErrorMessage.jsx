import { CircleAlert, FaceSlightlyFrowning } from "lucide-react";
import "./ErrorMessage.css";

export function ErrorMessage({ message = "No data found", type = "empty" }) {
  const isError = type === "error";

  const Icon = isError ? CircleAlert : FaceSlightlyFrowning;

  return (
    <div
      className={`error-message error-message--${type}`}
      role={isError ? "alert" : "status"}
    >
      <div className="error-message__icon">
        <Icon size={28} strokeWidth={1.7} />
      </div>

      <div className="error-message__content">
        <h3 className="error-message__title">
          {isError ? "Something went wrong" : "Nothing here yet"}
        </h3>

        <p className="error-message__text">{message}</p>
      </div>
    </div>
  );
}
