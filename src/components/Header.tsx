import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Header = (props: Props) => {
  const linkList = [
    { path: "/", name: "login" },
    { path: "/mock", name: "mock" },
  ];
  return (
    <div>
      <header>
        <nav>
          <ul>
            {linkList.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Header;
