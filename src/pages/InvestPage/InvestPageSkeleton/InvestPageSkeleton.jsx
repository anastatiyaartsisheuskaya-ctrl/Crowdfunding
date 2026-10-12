import { Skeleton } from "../../../shared/components/Skeleton/Skeleton";
import "./InvestPageSkeleton.css";

const SKELETON_CARDS = Array.from({ length: 6 });

export function InvestPageSkeleton() {
  return (
    <main className="invest container invest-skeleton">
      <div className="invest__toolbar">
        <Skeleton className="invest-skeleton__control" />
        <Skeleton className="invest-skeleton__control invest-skeleton__filter" />
      </div>

      <section className="invest__grid">
        {SKELETON_CARDS.map((_, index) => (
          <article className="invest-skeleton__card" key={index}>
            <Skeleton className="invest-skeleton__image" />

            <div className="invest-skeleton__content">
              <div className="invest-skeleton__title-wrapper">
                <Skeleton className="invest-skeleton__title" />
                <Skeleton className="invest-skeleton__title invest-skeleton__title--short" />
              </div>

              <Skeleton className="invest-skeleton__country" />

              <div className="invest-skeleton__size">
                <Skeleton className="invest-skeleton__size-text" />
                <div className="invest-skeleton__squares">
                  {Array.from({ length: 3 }, (_, squareIndex) => (
                    <Skeleton
                      className="invest-skeleton__square"
                      key={squareIndex}
                    />
                  ))}
                </div>
              </div>

              <Skeleton className="invest-skeleton__price" />

              <div className="invest-skeleton__actions">
                <Skeleton className="invest-skeleton__button" />
                <Skeleton className="invest-skeleton__button invest-skeleton__button--link" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
