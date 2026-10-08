import { useState } from "react";
import { NavLink } from "react-router";
import "./Header.css";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useGetMeQuery } from "../../auth/api/authApi";

export function Header() {
  const { data: user } = useGetMeQuery();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="container">
      <nav className={`header ${isOpen ? "header--open" : ""}`}>
        <div className="header__links">
          <NavLink to="/" end className="header__link" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/locations"
            end
            className="header__link"
            onClick={closeMenu}
          >
            Locations
          </NavLink>

          <NavLink to="/shop" end className="header__link" onClick={closeMenu}>
            Invests
          </NavLink>
        </div>

        <button
          className={`header__burger ${isOpen ? "header__burger--open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <div className="header__icon">
          <img src={user.image} alt="User icon" />
        </div>
      </nav>
    </header>
  );
}
