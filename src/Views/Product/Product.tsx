import { useState } from 'react';
import Button from '../../Components/Button/Button';
import RoundButton from '../../Components/RoundButton/RoundButton';
import { useParams } from 'react-router-dom';
import Popup from '../../Components/Popup/Popup';
import SimpleImageSlider from 'react-simple-image-slider';
import {
  StyledSliderContainer,
  StyledDescriptionContainer,
  StyledTitle,
  StyledPrice,
  StyledDescription,
  StyledAmountContainer,
  StyledProductQuantity,
  StyledButtonContainer,
  StyledIconShoppingCart,
} from './ProductStyles';
import { CartState, ProductType } from '../../types/types';

interface ProductComponentProps {
  cart: CartState;
  products: ProductType[];
  totalQuantity: number;
  totalPrice: number;
  addProductToCart: (product: ProductType & { quantity: number }) => void;
  countProductsInCart: (quantity: number) => void;
  countTotalPrice: (price: number) => void;
}

const Product = ({
  cart,
  products,
  totalQuantity,
  totalPrice,
  addProductToCart,
  countProductsInCart,
  countTotalPrice,
}: ProductComponentProps) => {
  const { id } = useParams<{ id: string }>();
  const [itemsQuantity, setItemsQuantity] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const foundProduct = products.find((p: ProductType) => p.id === Number(id));
  if (!foundProduct) {
    return <div>Product not found</div>;
  }

  const product: ProductType = foundProduct;

  const images = [{ url: product.image1 }, { url: product.image2 }];

  function handleIncreaseItemsQuantity() {
    if (itemsQuantity < 9) {
      setItemsQuantity((prev) => prev + 1);
    }
  }

  function handleDecreaseItemsQuantity() {
    if (itemsQuantity > 1) {
      setItemsQuantity((prev) => prev - 1);
    }
  }

  function handleAddProductToCart() {
    if (!cart.productsInCart.some((element) => element.id === product.id)) {
      addProductToCart({ ...product, quantity: itemsQuantity });
      countProductsInCart(totalQuantity + itemsQuantity);
      countTotalPrice(totalPrice + product.price * itemsQuantity);
    } else {
      setShowPopup(true);
    }
  }

  return (
    <>
      <StyledSliderContainer>
        <SimpleImageSlider width={'inherit'} height={'inherit'} images={images} bgColor="inherit" showNavs showBullets />
      </StyledSliderContainer>
      <StyledDescriptionContainer>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledPrice>{product.price}zł</StyledPrice>
        <StyledDescription>{product.description}</StyledDescription>
        <StyledAmountContainer>
          <div>Ilość:</div>
          <RoundButton onClick={handleDecreaseItemsQuantity}>-</RoundButton>
          <StyledProductQuantity>{itemsQuantity}</StyledProductQuantity>
          <RoundButton onClick={handleIncreaseItemsQuantity}>+</RoundButton>
        </StyledAmountContainer>
        <StyledButtonContainer>
          <Button onClick={handleAddProductToCart}>
            Dodaj do koszyka
            <StyledIconShoppingCart className="fas fa-shopping-cart" />
          </Button>
        </StyledButtonContainer>
      </StyledDescriptionContainer>
      <Popup trigger={showPopup} closePopup={() => setShowPopup(false)}>
        <h3>Ten produkt jest już w koszyku</h3>
      </Popup>
    </>
  );
};

export default Product;
