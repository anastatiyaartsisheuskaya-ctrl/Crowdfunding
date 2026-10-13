import { Navigate, Outlet } from "react-router";
import { useGetMeQuery } from "../api/authApi";
import { Loading } from "../../../shared/components/Loading/Loading";

export function ProtectedRoute() {
  const { data: user, isLoading, isFetching, isError } = useGetMeQuery();

  if (isLoading || isFetching) {
    return <Loading fullPage />;
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
