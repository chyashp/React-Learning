import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//we can export the context.provider from here- its just syntax change

export const ThemeProvider = ThemeContext.Provider;

//we can also make a custom hook

//just like when we use useContext and pass the context- we created custom hook for that - that we can use everywhere
export default function useTheme() {
  return useContext(ThemeContext);
}
