export const API_END_POINT =
  "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }
  throw new Error("요청 실패");
};

export const fetchPage2 = async () => {
  return await request(`${API_END_POINT}`);
};
