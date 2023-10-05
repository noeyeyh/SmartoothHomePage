import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    /* background-color: chartreuse; */
    margin-top: 20vh;
    width: 40vw;

    @media (max-width: 900px) {
      /* background-color: chartreuse; */
      margin-top: 20vh;
      width: 100vw;
    }
  }
`;

const Loading = () => {
  return (
    <Base>
      <img src="img/logo_anim.gif" alt="anim" />
    </Base>
  );
};

export default Loading;