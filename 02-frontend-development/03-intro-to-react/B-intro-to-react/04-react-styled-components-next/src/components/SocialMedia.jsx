import styled from "styled-components";

function SocialMedia() {
  return (
    <Wrapper>
      <Link href="">GitHub</Link>
      <Link href="">Frontend Mentor</Link>
      <Link href="">LinkedIn</Link>
      <Link href="">Twitter</Link>
      <Link href="">Instagram</Link>
    </Wrapper>
  );
}

const Link = styled.a`
  padding: 16px;
  border-radius: 8px;
  background-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  font-weight: 600;
  text-align: center;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export default SocialMedia;
