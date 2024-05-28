import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>Hello, Styled Components!</Title>
    </Wrapper>
  );
}

const Title = styled.h1`
  color: #bf4f74;
  font-family: "Reddit Mono", monospace;
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default App;
