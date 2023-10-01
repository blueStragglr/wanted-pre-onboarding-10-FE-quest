import React from "react";
import ShowData from "@/components/ShowData";

const Get = async () => {
  const data = await getData();
  return <ShowData data={data} />;
};

export default Get;

const getData = async () => {
  const res = await fetch(
    "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
    { cache: "force-cache" }
  );

  return res.json();
};
