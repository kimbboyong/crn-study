import styled from 'styled-components';
import Item from "./components/Item";


const Wrapper = styled.div`
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {

  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
}

export default App;
