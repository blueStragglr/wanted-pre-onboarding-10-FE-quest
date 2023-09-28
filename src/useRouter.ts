import { useContext } from 'react';
import { RouterContext } from './components/Router';

type useRouterHookResult = {
  push: (path: string) => void;
  pathname: string;
};

export const useRouter = (): useRouterHookResult => {
  const value = useContext(RouterContext);
  if (value === null) {
    throw new Error('Router 컴포넌트 내부에서 호출해야 합니다.');
  }

  const { path: pathname, changePath } = value;

  const push = (path: string) => {
    changePath(path);
  };

  return {
    push,
    pathname,
  };
};
