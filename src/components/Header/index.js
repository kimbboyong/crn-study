import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../../firebase";
import Search from "../Search";

const Wrapper = styled.div`
  margin: 30px 0 50px;
  position: relative;
`;

const Inner = styled.div`
  padding: 0 20px;
`;

const Sign = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
  a {
    font-size: 18px;
    color: #333;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.div`
  max-width: 100px;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }
`;
const List = styled.div`
  display: flex;
  gap: 20px;
  li {
    cursor: pointer;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const Header = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const logOut = () => {
    auth.signOut();
  };

  return (
    <Wrapper>
      <Inner>
        <Search />
        <Sign>
          <Link to="/">로그인</Link>
          <button onClick={logOut}>로그아웃</button>
        </Sign>

        <Content>
          <Logo>
            <img src="/images/logo.png" alt="" />
          </Logo>
          <List>
            {menuList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </List>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default Header;
