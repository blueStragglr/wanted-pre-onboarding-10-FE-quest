import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          style={{ marginRight: 15, textDecoration: "none", fontSize: 20 }}
        >
          Login
        </Link>
        <Link
          component={RouterLink}
          to="/mock"
          color="inherit"
          style={{ textDecoration: "none", fontSize: 20 }}
        >
          Mock API
        </Link>
      </Toolbar>
    </AppBar>
  );
}
