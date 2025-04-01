import styled from 'styled-components';
import size from '../../styles/breakpoints';

export const StyledSectionContainer = styled.section`
  width: 100%;
  display: flex;
  @media (max-width: ${size.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 240px);
  position: relative;
  left: 30px;
  list-style-type: none;
  @media (max-width: ${size.md}) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: static;
  }
`;

export const StyledNoProductsContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  width: 100%;
`;
