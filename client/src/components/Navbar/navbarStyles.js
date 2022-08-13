import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
    color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`;

export const User = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`;

export const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 12px;
font-weight: 300;
`;
