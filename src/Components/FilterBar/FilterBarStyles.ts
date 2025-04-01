import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledFilterBarContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 200px;
  height: fit-content;
  left: 0;
  top: 250px;
  margin: 20px 0 20px 0;
  @media (max-width: ${size.md}) {
    width: 100%;
    letter-spacing: 0.8px;
  }
`;

export const StyledFilterBarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: 4px;
  display: block;
`;

export const StyledCheckbox = styled.input`
  margin-right: 3px;
`;

export const StyledInputPrice = styled.input`
  max-width: 50px;
  text-align: right;
  margin: 0 4px;
`;
