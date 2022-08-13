import styled from "styled-components";




export const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 12px;
    position: sticky;
    top: 0;
    @media (max-width: 768px) {
        flex: 0.5;
    }
`;

export const Wrapper = styled.div`
    padding: 10px 0px;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 5px;
    margin-bottom: 40px;
    font-size: 10px;
`;
export const Img = styled.img`
    height: 30px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px 10px;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Title = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`;



