import { useState, useEffect } from "react";
import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import { useNavigate } from "react-router";
import "./HomePage.css";
import { useGetFieldsQuery } from "../../modules/fields/api/fieldsApi";

export default function HomePage() {
  const { data: fields = [], isLoading, isError } = useGetFieldsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load fields</div>;
  }

  return (
    <main className="home container">
      <section className="hero">
        <h1 className="hero__title">
          Rent your own field, invest in farming,
          <br />
          and grow your own vegetables
        </h1>

        <Button
          className="hero__button"
          onClick={() => {
            navigate("/locations");
          }}
        >
          Let's start
        </Button>
      </section>

      <section className="fields">
        {fields.slice(0, 3).map((field) => (
          <Card key={field.id} className="field-card">
            <Card.Image src={field.image} alt={field.title} />

            <Card.Content className="field-card__content">
              <p>{field.title}</p>
            </Card.Content>
          </Card>
        ))}
      </section>
    </main>
  );
}
