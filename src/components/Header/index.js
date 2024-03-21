import { useState } from "react";
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

    const [active, setActive] = useState("/");

    return (
        <Wrapper>
            <List onClick={() => { setActive('/') }} className={active === '/' ? 'active' : ''}>
                <Link to="/">5DAYS</Link>
            </List>
            <List onClick={() => { setActive('/g') }} className={active === '/g' ? 'active' : ''}>
                <Link to="/g">GLOBAL</Link>
            </List>
        </Wrapper>
    )
}

export default Header;