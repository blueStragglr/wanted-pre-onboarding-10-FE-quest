import { createContext, useReducer, useContext } from 'react';

type Pages = 'signin' | 'main';

type actions = {
  type: 'SET_PAGE';
  payload: Pages;
};

const DEFAULT_PAGE = 'signin';
const PageContext = createContext<Pages>(DEFAULT_PAGE);
const PageDispatchContext = createContext<React.Dispatch<actions>>(() => {});

const pageReducer = (state: Pages, action: actions) => {
  switch (action.type) {
    case 'SET_PAGE':
      return (state = action.payload);
    default:
      return state;
  }
};

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, dispatch] = useReducer(pageReducer, DEFAULT_PAGE);

  return (
    <PageContext.Provider value={page}>
      <PageDispatchContext.Provider value={dispatch}>{children}</PageDispatchContext.Provider>
    </PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};

export const usePageDispatch = () => {
  return useContext(PageDispatchContext);
};
