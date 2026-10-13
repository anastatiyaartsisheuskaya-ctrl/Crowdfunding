import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "../layout/AppLayout/AppLayout";
import { store } from "./store";
import { Provider } from "react-redux";
import { ProtectedRoute } from "../modules/auth/ui/ProtectedRoute";
import { lazy, Suspense } from "react";
import { Loading } from "../shared/components/Loading/Loading";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const LocationPage = lazy(() => import("../pages/LocationPage/LocationPage"));
const InvestPage = lazy(() => import("../pages/InvestPage/InvestPage"));

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading fullPage />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/locations" element={<LocationPage />} />
                <Route path="/shop" element={<InvestPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}
