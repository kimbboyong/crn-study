import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./components/Header";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Product from "./pages/Product";
import PrivateRoute from "./route/PrivateRoute";


const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px 20px;
`

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUserInfo) {
      setAuthenticate(true);
      setUserInfo(storedUserInfo)
    }
  }, [authenticate]);

  const onLogOut = () => {
    localStorage.removeItem('userInfo');
    setAuthenticate(false);
    setUserInfo({});
    navigate('/login');
  }




  return (
    <>
      <Header
        authenticate={authenticate}
        userInfo={userInfo}
        onLogOut={onLogOut}
      />
      <Inner>
        <Routes>
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
          <Route path="/mypage" element={<Mypage setAuthenticate={setAuthenticate} />} />
          <Route path="/" element={<Product />} />
          <Route path="/produc/:id" element={<PrivateRoute authenticate={authenticate} />} />
        </Routes>

      </Inner>
    </>
  );
}

export default App;
