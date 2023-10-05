import React from "react";
import styled from 'styled-components';

const KickstarterContainer = styled.div`
  position: relative;
  margin-top: 24vh;
  width: 100%;
  height: 70vmin;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  transition: 0.3s ease all;

  @media (max-width: 1300px) {
    height: 50vmin;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 80.4%;
    min-height: 80vw;
    height: 88vmin;
    margin-left: 9.8%;
    margin-bottom: 30%;

    @media (max-width: 1000px) {
      .text h1 {
        font-size: 2.7rem;
      }
    }
  }
`;

const TextContainer = styled.div`
  align-self: center;
  margin-left: 8%;
  width: 84%;

  @media (max-width: 767px) {
    margin: 0% 0% 0% 6%;
  }
`;

const Heading1 = styled.h1`
  font-size: 4.25rem;
  color: #15233f;
  font-family: 'AppleSDGothicNeoB';
  font-weight: normal;
  letter-spacing: -0.1rem;
  margin-bottom: -0.2vw;

  @media (max-width: 1300px) {
    font-size: 3.1rem;
  }

  @media (max-width: 767px) {
    font-size: 8vw;
  }
`;

const Image = styled.img`
  width: 44vmin;

  @media (max-width: 1300px) {
    width: 30%;
  }

  @media (max-width: 767px) {
    margin-top: 1vmin;
    width: 90.7%;
  }
`;

const Heading3 = styled.h3`
  margin-top: 6vw;
  font-size: 1.4rem;
  color: #747474;
  font-family: 'AppleSDGothicNeoM';
  font-weight: normal;
  letter-spacing: -0.01rem;

  @media (max-width: 767px) {
    font-size: 4vw;
  }
`;

const VideoWrap = styled.div`
  margin-left: 45vw;
  position: absolute;
  top: 16%;
  height: 80%;
  width: 46.5%;
  overflow: hidden;

  @media (max-width: 767px) {
    top: 0%;
    margin: 0;
    width: 100%;
    height: 54vmin;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

function Kickstarter() {
  return (
    <KickstarterContainer>
      <TextContainer>
        <Heading1>We are now in</Heading1>
        <Image src="img/KS.png" alt="KS" />
        <Heading3>
          Check the video for <br />
          more about SMARTOOTH
        </Heading3>
      </TextContainer>
      <VideoWrap>
        <VideoFrame
          id="video"
          src="https://www.youtube-nocookie.com/embed/mKNvUJWCH74"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></VideoFrame>
      </VideoWrap>
    </KickstarterContainer>
  );
}

export default Kickstarter;
