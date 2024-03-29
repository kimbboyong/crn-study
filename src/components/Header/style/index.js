import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin: 30px 0 50px;
    position: relative;
`

export const Inner = styled.div`
    padding: 0 20px;
`

export const Sign = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    a {
        color: #333;
    
    }
    em {
        font-weight: 400;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
`


export const Logo = styled.div`
    max-width: 100px;
    cursor: pointer;
    img {
        max-width: 100%;
        height: auto;
    }

`
export const List = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    li {
        cursor: pointer;
    }

        @media screen and (max-width: 1080px) {
 
        }
`

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const UserInfo = styled.div`
    span {
        color:#333;
        font-weight: bold;
    }
    
`
export const Mypage = styled.div`
    &:hover a {
            color:#336EFD;
        }`
export const Log = styled.div`
    cursor:pointer;
    &:hover {
        color: #dc3545;
    }
`
