import { Navigate, Outlet } from "react-router";
import { useGetMeQuery } from "../api/authApi";

export function ProtectedRoute() {
  const { data: user, isLoading, isFetching, isError } = useGetMeQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
