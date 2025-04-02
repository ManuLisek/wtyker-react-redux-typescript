import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.lg}) {
    flex-direction: column;
  }
`;

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

export const StyledProductQuantity = styled.input.attrs({
  type: 'number',
  min: 1,
  max: 99,
})`
  width: 28px;
  height: 25px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  padding: 0 5px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledIconShoppingCart = styled.i`
  margin-left: 5px;
`;
