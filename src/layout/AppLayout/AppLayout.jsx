import { Outlet, useLocation } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./AppLayout.css";

export function AppLayout() {
  const { pathname } = useLocation();

  const layoutClass =
    pathname === "/" ? "app-layout--home" : "app-layout--default";

  return (
    <div className={`app-layout ${layoutClass}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
