import React, { useState } from "react";
import axios from "axios";
import { Button, TextArea } from "semantic-ui-react";

function Mock() {
  const [data, setData] = useState("");

  function handleGetTestData() {
    fetch("http://localhost:3000/getTestData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data, null, 5));
        console.log(data);
      });
  }

  function handleAuthMock() {
    try {
      axios({
        url: `https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock`,
        method: "GET",
      })
        .then((data) => {
          if (data) {
            setData(JSON.stringify(data, null, 5));
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        color: "#000",
        padding: "50px",
        margin: "50px",
        borderRadius: "15px",
      }}
    >
      <h1>Mock</h1>
      <TextArea
        style={{ fontSize: "12px" }}
        placeholder="Tell us more"
        defaultValue={data}
        rows={21}
        cols={70}
      />
      <br />
      <br />
      <Button onClick={handleGetTestData}>getTestData</Button>
      <Button onClick={handleAuthMock}>AuthMock</Button>
    </div>
  );
}

export default Mock;
