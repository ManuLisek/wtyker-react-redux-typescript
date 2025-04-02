import styled from 'styled-components';
import size from '../../styles/breakpoints';

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: ${size.md}) {
    width: 100%;
  }
`;

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledLayout = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;
