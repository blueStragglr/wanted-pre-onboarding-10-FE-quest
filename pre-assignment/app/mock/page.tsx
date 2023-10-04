const MOCK_API = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

export default async function MockPage() {
  const userList = await fetchSomething(MOCK_API);

  return (
    <ul>
      {userList.map((user, i) => (
        <li key={`${i}-${user.id}`} className="flex gap-2">
          <span className="basis-6">{user.id}</span>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
}

type TUser = { name: string; id: string };
async function fetchSomething(API: string): Promise<TUser[]> {
  const result = await fetch(API, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  return result.json();
}
