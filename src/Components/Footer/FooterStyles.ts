import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledFooterContainer = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.white};
  flex-basis: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 180px;
  padding-bottom: 40px;
  bottom: 0;
  max-height: 280px;
  @media (max-width: ${size.lg}) {
    flex-direction: column;
    align-items: right;
    max-height: unset;
  }
`;

export const StyledHeader = styled.h3`
  padding: 10px 0 10px 0;
`;

export const StyledInfo = styled.div`
  flex-basis: 30%;
  padding: 12px;
  @media (max-width: ${size.lg}) {
    flex-basis: 100%;
  }
`;

export const StyledIcons = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

const StyledIcon = styled.i`
  min-height: 30px;
  min-width: 30px;
  background-color: ${colors.white};
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
  margin-right: 8px;
`;

export const StyledFacebook = styled(StyledIcon)`
  background-color: ${colors.facebook};
  color: ${colors.white};
`;

export const StyledYoutube = styled(StyledIcon)`
  background-color: ${colors.youtube};
  color: ${colors.white};
  font-size: 10px;
`;

export const StyledTwitter = styled(StyledIcon)`
  background-color: ${colors.twitter};
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: 15px;
  color: ${colors.white};
`;

export const StyledButtonContainer = styled.div`
  margin-left: 20px;
`;

export const StyledInput = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  padding: 2px;
  margin-top: 16px;
  &:focus {
    border: 1px solid ${colors.black};
  }
`;

export const StyledEmailError = styled.div`
  font-size: 12px;
  height: 26px;
  width: 183px;
  color: ${colors.maroon};
  padding: 5px;
`;

export const StyledEmailContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 10px 0;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 5px 0;
`;
