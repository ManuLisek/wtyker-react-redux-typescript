import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-child(even) {
    background-color: ${colors.light};
  }
`;

export const StyledTotalPrice = styled.div`
  height: 25px;
  min-width: 90px;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  color: ${colors.green};
`;

export const StyledProductImg = styled.img`
  padding: 5px;
  width: 70px;
  height: 57px;
`;

export const StyledIconTrash = styled.i`
  color: ${colors.secondary};
  padding: 3px;
  min-width: 70px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.secondaryHovered};
  }
`;

export const StyledQuantityContainer = styled.div`
  display: flex;
  width: 120px;
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

export const StyledProductPriceContainer = styled.div`
  display: flex;
  width: 82px;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledOrderDetails = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 10px;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledProductTitle = styled.div`
  text-align: start;
  font-weight: 700;
`;

export const StyledProductPrice = styled(StyledProductTitle)``;
