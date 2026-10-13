import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import "./Header.css";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useGetMeQuery } from "../../modules/auth/api/authApi";
import { UserMenu } from "../../modules/user";

export function Header() {
  const { data: user } = useGetMeQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const layoutClass =
    pathname === "/" ? "header__links--home" : "header__links--default";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header container">
      <nav className={`header__nav ${isOpen ? "header--open" : ""}`}>
        <div className={`header__links ${layoutClass}`}>
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
      </nav>
      <div className="header__profile">
        <div
          className="header__icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={user.image} alt="User icon" loading="lazy" />
        </div>
        {isMenuOpen && (
          <UserMenu
            user={user}
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
