import styled from "styled-components";

import Profile from "./components/Profile";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <Wrapper>
      <Profile />
      <SocialMedia />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: fit-content;
  border-radius: 12px;
  background-color: hsl(0, 0%, 12%);
`;

export default App;
