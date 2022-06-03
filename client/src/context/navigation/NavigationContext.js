import { useState, createContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [navTheme, setNavTheme] = useState("light");
  // const items = [
  //   { text: "home", path: "/" },
  //   { text: "services", path: "/services" },
  //   { text: "work", path: "/work" },
  // ];
  return (
    <NavigationContext.Provider value={{ navTheme, setNavTheme }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
