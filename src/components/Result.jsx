import React, { useState } from 'react'
import '../style/Result.css'

const Result = () => {
    const [result, setResult] = useState([]);

    const callMockAPI = () => {
        fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // 요청 헤더에 필요한 내용 추가
                // 추가적인 헤더도 필요하다면 여기에 추가
                },
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다.');
                }
                return response.json();
            })
            .then(data => {
                setResult(data);
                console.log(data);
            })
            .catch(error => {
                console.error('에러:', error);
        });
    }
    return (
        <div className='result-form'>
            <button onClick={callMockAPI}> mockAPI 호출하기</button>
            <ol className='result-list'>
            {result.map((item) => 
                <li key={item.id}>{item.name}</li>
            )}
            </ol>
        </div>
    )
}

export default Result
