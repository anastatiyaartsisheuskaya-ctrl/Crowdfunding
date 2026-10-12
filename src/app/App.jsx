import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "../modules/layout";
import HomePage from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { LocationPage } from "../pages/LocationPage/LocationPage";
import { InvestPage } from "../pages/InvestPage/InvestPage";
import { store } from "./store";
import { Provider } from "react-redux";
import { ProtectedRoute } from "../modules/auth/ui/ProtectedRoute";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  );
}
