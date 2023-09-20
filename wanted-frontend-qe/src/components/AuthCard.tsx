// CSS
import styles from "../styles/Mock.module.css";

// API
import { AuthMock } from "../api/authmock";

interface AuthCardProps {
  mock: AuthMock;
}

export default function AuthCard({ mock: { id, name } }: AuthCardProps) {
  return (
    <li className={styles["mock-item"]}>
      <p className={styles["mock-id"]}>{id}</p>
      <p className={styles["mock-name"]}>{name}</p>
    </li>
  );
}
