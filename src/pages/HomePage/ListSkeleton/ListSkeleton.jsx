import { Skeleton } from "../../../shared/components/Skeleton/Skeleton";
import "./ListSkeleton.css";

export function ListSkeleton() {
  return (
    <section className="fields list-skeleton">
      {Array.from({ length: 3 }, (_, index) => (
        <article className="list-skeleton__card" key={index}>
          <Skeleton className="list-skeleton__image" />

          <div className="list-skeleton__card-content">
            <Skeleton className="list-skeleton__card-title" />
          </div>
        </article>
      ))}
    </section>
  );
}
