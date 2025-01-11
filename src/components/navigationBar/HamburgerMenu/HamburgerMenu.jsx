import { useNavigationUI } from "../../../contexts/NavigationUIContext";
import styles from "../NavigationBar.module.css";

function HamburgerMenu() {
  const { isSearchOpen, setIsSearchOpen, toggleNav } = useNavigationUI();
  return (
    <i
      className={`uil uil-bars ${styles.navOpenBtn}`}
      onClick={() => {
        if (isSearchOpen) {
          setIsSearchOpen(false);
        }
        toggleNav();
      }}
    ></i>
  );
}

export default HamburgerMenu;
