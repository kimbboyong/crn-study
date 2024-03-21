import styled from 'styled-components';

const Figure = styled.figure`
    width: 100%;
    max-width: 100px;
    img {
        max-width: 100%;
        height: auto;
    }
`


const Loading = () => {
    return (
        <Figure>
            <img src="./images/loading.gif" alt="" />
        </Figure>
    )
}

export default Loading;