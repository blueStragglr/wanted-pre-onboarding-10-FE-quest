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
    border: 2px solid;
    width: 500px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
`;

export const APIFormTitle = styled.h3`
    font-size: 40px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 2%;
`

export const Loading = styled.h3`
    font-size: 20px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 2%;
`

export const ResTextarea = styled.textarea`
    width: 90%;
    height: 300px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    resize: none;
    position: relative;
    top: 2%;
`

export const Button = styled.button`
    padding: 10px;
    width: 150px;
    height: 50px;
    position: relative;
    top: 60px;
    left: -10px;
    color: #01161E;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #124559;
    }

    &:active{
        background-color: #59679E;
        color: #eeeeee;
    }

    &.console{
        background-color: #D9CAC1;
        left: 20px;
        
        &:hover {
            background-color: #124559;
        }

        &:active{
            background-color: #59679E;
            color: #eeeeee;
        }
    }
`;