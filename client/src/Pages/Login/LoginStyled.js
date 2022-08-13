import styled from "styled-components";
import loginBackground from "../../images/loginBackground.jpg";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${loginBackground});
    background-position: center;
    background-repeat: no-Repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`;

export const Wrapper = styled.div`
    height: 400px;
    width: 300px;
    background-color: rgba(41, 39, 39, 0.3);
    box-shadow: 0 5px 30px black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px 50px;
    gap: 20px;
`;

export const Title = styled.h2`
    font-size: 24px;
    color: white;
`;

export const MyInput = styled.div`
    padding: 0px 10px;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffffffb8;
`;

export const Input = styled.input`
    border: none;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: black;
    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: #3b5998;
    color: white;
    width: 107%;
`;

export const Link = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: white;
    cursor: pointer;
`;
