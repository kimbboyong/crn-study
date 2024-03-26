import { styled } from "styled-components";

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`