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

export const List = styled.li`
    cursor: pointer;
    figure {
        overflow: hidden;
        margin-bottom: 15px;
        img {
            max-width: 100%;
            transition: all .4s;
        }
    }

    strong,
    span {
        display: block;
        margin-bottom: 10px;
        color: #333;
    }
    em {
        display: block;
        color: #333
        font-weight: bold; 
    }

    &:hover figure img {
        transform: scale(1.1);
    }

`

export const Detail = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    figure {
        max-width: 450px;
        img {
            max-width: 100%;
        }
    }
    @media screen and (max-width: 1080px ) {
        flex-direction: column;
        align-items: center;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    strong {
        display: block;
        font-size: 30px;
        margin-bottom: 15px;
        @media screen and (max-width: 1080px ) {
            font-size: 22px;
        }
    }
`
export const Button = styled.div`
    width: 100%;
    background: #336EFD;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`