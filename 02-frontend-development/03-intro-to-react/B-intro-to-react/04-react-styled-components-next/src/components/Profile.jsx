import styled from "styled-components";

import Avatar from "../assets/image/avatar-jessica.jpeg";

function Profile() {
  return (
    <Wrapper>
      <PhotoProfile>
        <img src={Avatar} alt="Photo profile image." />
      </PhotoProfile>
      <Name>Jessica Randall</Name>
      <Location>London, United Kingdom</Location>
      <Bio>&ldquo;Front-end developer and avid reader.&rdquo;</Bio>
    </Wrapper>
  );
}

const PhotoProfile = styled.div`
  margin-bottom: 32px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.p`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
`;

const Location = styled.p`
  margin-bottom: 32px;
  color: hsl(75, 94%, 57%);
  font-weight: 600;
`;

const Bio = styled.p`
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  ${Name}, ${Bio} {
    color: hsl(0, 0%, 100%);
  }

  ${Name}, ${Location}, ${Bio} {
    text-align: center;
  }
`;

export default Profile;
