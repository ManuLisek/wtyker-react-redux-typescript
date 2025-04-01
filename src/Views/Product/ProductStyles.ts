import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledSliderContainer = styled.div`
  width: 400px;
  height: 320px;
  margin-right: 20px;
  @media (max-width: ${size.md}) {
    width: 260px;
    height: 208px;
    margin-right: 0;
  }
`;

export const StyledDescriptionContainer = styled.div`
  width: 400px;
  margin-left: 10px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: ${size.md}) {
    width: 90%;
    margin: 0;
  }
`;

export const StyledTitle = styled.div`
  color: ${colors.secondary};
  font-size: 32px;
  font-weight: bold;
`;

export const StyledPrice = styled.div`
  color: ${colors.green};
  font-weight: bold;
  font-size: 24px;
`;

export const StyledDescription = styled.div`
  color: ${colors.black};
  text-align: justify;
`;

export const StyledAmountContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const StyledProductQuantity = styled.div`
  width: 8px;
  height: 25px;
`;

export const StyledButtonContainer = styled.div`
  width: 50%;
`;

export const StyledIconShoppingCart = styled.i`
  margin-left: 5px;
`;
