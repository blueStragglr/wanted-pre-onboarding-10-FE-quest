import { useContext } from "react";
import { RouterContext } from "../contexts/RouterContext";

type RouteProps = {
  path: string;
  component: React.ReactNode;
};
export default function Route({ path, component }: RouteProps) {
  const { location } = useContext(RouterContext);
  return location === path ? component : null;
}
