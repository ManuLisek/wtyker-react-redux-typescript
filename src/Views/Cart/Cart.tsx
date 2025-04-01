import { useState } from 'react';
import ProductInCart from '../../Components/ProductInCart/ProductInCartContainer';
import Button from '../../Components/Button/Button';
import { cartInitialState } from '../../redux/store';
import Popup from '../../Components/Popup/Popup';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledDescription,
  StyledHeader,
  StyledItemsContainer,
  StyledOrderContainer,
  StyledOrderSummary,
  StyledPrice,
} from './CartStyles';
import { CartState } from '../../types/types';

interface CartProps {
  cart: CartState;
  clearCart: (emptyCart: CartState) => void;
}

const Cart = ({ cart, clearCart }: CartProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function handleConfirmOrder() {
    setShowPopup(true);
  }

  const allProductsInCart = cart.productsInCart.map((productInCart) => (
    <ProductInCart key={productInCart.id} productInCart={productInCart} />
  ));

  return (
    <StyledContainer>
      {cart.productsInCart.length !== 0 ? (
        <>
          <StyledItemsContainer>{allProductsInCart}</StyledItemsContainer>
          <StyledOrderContainer>
            <StyledOrderSummary>
              <StyledDescription>Koszt dostawy:</StyledDescription>
              <StyledPrice>{cart.delivery.toFixed(2)}zł</StyledPrice>
            </StyledOrderSummary>
            <StyledOrderSummary>
              <StyledDescription>Wartość zamówienia:</StyledDescription>
              <StyledPrice>{cart.totalPrice}zł</StyledPrice>
            </StyledOrderSummary>
            <StyledButtonContainer>
              <Button onClick={handleConfirmOrder}>Zatwierdź zamówienie</Button>
            </StyledButtonContainer>
            <Popup
              trigger={showPopup}
              closePopup={() => {
                setShowPopup(false);
                clearCart(cartInitialState);
              }}
            >
              <h3>Twoje zamówienie zostało przekazane do działu obsługi klienta.</h3>
            </Popup>
          </StyledOrderContainer>
        </>
      ) : (
        <StyledHeader>Twój koszyk jest pusty.</StyledHeader>
      )}
    </StyledContainer>
  );
};

export default Cart;
