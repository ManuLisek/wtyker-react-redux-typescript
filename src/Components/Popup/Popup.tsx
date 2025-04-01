import Button from '../Button/Button';
import { StyledButtonContainer, StyledPopupContainer, StyledPopupInner } from './PopupStyles';

interface PopupProps {
  trigger: boolean;
  children: React.ReactNode;
  closePopup: () => void;
}

const Popup = ({ trigger, children, closePopup }: PopupProps) => {
  return trigger ? (
    <StyledPopupContainer>
      <StyledPopupInner>
        {children}
        <StyledButtonContainer>
          <Button onClick={closePopup}>Ok</Button>
        </StyledButtonContainer>
      </StyledPopupInner>
    </StyledPopupContainer>
  ) : null;
};

export default Popup;
