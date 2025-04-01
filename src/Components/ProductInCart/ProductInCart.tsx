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
}: ProductInCartProps) => {
  const productTotalPrice = `${(productInCart.quantity * productInCart.price).toFixed(2)}zł`;

  function handleIncreaseQuantity() {
    if (productInCart.quantity < 9) {
      increaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity + 1);
      countTotalPrice(totalPrice + productInCart.price);
    }
  }

  function handleDecreaseQuantity() {
    if (productInCart.quantity > 1) {
      decreaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity - 1);
      countTotalPrice(totalPrice - productInCart.price);
    }
  }

  function handleRemoveProduct() {
    removeProductFromCart({ id: productInCart.id });
    countProductsInCart(totalQuantity - productInCart.quantity);
    countTotalPrice(totalPrice - productInCart.price * productInCart.quantity);
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
            <StyledProductQuantity>{productInCart.quantity}</StyledProductQuantity>
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
