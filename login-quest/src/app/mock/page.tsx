"use client";
import React, { useEffect, useState } from "react";

type ResDataType = {
  id: string;
  name: string;
};

const MockPage = () => {
  const [data, setData] = useState<ResDataType[]>();

  const fetchData = async () => {
    const res = await fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock");
    setData(await res.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data?.map((el) => <li key={el.id}>{el.name}</li>)}</div>;
};

export default MockPage;
