import React from "react";
import { Link } from "react-router-dom";

const LoginSlack = () => {
  return (
    <div>
      <Link
        to="https://slack.com/oauth?client_id=5794730101281.5767563338551&scope=users.profile:read,usergroups:read&redirect=https://ecnvoverflow.com/login"
        style={{ textDecoration: "none" }}
      >
        <div className="login-slack">
          Slack으로 로그인
          <img
            className="slack-icon"
            src="/icon/slack-icon.png"
            alt="slack-icon"
          />
        </div>
      </Link>
    </div>
  );
};

export default LoginSlack;
