import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledContainer = styled.div`
  width: 65%;
  overflow: hidden;
  min-height: 341px;
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 10px;
  text-align: center;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${colors.shadow};
  @media (max-width: ${size.lg}) {
    width: 70%;
  }
  @media (max-width: ${size.md}) {
    width: 100%;
  }
`;

export const StyledHeader = styled.h2`
  color: ${colors.secondary};
`;

export const StyledItemsContainer = styled.div`
  width: 100%;
  padding: 10px;
  min-height: 200px;
`;

export const StyledOrderContainer = styled.div`
  padding: 10px;
  background-color: ${colors.plum};
  position: relative;
  font-weight: bold;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  flex-grow: 1;
`;

export const StyledOrderSummary = styled.div`
  display: flex;
`;

export const StyledDescription = styled.p`
  width: 170px;
  font-size: 15px;
  text-align: end;
`;

export const StyledPrice = styled.p`
  width: 98px;
  font-size: 15px;
  text-align: end;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
