import React, { useEffect, useState } from 'react'

const API = () => {
    const [list, setList] = useState([]);

    const getApi = async () => {
        await fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock', { method: "GET" })
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((error) => console.log(error));

    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <main>
            <div className='api_list'>
                <h1>Api List</h1>
                <ol>
                    {
                        list.map((api) => (
                            <li key={api.id}>{api.name}</li>
                        ))
                    }
                </ol>
            </div>
        </main>
    )
}

export default API