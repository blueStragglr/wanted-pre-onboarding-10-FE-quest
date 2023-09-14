import React, { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const { id, password } = form;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (id === "" || password === "") {
      alert("덜 씀");
      return;
    }

    console.log("string을 원하시나요", JSON.stringify(form));
    console.log("object를 원하시나요", form);
    setForm({ id: "", password: "" });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>✨ Login ✨</h1>
        <input
          type="text"
          name="id"
          value={id}
          placeholder="ID"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="PASSWORD"
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
