import { styled } from "styled-components";
import Header from "./components/Header";
import Product from "./pages/Product";


const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {
  return (
    <>
      <Header />
      <Inner>
        <Product />
      </Inner>
    </>
  );
}

export default App;
