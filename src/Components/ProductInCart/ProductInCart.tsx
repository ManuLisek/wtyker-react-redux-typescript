import { useState } from 'react';
import RoundButton from '../RoundButton/RoundButton';
import { ProductInCartType } from '../../types/types';
import {
  StyledItem,
  StyledDetails,
  StyledIconTrash,
  StyledOrderDetails,
  StyledProductDetails,
  StyledProductImg,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductPriceContainer,
  StyledProductQuantity,
  StyledProductTitle,
  StyledQuantityContainer,
  StyledTotalPrice,
} from './ProductInCartStyles';

interface ProductInCartProps {
  productInCart: ProductInCartType;
  totalQuantity: number;
  totalPrice: number;
  removeProductFromCart: (product: { id: number }) => void;
  countProductsInCart: (quantity: number) => void;
  increaseQuantityInCart: (product: ProductInCartType) => void;
  decreaseQuantityInCart: (product: ProductInCartType) => void;
  countTotalPrice: (price: number) => void;
  updateQuantityInCart: (product: ProductInCartType, newQuantity: number) => void;
}

const ProductInCart = ({
  productInCart,
  totalQuantity,
  totalPrice,
  removeProductFromCart,
  countProductsInCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  countTotalPrice,
  updateQuantityInCart,
}: ProductInCartProps) => {
  const [localQuantity, setLocalQuantity] = useState<number | ''>(productInCart.quantity);
  const productTotalPrice = `${(productInCart.quantity * productInCart.price).toFixed(2)}zł`;

  function handleIncreaseQuantity() {
    if (productInCart.quantity < 99) {
      const newQuantity = productInCart.quantity + 1;
      increaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity + 1);
      countTotalPrice(totalPrice + productInCart.price);
      setLocalQuantity(newQuantity);
    }
  }

  function handleDecreaseQuantity() {
    if (productInCart.quantity > 1) {
      const newQuantity = productInCart.quantity - 1;
      decreaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity - 1);
      countTotalPrice(totalPrice - productInCart.price);
      setLocalQuantity(newQuantity);
    }
  }

  function handleRemoveProduct() {
    removeProductFromCart({ id: productInCart.id });
    countProductsInCart(totalQuantity - productInCart.quantity);
    countTotalPrice(totalPrice - productInCart.price * productInCart.quantity);
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === '') {
      setLocalQuantity('');
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      if (numValue >= 1 && numValue <= 99) {
        setLocalQuantity(numValue);
      }
    }
  }

  function handleQuantityBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (typeof localQuantity === 'number' && localQuantity !== productInCart.quantity) {
      updateQuantityInCart(productInCart, localQuantity);
      countProductsInCart(totalQuantity - productInCart.quantity + localQuantity);
      countTotalPrice(totalPrice - productInCart.price * productInCart.quantity + productInCart.price * localQuantity);
    }
  }

  return (
    <StyledItem>
      <StyledDetails>
        <StyledProductDetails>
          <StyledProductImg src={productInCart.image1} alt={productInCart.title} />
          <StyledProductInfo>
            <StyledProductTitle>{productInCart.title}</StyledProductTitle>
            <StyledProductPrice>{productInCart.price}zł</StyledProductPrice>
          </StyledProductInfo>
        </StyledProductDetails>
        <StyledOrderDetails>
          <StyledQuantityContainer>
            <RoundButton onClick={handleDecreaseQuantity}>-</RoundButton>
            <StyledProductQuantity
              value={localQuantity === '' ? '' : localQuantity}
              onChange={handleQuantityChange}
              onBlur={handleQuantityBlur}
            />
            <RoundButton onClick={handleIncreaseQuantity}>+</RoundButton>
          </StyledQuantityContainer>
          <StyledProductPriceContainer>
            <StyledTotalPrice className="cart-totalPrice">{productTotalPrice}</StyledTotalPrice>
          </StyledProductPriceContainer>
        </StyledOrderDetails>
      </StyledDetails>
      <StyledIconTrash className="fas fa-trash-alt" onClick={handleRemoveProduct} />
    </StyledItem>
  );
};

export default ProductInCart;
