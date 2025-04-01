import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 220px;
  height: 330px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightgray};
  padding: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.06);
    box-shadow: ${colors.shadow};
  }
  @media (max-width: ${size.lg}) {
    width: 265px;
    height: 350px;
  }
`;

export const StyledTitle = styled.div`
  color: ${colors.black};
  font-weight: bold;
  flex-grow: 1;
  @media (max-width: ${size.lg}) {
    flex-grow: unset;
  }
`;

export const StyledPrice = styled.div`
  color: ${colors.green};
  font-weight: bold;
  align-self: flex-start;
`;

export const StyledTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledTag = styled.p`
  background-color: ${colors.dark};
  color: ${colors.white};
  border-radius: 50px;
  font-size: 14px;
  padding: 5px 8px;
  margin: 3px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  @media (max-width: ${size.lg}) {
    width: 240px;
  }
`;
