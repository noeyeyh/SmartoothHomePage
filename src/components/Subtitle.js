import React from 'react';
import styled from 'styled-components';

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-left: 8vw;
  transition: 0.3s ease all;

  @media (max-width: 767px) {
    margin: 10vh 0 0 0;
    align-items: center;
    z-index: 3;
  }
`;

const SubtitleH3 = styled.h3`
  font-family: 'AppleSDGothicNeoM';
  font-size: 2.5rem;

  @media (max-width: 1300px) {
    font-size: 2rem;
  }

  @media (max-width: 100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    font-family: 'AppleSDGothicNeoB';
    font-weight: normal;
    font-size: 5vmin;
    letter-spacing: -0.1vmin;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  margin-top: -3vh;
  background: #747474;

  @media (max-width: 767px) {
    width: 11.7vmin;
    height: 2px;
    margin-top: -2vmin;
    background: #747474;
    margin-bottom: -10vmin;
  }
`;

function Subtitle({ text }) {
  return (
    <SubtitleContainer>
      <h1>
        <br />
      </h1>
      <SubtitleH3>{text}</SubtitleH3>
      <Line />
    </SubtitleContainer>
  );
}

export default Subtitle;