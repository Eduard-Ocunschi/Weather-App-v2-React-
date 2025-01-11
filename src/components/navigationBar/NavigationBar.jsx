import { useNavigationUI } from "../../contexts/NavigationUIContext";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import SearchBox from "./SearchBox/SearchBox";
import Logo from "./Logo/Logo";
import styles from "./NavigationBar.module.css";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function NavigationBar() {
  const { isNavOpen, isSearchOpen } = useNavigationUI();

  return (
    <nav
      className={`${styles.nav} ${isNavOpen ? styles.openNav : ""} ${
        isSearchOpen ? styles.openSearch : ""
      }`}
    >
      <HamburgerMenu />
      <Logo />
      <NavigationMenu />
      <SearchBox />
    </nav>
  );
}

export default NavigationBar;
