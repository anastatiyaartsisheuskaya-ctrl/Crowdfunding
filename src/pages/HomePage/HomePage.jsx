import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import "./HomePage.css";

const features = [
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/280h/landscape-green_8SHYNROZFF.jpg",
    text: "Rent your own piece of farmland and watch your vegetables grow.",
  },
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/280h/landscape-green_8SHYNROZFF.jpg",
    text: "Enjoy, year after year, the wonders of nature with your rented vegetable farmland (60 sqm / 30 sqm).",
  },
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/280h/landscape-green_8SHYNROZFF.jpg",
    text: "Grow your own piece of land, from planting seeds in the lush soil to harvesting your own vegetables.",
  },
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero__title">
          Rent your own field, invest in farming,
          <br />
          and grow your own vegetables
        </h1>

        <Button className="hero__button">Let's start</Button>
      </section>

      <section className="features">
        {/* TODO: fix keys */}
        {features.map((feature) => (
          <Card key={feature.text} className="feature-card">
            <Card.Image src={feature.image} alt={feature.text} />

            <Card.Content className="feature-card__content">
              <p>{feature.text}</p>
            </Card.Content>
          </Card>
        ))}
      </section>
    </main>
  );
}
