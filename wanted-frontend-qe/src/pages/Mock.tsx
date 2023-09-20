// React
import { useEffect, useState } from "react";

// CSS
import styles from "../styles/Mock.module.css";

// API
import { AuthMock } from "../api/authmock";
import getMockData from "../api/authmock";

// Components
import AuthCard from "../components/AuthCard";

export default function MockPage() {
  const [mocks, setMocks] = useState<AuthMock[]>();

  useEffect(() => {
    async function mockData() {
      const mocks = await getMockData();
      setMocks(mocks);
    }

    mockData();
  }, []);

  return (
    <ul className={styles["mock"]}>
      {mocks?.map((mock, _) => {
        return <AuthCard key={mock.id} mock={mock} />;
      })}
    </ul>
  );
}
