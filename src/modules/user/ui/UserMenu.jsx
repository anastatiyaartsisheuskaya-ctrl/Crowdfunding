import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LogOut, Mail } from "lucide-react";
import { Button } from "../../../shared/components/Button/Button";
import { logout } from "../../auth/model/authSlice";
import { useClickOutside } from "../../../shared/hooks/useClickOutside";
import "./UserMenu.css";

export function UserMenu({ user, isOpen, onClose }) {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeMenu = useCallback(() => {
    onClose(false);
  }, []);

  useClickOutside(menuRef, closeMenu, isOpen);

  function handleLogout() {
    dispatch(logout());
    onClose?.();
    navigate("/login");
  }

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-menu__header">
        <div className="user-menu__avatar" aria-hidden="true">
          <img src={user.image} alt="User icon" loading="lazy" />
        </div>

        <p className="user-menu__name">
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <div className="user-menu__divider" />

      <div className="user-menu__details">
        <Mail size={16} aria-hidden="true" />
        <span>{user?.email}</span>
      </div>

      <Button
        variant="outline"
        className="user-menu__logout"
        onClick={handleLogout}
      >
        <LogOut size={16} aria-hidden="true" />
        Log out
      </Button>
    </div>
  );
}
