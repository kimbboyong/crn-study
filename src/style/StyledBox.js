import styled from 'styled-components';

export const GridTitle = styled.h2`
    margin-bottom: 15px;
    font-size: 20px;
`
export const Content = styled.div`
    figure {
        max-width: 150px;
        height: 120px;
        margin: 0 auto 15px;
        img {
            max-width: 100%;
            height: auto;
        }
    }
`
export const Result = styled.h2`
    font-size: 18px;
    font-weight: 500;
`

export const Win = styled.li`
    h2 {
        color: #0d6efd;
    } 

`

export const Lose = styled.li`
    h2 {
        color: #dc3545;
    }
    img {
        opacity: .5;
    }
`

export const Tie = styled.li`
    h2{
        color: #333;
    }
`