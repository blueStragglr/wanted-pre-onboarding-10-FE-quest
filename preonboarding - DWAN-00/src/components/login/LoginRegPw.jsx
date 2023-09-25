import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";

const LoginReg = ({ isValidPassword }) => {
  const [pwReg, setPwReg] = useState("");

  useEffect(() => {
    if (isValidPassword) {
      setPwReg("");
    }
  }, [isValidPassword]);

  return (
    <div>
      {!isValidPassword && <p className="invalid-password-message"></p>}
    </div>
  );
};

export default LoginReg;
