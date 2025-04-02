import { useState, ChangeEvent, KeyboardEvent } from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import validator from 'validator';
import {
  StyledContainer,
  StyledEmailContainer,
  StyledEmailError,
  StyledFacebook,
  StyledFooterContainer,
  StyledHeader,
  StyledIcons,
  StyledInfo,
  StyledInput,
  StyledInputContainer,
  StyledLink,
  StyledTwitter,
  StyledYoutube,
} from './FooterStyles';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [shouldValidate, setShouldValidate] = useState<boolean>(false);

  const validateEmail = () => {
    if (inputValue === '') {
      setEmailError('To pole musi być wypełnione');
      return false;
    } else if (!validator.isEmail(inputValue)) {
      setEmailError('Podaj poprawny adres email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailSent = () => {
    setShouldValidate(true);
    const isValid = validateEmail();

    if (isValid) {
      setShowPopup(true);
      setInputValue('');
      setEmailError('');
      setShouldValidate(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (shouldValidate) {
      validateEmail();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEmailSent();
    }
  };

  return (
    <StyledFooterContainer>
      <StyledContainer>
        <StyledInfo>
          <StyledHeader>Śledź nas</StyledHeader>
          <StyledIcons>
            <StyledLink target="_blank" href="https://www.facebook.com/" rel="noreferrer">
              <StyledFacebook className="fab fa-facebook-f" />
              <p>Facebook</p>
            </StyledLink>
            <StyledLink target="_blank" href="https://www.youtube.com/" rel="noreferrer">
              <StyledYoutube className="fas fa-play" />
              <p>Youtube</p>
            </StyledLink>
            <StyledLink target="_blank" href="https://www.twitter.com/" rel="noreferrer">
              <StyledTwitter className="fab fa-twitter" />
              <p>Twitter</p>
            </StyledLink>
          </StyledIcons>
        </StyledInfo>
        <StyledInfo>
          <StyledHeader>Kontakt</StyledHeader>
          <p>Adres: Bydgoszcz</p>
          <p>ul. Elektryczna 101 75-634</p>
          <p>Telefon: 37(29)530-65-73</p>
          <p>E-mail: wtyker@gmail.com</p>
        </StyledInfo>
        <StyledInfo>
          <StyledHeader>Newsletter</StyledHeader>
          <p>Zostaw nam swojego maila żeby być na bieżąco z promocjami!</p>
          <StyledEmailContainer>
            <StyledInputContainer>
              <StyledInput
                type="text"
                value={inputValue}
                placeholder="Twój adres email..."
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <StyledEmailError>{emailError ? emailError : ''}</StyledEmailError>
            </StyledInputContainer>
            <Button onClick={handleEmailSent}>Wyślij</Button>
          </StyledEmailContainer>
          <Popup trigger={showPopup} closePopup={() => setShowPopup(false)}>
            <h3>Teraz nie przegapisz żadnej promocji!</h3>
          </Popup>
        </StyledInfo>
      </StyledContainer>
    </StyledFooterContainer>
  );
};

export default Footer;
