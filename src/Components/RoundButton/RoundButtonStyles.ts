import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledButtonContainer = styled.button`
  width: 26px;
  height: 26px;
  margin: 0 8px;
  color: white;
  border-radius: 50%;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondaryHovered};
  }
`;
