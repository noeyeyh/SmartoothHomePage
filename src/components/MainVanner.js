import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BaseStart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 2vmin;
  align-items: center;
  /* transition: 0.3s ease all; */

  @media (max-width: 767px) {
    margin-top: 8vmin;
  }
`;

const Base = styled.div`
  position: absolute;
  top: 13vw;
  height: 40vw;
  width: 84%;
  margin-left: 8%;

  @media (max-width: 1300px) {
    margin-left: 5%;
  }

  @media (max-width: 767px) {
    margin-left: 0%;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

const Heading3 = styled.h3`
  font-family: 'AppleSDGothicNeoSB';
  font-weight: normal;
  font-size: 1.5rem;
  color: #15233f;
  margin-top: 1.5vmin;

  @media (max-width: 1300px) {
    font-size: 1.5vw;
  }

  @media (max-width: 767px) {
    font-size: 3.8vw;
    color: #fff;
    text-align: center;
  }
`;

const Line = styled.div`
  margin-top: -1vh;
  width: 3%;
  height: 2px;
  background-color: #15233f;

  @media (max-width: 767px) {
    width: 7%;
    height: 1px;
    background-color: white;
  }
`;

const Text = styled.div`
  margin-left: 8vw;
  margin-top: 3.1vmin;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 30vw;

  @media (max-width: 767px) {
    margin-left: 0%;
    width: 84%;
    margin-top: 10vh;
  }
`;

const Heading1 = styled.h1`
  font-family: 'AppleSDGothicNeoEB';
  font-weight: normal;
  font-size: 3.5rem;
  color: #15233f;
  line-height: 120%;

  @media (max-width: 1300px) {
    font-size: 3vw;
  }

  @media (max-width: 767px) {
    letter-spacing: normal;
    font-size: 8.9vw;
    color: white;
  }
`;

const Subtitle = styled.div`
  font-family: 'AppleSDGothicNeoM';
  font-weight: normal;
  font-size: 1.5rem;
  color: #e8e8e8;
  margin-top: 1.5vmin;
  margin-bottom: 11vmin;
  letter-spacing: 0.03em;

  @media (max-width: 1300px) {
    font-size: 1.5vw;
  }

  @media (max-width: 767px) {
    font-size: 3.7vw;
    color: #fff;
    text-align: center;
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  left: 20%;
  margin-top: -10%;
  font-family: 'AppleSDGothicNeoEB00';
  font-weight: 800;
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  color: #15233f;

  @media (max-width: 1300px) {
    left: 20%;
    margin-top: -10%;
    margin-left: 1%;
    font-family: 'AppleSDGothicNeoEB';
    font-size: 1.1rem;
    color: #15233f;
  }

  @media (max-width: 767px) {
    margin: 0;
    position: absolute;
    text-align: center;
    line-height: 10vmin;
    font-size: 5.6vw;
    width: 20%;
    left: 50%;
    transform: translate(-50%);
    height: 10%;
    font-family: 'AppleSDGothicNeoEB';
    color: #15233f;
  }
`;

const LinkImage = styled.img`
  margin-left: 1.2vmin;
  margin-bottom: 0.2vmin;
  width: 3vmin;
`;


const ButtonBase = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #15233f;
  }
`;

const Button = styled.div`
  position: absolute;
  display: block;
  width: 30vmin;
  height: 15.9vmin;
  border-radius: 10vmin;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;

  @media (max-width: 767px) {
    display: block;
  }
`;


const Back = styled.img`
  width: 100%;
  background-size: cover;
  z-index: -1;

  @media (max-width: 767px) {
    left: -100%;
    width: 200%;
    margin-right: -100%;
    margin-top: -8%;
    filter: brightness(60%);
  }
`;

const MainVanner = () => {
  return (
    <BaseStart>
      <Back className="back" src="img/MainBG.jpeg" alt="back" />
      <Base>
        <Content>
          <Heading3>TAKE CONTROL</Heading3>
          <Line />
          <Text>
            <Heading1>
              The smallest dentist <br /> in my house
            </Heading1>
            <Subtitle>Now take care of your teeth more scientifically.</Subtitle>
          </Text>
        </Content>
      </Base>
      <Link to="/product" style={{ textDecoration: 'none', color: '#ffffff' }}>
        <ButtonBase>
          <Button />
          <LinkContainer>
            MORE
            <LinkImage src="img/arrow.png" alt="arrow" />
          </LinkContainer>
        </ButtonBase>
      </Link>
    </BaseStart>
  );
};

export default MainVanner;
