import React, { useState } from 'react';
import axios from 'axios';
import {Container, APIForm, Loading, ResTextarea,
    APIFormTitle, Button} from '../components/showAPI-styled';

const ShowAPI = () => {
    const [resData, setResData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleButton = () => {
        setLoading(true);

        axios
        .get('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock') // API 응답 데이터를 문자열로 변환
        .then((res) => {
            setResData(JSON.stringify(res.data, null, 2));
            setLoading(false);
            setError(null);

            
        })
        .catch((err) => {
            setResData(''); // 에러 발생 시 빈 문자열로 초기화
            setLoading(false);
            setError(err.message); // 에러 메시지 저장
        })
    }

    const DataToConsole = () => {
        console.log(resData);
    }

    return (
        <>
            <Container>
                <APIForm>
                    <APIFormTitle>Mock API</APIFormTitle>
                    {loading ? (
                    <ResTextarea readOnly/>
                    ) : error ? (
                        <Loading className="error">Error: {error}</Loading>
                    ) : (
                        <ResTextarea 
                        value={resData}
                        readOnly
                        />
                    )}
                    <Button onClick={handleButton}>데이터 출력</Button>
                    <Button onClick={DataToConsole} className="console">콘솔 출력</Button>
                </APIForm>
            </Container>
        </>
    )
}

export default ShowAPI;