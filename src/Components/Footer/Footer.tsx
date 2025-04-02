import { useState, ChangeEvent, KeyboardEvent } from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import validator from 'validator';
import {
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

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setInputValue(email);
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Podaj poprawny adres email');
    }
  };

  const handleEmailSent = () => {
    if (inputValue === '') {
      setEmailError('To pole musi być wypełnione');
    } else if (!emailError) {
      setShowPopup(true);
      setInputValue('');
      setEmailError('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEmailSent();
    }
  };

  return (
    <StyledFooterContainer>
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
              onChange={validateEmail}
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
    </StyledFooterContainer>
  );
};

export default Footer;
