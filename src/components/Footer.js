import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 50;

  @media (max-width: 767px) {
    z-index: 50;
  }
`;

const Base = styled.div`
  width: 84vw;
  margin-top: 5vh;
  margin-left: 8vw;

  @media (max-width: 767px) {
    color: black;
    margin-left: 10vw;
    margin-top: 10vh;
    z-index: 50;
    /* background-color: chartreuse; */
  }
`;

const H2 = styled.h2`
  font-family: 'AppleSDGothicNeoEB';
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 0.97;
  color: #1e3257;

  @media (max-width: 767px) {
    font-family: 'AppleSDGothicNeoL00';
    position: absolute;
    font-weight: 300;
    text-align: center;
    left: 50%;
    font-size: 6vmin;
    line-height: 0.97;
    transform: translate(-50%, -100%);
    color: #1e3257;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 32%;
  /* background-color: chartreuse; */

  @media (max-width: 767px) {
    margin-top: 12vmin;
    height: 32%;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`
const TextList = styled.div`
  /* margin-bottom: 1vmin; */
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    margin-bottom: 2vmin;
  }
`;

const Heading1 = styled.h1`
  font-family: 'AppleSDGothicNeoEB00';
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05rem;

  display: block;
  list-style-type: disc;
  padding-inline-start: 40px;

  @media (max-width: 767px) {
    font-family: 'AppleSDGothicNeoEB00';
    font-weight: bold;
    font-size: 4vmin;
    /* impo */
  }
`;

const Heading3 = styled.h3`
  font-family: 'AppleSDGothicNeoL00';
  font-weight: 400;
  font-size: 1rem;
  margin-top: 1.4vh;
  margin-left: 70px;
  width: 62vw;
  position: absolute;

  display: block;

  @media (max-width: 1300px) {
    left: 25%;
  }

  @media (max-width: 767px) {
    margin-top: 3.5%;
    font-family: 'AppleSDGothicNeoM00';
    font-weight: 400;
    left: 28%
    letter-spacing: -0.05vmin;
    font-size: 3.5vmin;
  }
`;

const Line = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    left: 50%;
    margin-top: 9vmin;
    transform: translate(-50%, -100%);
    width: 7%;
    height: 1px;
    background-color: #1e3257;
  }
`;

function Footer() {
  return (
    <Background>
      <Base>
        <H2>Contact us</H2>
        <Line />
        <Content>
          <TextList>
              <Heading1>Address</Heading1>
              <Heading3>
                509 Space Salim, 10 Noryagjin-ro, Dongjak-gu, Seoul, Republic of Korea
              </Heading3>
          </TextList>
          <TextList>
              <Heading1>Tel</Heading1>
              <Heading3>
                02 - 518 - 2842
              </Heading3>
          </TextList>
          <TextList>
              <Heading1>Email</Heading1>
              <Heading3>
                smartooth@smartooth.co
              </Heading3>
          </TextList>
          <TextList>
              <Heading1>Mobile</Heading1>
              <Heading3>
                010 - 8737 - 9558
              </Heading3>
          </TextList>
        </Content>
      </Base>
    </Background>
  );
}

export default Footer;
