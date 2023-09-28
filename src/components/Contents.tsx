import { useEffect, useState } from 'react';
import { useRouter } from '../useRouter';

type ContentsResponseType = {
  name: string;
  id: string;
};

const Contents = () => {
  const [contents, setContents] = useState<ContentsResponseType[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const list = await fetch(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
      ).then((res) => res.json());

      setContents(list);
    };
    fetchData();
  }, []);

  return (
    <article>
      <p>User List</p>
      <ul className="list">
        {contents.map((item) => (
          <li key={item.id}>
            <span>{item.id}.</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/')}>back</button>
    </article>
  );
};

export default Contents;
