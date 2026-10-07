import "./Card.css";

function Card({ className = "", children, ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardImage({ className = "", ...props }) {
  return <img className={`card__image ${className}`} {...props} />;
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`card__content ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.Image = CardImage;
Card.Content = CardContent;

export { Card };
