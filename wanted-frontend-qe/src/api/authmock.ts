export interface AuthMock {
  name: string;
  id: string;
}

export default async function getMockData(): Promise<AuthMock[]> {
  const res = await fetch(
    "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("서버통신이 실패 했어요 ㅜㅜ");
  }

  return data;
}
