import { createContext } from "react";

interface RouterContextProps {
  location: string;
}

export const RouterContext = createContext<RouterContextProps>({
  location: "",
});
