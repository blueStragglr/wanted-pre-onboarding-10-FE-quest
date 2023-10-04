import { useState, useEffect } from "react";
import { RouterContext } from "../contexts/RouterContext";

export default function Router({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const onpopstate = () => setLocation(window.location.pathname);
    window.addEventListener("popstate", onpopstate);
    return () => window.removeEventListener("popstate", onpopstate);
  }, []);

  const contextValue = {
    location,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}
