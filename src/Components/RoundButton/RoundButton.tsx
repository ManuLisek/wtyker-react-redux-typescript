import { ButtonProps } from '../../types/types';
import { StyledButtonContainer } from './RoundButtonStyles';

const RoundButton = ({ children, onClick }: ButtonProps) => {
  return <StyledButtonContainer onClick={onClick}>{children}</StyledButtonContainer>;
};

export default RoundButton;
