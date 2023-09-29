import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Login() {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");

  async function handleLogin() {
    await console.log(`ID\t\t: ${id}`);
    await console.log(`PASSWD\t: ${passwd}\n\n`);
  }

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Form
      style={{
        backgroundColor: "#F9F9F9",
        padding: "50px",
        margin: "50px",
        borderRadius: "15px",
      }}
    >
      <Form.Field>
        <label>ID</label>
        <input
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
          value={id}
          onKeyPress={handleOnKeyPress}
        />
      </Form.Field>
      <Form.Field>
        <label>PASSWORD</label>
        <input
          placeholder="PASSWORD"
          type="password"
          onChange={(e) => setPasswd(e.target.value)}
          value={passwd}
          onKeyPress={handleOnKeyPress}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions." />
      </Form.Field>
      <div style={{ textAlign: "center" }}>
        <Button type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Login;
