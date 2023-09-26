import { useEffect, useState } from 'react';

const MockPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {
          data?.map(({ id, name }) => (
            <li key={id}>{id} | {name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default MockPage