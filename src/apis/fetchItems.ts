export type Items = {
  id: number;
  name: string;
};

export const fetchItems = async () => {
  try {
    const res = await fetch(`https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock`);

    if (!res.ok) throw new Error('서버에 대한 요청이 실패했습니다.');

    return (await res.json()) as Items[];
  } catch (err) {
    console.error(err);
  }
};
