import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Mock() {
  const [userList, setUserList] = useState(); // [1

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(response.data);
      console.log(userList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container style={{ marginTop: "30px", marginLeft: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Mock API
      </Typography>
      <List>
        {userList &&
          userList.map((user) => (
            <ListItem key={user.id}>{user.name}</ListItem>
          ))}
      </List>
    </Container>
  );
}
