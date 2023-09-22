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

export const Form = styled.form`
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

export const SignInTitle = styled.h2`
    font-size: 40px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 2%;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const InputTitle = styled.h2`
    display: block;
    font-family: 'Roboto Flex', sans-serif;
    text-align: left;
    position: relative;
    left: -15%;
    top: 15%;
    width: 100px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 5px;
    border: 0;
    border-bottom: 1px solid;
    width: 300px;
    font-size: 15px;
    position: relative;
    left: 20%;
    bottom: 10%;
`;

export const Button = styled.button`
    padding: 10px;
    width: 300px;
    height: 50px;
    position: relative;
    top: 80px;
    background-color: #48961E;
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
`;

export const ConsoleButton = styled.button`
    padding: 10px;
    width: 300px;
    height: 50px;
    position: relative;
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
`