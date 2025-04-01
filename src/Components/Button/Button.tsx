import { ButtonProps } from '../../types/types';
import { StyledButtonContainer } from './ButtonStyles';

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButtonContainer onClick={onClick}>{children}</StyledButtonContainer>;
};

export default Button;
