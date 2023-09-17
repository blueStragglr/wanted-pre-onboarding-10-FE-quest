import { useEffect, useState } from "react";
import * as S from "../styles/APIStyles";
import axios from "axios"

export default function APIPage() {
    const [data, setData] = useState();
    const API = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

    useEffect(() => {
        const getAPI = async () => {
            await axios.get(API).then((res) => {
                setData(res.data);
            }).catch((err) => console.log(err));
        }
        getAPI();
    }, []);

    return (
    <S.Wrapper>
        <S.Title>Black List</S.Title>
        {data?.map((el) => (
            <S.Item key={el?.id}>{el?.id}. {el?.name}</S.Item>
        ))}
    </S.Wrapper>)
}