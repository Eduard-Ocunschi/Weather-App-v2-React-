import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const NavigationUIContext = createContext();

function NavigationUIProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = useCallback(() => setIsNavOpen((value) => !value), []);

  const toggleSearch = useCallback(
    () => setIsSearchOpen((value) => !value),
    []
  );

  const sideBarRef = useRef();

  const handleClickOutside = useCallback((e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsNavOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <NavigationUIContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        isSearchOpen,
        setIsSearchOpen,
        toggleNav,
        toggleSearch,
        sideBarRef,
      }}
    >
      {children}
    </NavigationUIContext.Provider>
  );
}

function useNavigationUI() {
  const context = useContext(NavigationUIContext);
  if (context === undefined)
    throw new Error(
      "NavigationUIContext was used outside the NavigationUIProvider"
    );
  return context;
}

export { NavigationUIProvider, useNavigationUI };
