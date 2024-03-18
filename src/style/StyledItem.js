import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 200px;
    background: #fff;
    padding: 20px;
    box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
`

export const Title = styled.h2`
    padding-bottom: 15px;
    font-size: 25px;
    font-weight: 500;
    color: #333;
`

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    li {
        width: 100%;
        border-right: 1px solid #ccc;
        &:last-child {
            border-right: none;
        }
    }
`
export const ButtonWraaper = styled.div`
    display: flex;
    justify-content: center;
    gap:20px;
    margin-top: 30px;

`

export const UserButton = styled.div`
    max-width: 100px;
    height: 100px;
    background: #fff;
    box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 15px;
    cursor: pointer;
        &:hover {
        border: 2px solid #0d6efd;
    }
        &:hover path {
        fill: #0d6efd;
    }
        svg {
        max-width: 100%;
        height: auto;
    }
`