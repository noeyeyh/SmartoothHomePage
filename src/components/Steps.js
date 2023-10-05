import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StepsContainer = styled.div`
  display: flex;
  margin-top: 10%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease all;
  overflow: hidden;

  @media (max-width: 1920px) {
    .Step1 {
      margin-top: 20%;
      align-self: flex-start;
      margin-left: 8vw;
    }
    .Step2 {
      margin-top: 20%;
      align-self: flex-end;
      z-index: 3;
      margin-right: 58vw;
    }
    .Step3 {
      margin-top: 30%;
      align-self: flex-start;
      margin-left: 8vw;
      z-index: 3;
    }
  }

  @media (max-width: 1300px) {
    .Steps {
      margin-top: 0%;
    }
    .Step1 {
      margin-top: 50%;
      align-self: flex-start;
      margin-left: 8vw;
    }
    .Step2 {
      margin-top: 20%;
      align-self: flex-end;
      z-index: 3;
      margin-right: 58vw;
    }
    .Step3 {
      margin-top: 30%;
      align-self: flex-start;
      margin-left: 18vw;
      z-index: 3;
    }
    h1 {
      font-size: 2.5vw;
    }
    .done {
      margin-top: 80%;
      font-size: 12vw;
      letter-spacing: +0.08rem;
    }
  }

  @media (max-width: 1100px) {
    .Step1 {
      margin-top: 30%;
      transform: none !important;
      opacity: 1 !important;
    }
    .Step2 {
      transform: none !important;
      opacity: 1 !important;
      margin-right: 58vw;
    }
    .Step3 {
      margin-top: 30%;
      transform: none !important;
      margin-left: 2vw;
      opacity: 1 !important;
    }
    .done {
      opacity: 1 !important;
    }
  }

  @media (max-width: 767px) {
    .Steps {
      margin-top: 25vmin;
    }
    .Steps img {
      position: absolute;
      width: 56vw;
      height: auto;
    }
    h1 {
      font-family: 'AppleSDGothicNeoR00';
      font-weight: 400;
      font-size: 7vmin;
      margin-top: 30.5vw;
    }
    .Step1Content div {
      font-family: 'AppleSDGothicNeoT00';
      font-weight: 300;
      transform: rotate(90deg);
      width: fit-content;
      font-size: 5vw;
      align-self: flex-end;
      margin: 10vw -5vw -5vw 0;
    }
    .Step2Content div {
      font-family: 'AppleSDGothicNeoT00';
      font-weight: 300;
      margin-left: -5vw;
      margin-top: 5vw;
      transform: rotate(-90deg);
      align-self: flex-start;
      width: fit-content;
      font-size: 5vw;
    }
    .Step3Content div {
      font-family: 'AppleSDGothicNeoT00';
      font-weight: 300;
      margin-right: -5vw;
      margin-top: 5vw;
      transform: rotate(90deg);
      width: fit-content;
      font-size: 5vw;
      align-self: flex-end;
    }
    .Step1Content {
      width: 80.4vw;
      height: 60vw;
      position: relative;
      flex-direction: column;
      margin-left: 0;
    }
    .Step2Content {
      width: 80.4vw;
      height: 60vw;
      position: relative;
      flex-direction: column;
      align-items: flex-end;
      margin: 0;
    }
    .Step3Content {
      width: 80.4vw;
      height: 60vw;
      position: relative;
      flex-direction: column;
      margin: 0;
    }
    .Step1Content h1 {
      text-align: end;
    }
    .Step3Content h1 {
      text-align: end;
    }
    .Step1 {
      margin: 0;
      margin-top: 10vmin;
      align-self: center;
    }
    .Step2 {
      margin: 0;
      margin-top: 5vmin;
      align-self: center;
    }
    .Step3 {
      margin: 0;
      margin-top: 10vmin;
      align-self: center;
    }
    .Step1Base {
      display: none;
    }
    .Step2Base {
      display: none;
    }
    .Step3Base {
      display: none;
    }
    .Steps h2 {
      margin-top: 30vmin;
      font-size: 12vw;
      letter-spacing: +0.05rem;
    }
  }
`;

const Step = styled.div`
  will-change: transform;
  will-change: opacity;
`;

const StepContent = styled.div`
  font-size: 1.4rem;
  color: #747474;
  font-family: 'AppleSDGothicNeoB';
  font-weight: 600;
  margin: 1vw 0;
`;

const Heading1 = styled.h1`
  font-size: 2.2rem;
  margin-top: -1.5vmin;
  font-family: 'AppleSDGothicNeoL';
`;

const Done = styled.h2`
  margin-top: 45%;
  color: #15233f;
  font-family: 'AppleSDGothicNeoM';
  align-self: center;
  font-size: 9.8rem;
  letter-spacing: 0.3rem;
`;

const Base = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #f7f7f7;
  z-index: ${props => props.zIndex};
`;

const Step1Base = styled(Base)`
  margin-top: -15vmin;
`;

const Step2Base = styled(Base)`
  margin-top: -9.5vmin;
`;

const Step3Base = styled(Base)`
  margin-left: 25vmin;
  margin-top: 17vmin;
`;

const Image = styled.img`
  width: 31.5vw;
  height: auto;
`;

const Steps = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [size, setSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const gap = (1890 - size.width) / 2;

  return (
    <StepsContainer>
      {/* Step 1 */}
      <Step
        className="Step1"
        style={{
          transform: `translateX(${(position - 2300) / 5}px)`,
          opacity: -((Math.abs(2200 - gap - position) - 360) / 300),
        }}
      >
        <Step1Base width="25vw" height="21vw" zIndex="-2" />
        <StepContent>
          <Image src="img/Step1.png" alt="Step1" />
          <div>STEP 1</div>
          <Heading1>Turn on the power</Heading1>
        </StepContent>
      </Step>

      {/* Step 2 */}
      <Step
        className="Step2"
        style={{
          transform: `translateX(${-(position - 2600) / 5}px)`,
          opacity: -((Math.abs(3000 - gap * 2 - position) - 360) / 300),
        }}
      >
        <Step2Base width="36.5vw" height="30vw" zIndex="3" />
        <StepContent>
          <Image src="img/Step2.png" alt="Step2" />
          <div>STEP 2</div>
          <Heading1>Make SMARTOOTH stick to your teeth</Heading1>
        </StepContent>
      </Step>

      {/* Step 3 */}
      <Step
        className="Step3"
        style={{
          transform: `translateX(${(position - 3400) / 5}px)`,
          opacity: -((Math.abs(3800 - gap * 3 - position) - 360) / 300),
        }}
      >
        <Step3Base width="42vw" height="20vw" zIndex="-3" />
        <StepContent>
          <Image src="img/Step3.png" alt="Step3" />
          <div>STEP 3</div>
          <Heading1>Record cavity status in mobile app</Heading1>
        </StepContent>
      </Step>

      {/* Done */}
      <Done
        className="done"
        style={{
          opacity: ((position - size.width) * 2 - 4400) / 600,
        }}
      >
        Done.
      </Done>
    </StepsContainer>
  );
};

export default Steps;