import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledButtonContainer = styled.div`
  background-color: ${colors.secondary};
  border: none;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 12px;
  cursor: pointer;
  min-width: 100px;
  min-height: 45px;
  &:hover {
    background-color: ${colors.secondaryHovered};
  }
`;
