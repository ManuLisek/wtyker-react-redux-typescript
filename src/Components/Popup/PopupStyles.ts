import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

export const StyledPopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: ${colors.white};
  border-radius: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
