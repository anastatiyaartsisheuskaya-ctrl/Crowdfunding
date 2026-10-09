import { useState } from "react";
import { useGetFieldsQuery } from "../../modules/fields/api/fieldsApi";
import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import "./InvestPage.css";
import { Sort } from "../../shared/components/Sort/Sort";
import { Filter } from "../../shared/components/FIlter/Filter";

const initialFilters = {
  name: "",
  country: "",
  size: "",
  guidePrice: "",
};

const initialSort = "none";

export function InvestPage() {
  const [sort, setSort] = useState("none");
  const [filters, setFilters] = useState(initialFilters);

  const {
    data: fields = [],
    isLoading,
    isError,
  } = useGetFieldsQuery({ sort, filters });

  if (isLoading) return <main className="invest">Loading fields...</main>;
  if (isError) return <main className="invest">Failed to load fields.</main>;

  return (
    <div className="invest container">
      <div className="invest__toolbar">
        <Sort current={sort} onChange={setSort} />

        <Filter current={filters} onChange={setFilters} />
      </div>

      <section className="invest__grid">
        {fields.map((field) => (
          <Card className="invest-card" key={field.id}>
            <Card.Image src={field.image} alt={field.title} />

            <Card.Content className="invest-card__content">
              <h2 className="invest-card__title truncate">{field.title}</h2>

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
    </div>
  );
}
