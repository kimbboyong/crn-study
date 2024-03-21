import styled from 'styled-components';
import CurrentPage from "./pages/CurrentPage";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import GlobalPage from './pages/GlobalPage';


const Wrapper = styled.div`
    text-align: center;
    background: linear-gradient(180deg, rgba(21,134,236,1) 20%, rgba(170,227,244,1) 100%);
    height: 100vh;
`
const Inner = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`
function App() {
  return (
    <Wrapper>
      <Inner>
        <Header />

        <Routes>
          <Route path="/" element={<CurrentPage />} />
          <Route path="/g" element={<GlobalPage />} />
        </Routes>
      </Inner>
    </Wrapper>
  );

}

export default App;
