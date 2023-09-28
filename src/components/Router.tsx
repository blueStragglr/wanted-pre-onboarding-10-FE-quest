import { ReactNode, createContext, useEffect, useState } from 'react';

type CreateContextProps = {
  path: string;
  changePath: (path: string) => void;
};

export const RouterContext = createContext<CreateContextProps>({
  path: '/',
  changePath: () => {},
});

type RouterProps = { children: ReactNode };

const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(window.location.pathname);
  const changePath = (path: string) => {
    window.history.pushState({ path }, '', path);
    setPath(path);
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      setPath(e.state?.path || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
