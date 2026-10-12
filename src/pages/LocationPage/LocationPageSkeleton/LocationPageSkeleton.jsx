import { Skeleton } from "../../../shared/components/Skeleton/Skeleton";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import "./LocationPageSkeleton.css";

export function LocationPageSkeleton() {
  const isTablet = useMediaQuery("(max-width: 1300px)");

  return (
    <main className="location container location-skeleton">
      <section className="location__search">
        <Skeleton className="location-skeleton__title" />
        <Skeleton className="location-skeleton__search" />
      </section>

      {isTablet && (
        <div className="location__switch">
          <Skeleton className="location-skeleton__switch-button" />
          <Skeleton className="location-skeleton__switch-button" />
        </div>
      )}

      <section className="location__map-section">
        <div className="location-skeleton__list-column">
          <div className="location__toolbar">
            <Skeleton className="location-skeleton__filter" />
          </div>

          <div className="location-skeleton__cards">
            {Array.from({ length: 3 }, (_, index) => (
              <article className="location-skeleton__card" key={index}>
                <Skeleton className="location-skeleton__image" />

                <div className="location-skeleton__card-content">
                  <div className="location-skeleton__card-text">
                    <Skeleton className="location-skeleton__card-title" />
                    <Skeleton className="location-skeleton__country" />
                  </div>

                  <Skeleton className="location-skeleton__shop-button" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <Skeleton className="location-skeleton__map" />
      </section>
    </main>
  );
}
