import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50dvw;
    min-height: 100dvh;
    margin-top: 10px;
    position: relative;
`;

export const APIForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
    width: 500px;
    height: 500px;
    position: relative;
    top: 50%;
    left: 50%;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 2%;
`;