import { ChevronDown, Filter } from "lucide-react";
import { useGetFieldsQuery } from "../../modules/fields/api/fieldsApi";
import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import "./InvestPage.css";
import { useParams } from "react-router";

export function InvestPage() {
  const params = useParams();
  const { data: fields = [], isLoading, isError } = useGetFieldsQuery();

  if (isLoading) {
    return <main className="invest">Loading...</main>;
  }

  if (isError) {
    return (
      <main className="invest">
        <p>Failed to load fields.</p>
      </main>
    );
  }

  return (
    <div className="invest container">
      <div className="invest__toolbar">
        <div className="invest__sort">
          <span>Sort by</span>

          <button className="invest__sort-button" type="button">
            <p className="invest__status">{params?.sort ?? "None"}</p>
            <ChevronDown size={14} />
          </button>
        </div>

        <Button variant="outline" className="invest__filter" type="button">
          Filter
          <Filter size={15} />
        </Button>
      </div>

      <section className="invest__grid">
        {fields.map((field) => (
          <Card className="invest-card" key={field.id}>
            <Card.Image src={field.image} alt={field.title} />

            <Card.Content className="invest-card__content">
              <h2 className="invest-card__title">{field.title}</h2>

              <p className="invest-card__country">{field.location.country}</p>

              <div className="invest-card__size">
                <span>
                  Size: {field.size.value}
                  {field.size.unit}
                </span>

                <div className="invest-card__squares">
                  {Array.from({
                    length: field.size.value / 10,
                  }).map((_, index) => (
                    <span className="invest-card__square" key={index} />
                  ))}
                </div>
              </div>

              <p className="invest-card__price">
                {field.price.label}: {field.price.currency === "EUR" ? "€" : ""}
                {field.price.value}
              </p>

              <div className="invest-card__card-actions">
                {field.actions.canInvest && (
                  <Button
                    variant="outline"
                    className="invest-card__invest"
                    type="button"
                  >
                    Invest
                  </Button>
                )}

                {field.actions.canReserve && (
                  <Button variant="link" type="button">
                    Reserve
                  </Button>
                )}
              </div>
            </Card.Content>
          </Card>
        ))}
      </section>
    </div>
  );
}
