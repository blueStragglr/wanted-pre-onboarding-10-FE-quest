import React from "react";
import { Button, Container, Box, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 3, bgcolor: "success.light" }}>
            <VerifiedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            원티드 프리온보딩 사전과제
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{ width: "40%", mb: 3 }}
            onClick={() => {
              navigate("/login");
            }}
          >
            페이지1
          </Button>
          <Button
            variant="contained"
            sx={{ width: "40%", mb: 3 }}
            onClick={() => navigate("/mock")}
          >
            페이지2
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Main;
