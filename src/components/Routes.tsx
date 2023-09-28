import { ReactNode, isValidElement, useContext } from 'react';
import { RouterContext } from './Router';

export type RouteProps = {
  path: string;
  component: ReactNode;
};

const Routes = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const { path } = useContext(RouterContext);

  const childArray = Array.isArray(children) ? children : [children];

  const renderComponent = (component: ReactNode) => {
    if (!isValidElement<RouteProps>(component)) return false;
    return component.props.path === path;
  };
  return <>{childArray.find(renderComponent)}</>;
};

export default Routes;
