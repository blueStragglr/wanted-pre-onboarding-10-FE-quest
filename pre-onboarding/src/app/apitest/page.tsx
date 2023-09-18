import React from 'react';

interface DataProps {
    name: string;
    id: string;
}

const fetchData = async () => {
    const response = await fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock', {
        cache: 'no-store',
    });
    return response.json();
};

export default async function Apitest() {
    const data = (await fetchData()) as DataProps[];

    return (
        <section className="flex flex-col my-8 rounded-md  border-white border-2 border-spacing-4 p-8">
            <h1 className="my-2">API 테스트</h1>
            {data?.map((item) => (
                <ul key={item.id}>
                    <li>
                        {item.id} - {item.name}
                    </li>
                </ul>
            ))}
        </section>
    );
}
