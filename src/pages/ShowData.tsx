import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const ShowData:  React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(()=>{
        axios.get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
        .then((response)=>{
             console.log(response)
            setData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    return(
        <MainDiv>
            <Container>
            {data ? (
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>내용</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.content || '-'}</td>
                                <td>{item.date || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                "정보 없음"
            )}
            </Container>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    padding: 1rem 0;
    text-align: left;
`

const Table = styled.table`
    border-collapse: collapse; 
    width: 100%;
    cursor: pointer;
    
    th, td {
        border: 1px solid black; 
        padding: 8px 12px; 
        text-align: center;
        
    }
    
    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f5f5f5; 
    }
`;


export default ShowData;