import styled from 'styled-components';
import size from '../../styles/breakpoints';
import { slideLeft, slideRight, slideDown } from '../../styles/animations';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media (max-width: ${size.md}) {
    flex-direction: column;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 55%;
  height: 267px;
  animation: ${slideRight} 2s linear;
  @media (max-width: ${size.md}) {
    align-items: center;
    width: 50%;
    animation: ${slideDown} 2s linear;
  }
`;

export const StyledImage = styled.img`
  width: 400px;
  height: auto;
  @media (max-width: ${size.lg}) {
    width: 280px;
  }
`;

export const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 5px;
  width: 45%;
  animation: ${slideLeft} 2s linear;
  @media (max-width: ${size.md}) {
    align-items: center;
    text-align: center;
    width: 50%;
    animation: ${slideDown} 2s linear;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  height: 125px;
  @media (max-width: ${size.lg}) {
    width: 150px;
    height: 94px;
  }
`;

export const StyledDescription = styled.p`
  min-height: 25px;
`;
