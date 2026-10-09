import { Navigate, Outlet, useLocation } from "react-router";
import { Header } from "../Header/Header";
import { useGetMeQuery } from "../../auth/api/authApi";
import "./AppLayout.css";

export function AppLayout() {
  const { data: user, isLoading, isError } = useGetMeQuery();
  const { pathname } = useLocation();

  const layoutClass =
    pathname === "/" ? "app-layout--home" : "app-layout--default";

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={`app-layout ${layoutClass}`}>
      <Header />
      <Outlet />
    </div>
  );
}
