import { Link } from 'react-router-dom';
import Search from '../Search/SearchContainer';
import { StyledIconCart, StyledIconsContainer, StyledLogo, StyledNavContainer, StyledQuantityInCart } from './NavigationStyles';

interface NavigationProps {
  cart: {
    totalQuantity: number;
  };
}

const Navigation = ({ cart }: NavigationProps) => {
  return (
    <StyledNavContainer>
      <div>
        <Link to="/">
          <StyledLogo src="https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_vt9mu8.png" alt="logo" />
        </Link>
      </div>
      <StyledIconsContainer>
        <Search />
        <Link to="/cart" aria-label="cart">
          <StyledIconCart className="fas fa-shopping-basket">
            <StyledQuantityInCart>{cart.totalQuantity}</StyledQuantityInCart>
          </StyledIconCart>
        </Link>
      </StyledIconsContainer>
    </StyledNavContainer>
  );
};

export default Navigation;
