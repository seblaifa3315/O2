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
    /* filter: opacity(0.7); */
`;

export const Wrapper = styled.div`
    height: 500px;
    width: 300px;
    background-color: rgba(255, 255, 255, 1);
`

export const Title = styled.h1`
`
