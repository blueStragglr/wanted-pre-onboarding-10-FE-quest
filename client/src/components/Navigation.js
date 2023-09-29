import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", margin: "30px 0 -20px" }}>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          navigate("/mock");
        }}
      >
        Mock
      </Button>
    </div>
  );
}

export default Navigation;
