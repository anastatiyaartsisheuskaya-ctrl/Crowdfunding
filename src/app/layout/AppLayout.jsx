import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
