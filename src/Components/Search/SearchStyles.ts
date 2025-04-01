import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledSearchContainer = styled.div`
  text-align: center;
`;

export const StyledInput = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 2px solid ${colors.secondary};
  outline: none;
  &:focus {
    background-color: ${colors.white};
    border-bottom: none;
  }
`;

export const StyledIconSearch = styled.i`
  margin: 5px 10px;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  border-radius: 50%;
  padding: 10px;
  &:hover {
    border-color: ${colors.secondaryHovered};
  }
`;
