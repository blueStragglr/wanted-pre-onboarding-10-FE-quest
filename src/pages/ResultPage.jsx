import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResultPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then(response => setData(response.data)
      )
  }, []);

  return (
    <section className="page-result">
      <h2>Data Result</h2>
      <ul>
        {data.map((value, index) => {
          return (
            <li key={index}>
              <span>ID : {value.id}</span>
              <span>Name : {value.name}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ResultPage