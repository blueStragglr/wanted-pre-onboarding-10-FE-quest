import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Pagination,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const Mock = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
        );
        if (!res.ok) {
          throw new Error("API 요청이 실패했습니다.");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("API호출 오류!", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          LIST
        </Typography>
      </Box>
      <List
        sx={{
          mt: 3,
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {currentItems.map((item) => {
          return (
            <>
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.id} secondary={item.name} />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
      <Button sx={{ color: "black", mt: 2 }} onClick={() => navigate("/")}>
        ← 뒤로 가기
      </Button>
    </Container>
  );
};
export default Mock;
