import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  margin: 0 8px;
  color: white;
  border-radius: 50%;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: ${colors.secondaryHovered};
  }
`;
