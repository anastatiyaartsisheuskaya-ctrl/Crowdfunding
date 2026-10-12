import { useState } from "react";
import { useGetFieldsQuery } from "../../modules/fields/api/fieldsApi";
import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import "./InvestPage.css";
import { Sort } from "../../shared/components/Sort/Sort";
import { Filter } from "../../shared/components/FIlter/Filter";
import { ErrorMessage } from "../../shared/components/ErrorMessage/ErrorMessage";
import { InvestPageSkeleton } from "./InvestPageSkeleton/InvestPageSkeleton";

const initialFilters = {
  name: "",
  country: "",
  size: "",
  guidePrice: "",
};

export function InvestPage() {
  const [sort, setSort] = useState("none");
  const [filters, setFilters] = useState(initialFilters);

  const {
    data: fields = [],
    isLoading,
    isError,
  } = useGetFieldsQuery({ sort, filters });

  if (isLoading) return <InvestPageSkeleton />;
  if (isError)
    return (
      <main className="invest container">
        <ErrorMessage
          type="error"
          message="We couldn't load the fields. Please try again later."
        />
      </main>
    );

  return (
    <main className="invest container">
      <div className="invest__toolbar">
        <Sort current={sort} onChange={setSort} />

        <Filter current={filters} onChange={setFilters} />
      </div>

      {fields.length === 0 && (
        <ErrorMessage type="empty" message="No fields found." />
      )}
      <section className="invest__grid">
        {fields.map((field) => (
          <Card className="invest-card" key={field.id}>
            <Card.Image src={field.image} alt={field.title} />

            <Card.Content className="invest-card__content">
              <div className="invest-card__title-wrapper">
                <h2 className="invest-card__title">{field.title}</h2>
              </div>

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
                  <Button
                    variant="link"
                    className="invest-card__invest"
                    type="button"
                  >
                    Reserve
                  </Button>
                )}
              </div>
            </Card.Content>
          </Card>
        ))}
      </section>
    </main>
  );
}
