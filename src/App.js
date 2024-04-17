import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./components/Header";
import UserCreate from "./components/User/UserCreate";
import UserLogin from "./components/User/UserLogin";
import UserProtected from "./components/User/UserProtected";
import { auth } from "./firebase";
import Product from "./pages/Product";

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px 20px;
`;

function App() {
  const init = async () => {
    await auth.authStateReady();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Header />
      <Inner>
        <Routes>
          <Route
            path="/"
            element={
              <UserProtected>
                <Product />
              </UserProtected>
            }
          />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </Inner>
    </>
  );
}

export default App;
