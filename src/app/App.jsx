import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./layout/AppLayout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
