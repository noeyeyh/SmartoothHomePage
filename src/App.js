import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './routes/Home';
import Product from './routes/Product';
import AboutUs from './routes/AboutUs';

const GlobalStyle = styled.div`
  @font-face {
    font-family: 'AppleSDGothicNeoL';
    font-weight: 50;
    src: url('./fonts/APPLESDGOTHICNEOL.TTF') format('truetype');
  }

  /* Add any other global styles you need */
  body {
    font-family: 'AppleSDGothicNeoL', sans-serif;
  }
`;

const StyledRouter = styled(Router)`
  /* Add any styles for the router here */
`;

const App = () => {
  return (
    <GlobalStyle>
      <StyledRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledRouter>
    </GlobalStyle>
  );
};

export default App;