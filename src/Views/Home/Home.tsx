import React from 'react';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledDescription, StyledImage, StyledImageContainer, StyledIntroContainer, StyledLogo } from './HomeStyles';

const Home: React.FC = () => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src="https://res.cloudinary.com/dorwcwygq/image/upload/v1636226767/wtyker/home_fvomsv.webp" alt="shopping list" />
      </StyledImageContainer>
      <StyledIntroContainer>
        <StyledLogo src="https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_1_ln9ki6.png" alt="big Wtyker logo" />
        <StyledDescription>Zrób zakupy we Wtykerze</StyledDescription>
        <StyledDescription>w wybuchowo niskich cenach!</StyledDescription>
        <Link to="/products">
          <Button>Zacznij zakupy</Button>
        </Link>
      </StyledIntroContainer>
    </StyledContainer>
  );
};

export default Home;
