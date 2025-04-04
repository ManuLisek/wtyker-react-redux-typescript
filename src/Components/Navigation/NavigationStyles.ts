import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: ${size.md}) {
    width: 100%;
  }
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: ${size.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLogo = styled.img`
  height: 100px;
  margin: 30px 0 0 30px;
  @media (max-width: ${size.md}) {
    margin: 30px;
  }
`;

export const StyledIconsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.sm}) {
    flex-direction: column;
  }
`;

export const StyledIconCart = styled.div<{ $hasItems: boolean }>`
  background-color: ${(props) => (props.$hasItems ? colors.youtube : colors.secondary)};
  color: white;
  border: 2px solid ${(props) => (props.$hasItems ? colors.youtube : colors.secondary)};
  color: white;
  border-radius: 50%;
  padding: 10px;
  margin: 15px;
  &:hover {
    background-color: ${(props) => (props.$hasItems ? colors.youtubeHovered : colors.secondaryHovered)};
    border: 2px solid ${(props) => (props.$hasItems ? colors.youtubeHovered : colors.secondaryHovered)};
  }
`;

export const StyledQuantityInCart = styled.div`
  position: absolute;
  background-color: ${colors.lightcyan};
  color: ${colors.secondary};
  padding: 2px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  transform: translate(50%, 10%);
`;
