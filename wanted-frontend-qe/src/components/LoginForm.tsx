// React
import { useState } from "react";

// CSS
import styles from "../styles/Login.module.css";

const FORM_VALUE = {
  id: "",
  password: "",
};

export default function LoginForm() {
  const [form, setForm] = useState(FORM_VALUE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = form;

    if (id.trim().length < 1) return alert("아이디를 입력해 주세요");
    if (password.trim().length < 1) return alert("비밀번호를 입력해 주세요");

    setForm(FORM_VALUE);

    console.log(`아이디: ${id} | 비밀번호: ${password}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className={styles["form"]}>
      <input
        id="id"
        type="text"
        name="id"
        placeholder="ID를 입력해 주세요"
        value={form.id}
        onChange={onChange}
        className={styles["input"]}
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        value={form.password}
        onChange={onChange}
        className={styles["input"]}
      />
      <button className={styles["button"]}>로그인</button>
    </form>
  );
}
