import { NavLink } from "react-router";

export function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </nav>
    </div>
  );
}
