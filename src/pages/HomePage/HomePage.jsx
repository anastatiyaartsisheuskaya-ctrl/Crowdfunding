import { Button } from "../../shared/components/Button/Button";
import { Card } from "../../shared/components/Card/Card";
import { useNavigate } from "react-router";
import "./HomePage.css";
import { useGetFieldsQuery } from "../../modules/fields/api/fieldsApi";
import { ListSkeleton } from "./ListSkeleton/ListSkeleton";
import { ErrorMessage } from "../../shared/components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const { data: fields = [], isLoading, isError } = useGetFieldsQuery();
  const navigate = useNavigate();

  return (
    <main className="home container">
      <section className="home__hero">
        <h1 className="home__title">
          Rent your own field, invest in farming, and grow your own vegetables
        </h1>

        <Button
          className="home__button"
          onClick={() => {
            navigate("/locations");
          }}
        >
          Let's start
        </Button>
      </section>

      <section className="fields">
        {isLoading ? (
          <ListSkeleton />
        ) : isError ? (
          <ErrorMessage
            type="error"
            message="We couldn't load the fields. Please try again later."
          />
        ) : fields.length > 0 ? (
          fields.slice(0, 3).map((field) => (
            <Card key={field.id} className="field-card">
              <Card.Image src={field.image} alt={field.title} />
              <Card.Content className="field-card__content">
                <p>{field.title}</p>
              </Card.Content>
            </Card>
          ))
        ) : (
          <ErrorMessage type="empty" message="No fields found." />
        )}
      </section>
    </main>
  );
}
