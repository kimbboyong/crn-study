import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.ul`
    display: flex;
    gap: 20px;
`

const List = styled.li`
    a {
        color: #fff;
        font-size: 20px;
        opacity: .5;
        font-weight: bold;
    }
    &.active {
        a {
            opacity:1;
        }
    }
    &:hover {
        a {
            opacity:1;
        }
    }
`


const Header = () => {

    return (
        <Wrapper>
            <List>
                <Link to="/">GLOBAL</Link>
            </List>
        </Wrapper>
    )
}

export default Header;