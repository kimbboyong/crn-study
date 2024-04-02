import { Link, useNavigate } from "react-router-dom";
import Search from "../Search";
import { Content, Inner, LinkWrapper, List, Log, Logo, Mypage, Sign, UserInfo, Wrapper } from "./style/index";

const Header = ({ authenticate, onLogOut, userInfo, setQuery }) => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M HOME',
        'Sale',
        'redux-toolkit'
    ]
    const navigate = useNavigate();


    return (
        <Wrapper>
            <Inner>

                <Sign>
                    <>
                        {
                            authenticate ? (
                                <LinkWrapper>
                                    <UserInfo>
                                        <span>{userInfo?.username}</span> 님
                                    </UserInfo>
                                    <Mypage>
                                        <Link to='/mypage'>마이페이지</Link>
                                    </Mypage>
                                    <Log onClick={onLogOut}>
                                        로그아웃
                                    </Log>
                                </LinkWrapper>
                            ) :
                                (
                                    <LinkWrapper>
                                        <Log>
                                            <Link to='/login'>로그인</Link>
                                        </Log>
                                    </LinkWrapper>
                                )
                        }
                    </>
                </Sign>

                <Content>
                    <Logo onClick={() => { navigate('/') }}>
                        <img src="/images/logo.png" alt="" />
                    </Logo>
                    <List>
                        {
                            menuList.map((item, idx) =>
                                <li key={idx}>{item}</li>
                            )
                        }
                    </List>
                </Content>
                <Search setQuery={setQuery} />
            </Inner>
        </Wrapper>
    )
}

export default Header;