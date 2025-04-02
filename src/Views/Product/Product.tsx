import { useState, useEffect } from 'react';
import Button from '../../Components/Button/Button';
import RoundButton from '../../Components/RoundButton/RoundButton';
import { useParams } from 'react-router-dom';
import Popup from '../../Components/Popup/Popup';
import SimpleImageSlider from 'react-simple-image-slider';
import { getProduct } from '../../api/axiosConfig';
import {
  StyledContainer,
  StyledSliderContainer,
  StyledDescriptionContainer,
  StyledTitle,
  StyledPrice,
  StyledDescription,
  StyledAmountContainer,
  StyledProductQuantity,
  StyledIconShoppingCart,
} from './ProductStyles';
import { CartState, ProductType } from '../../types/types';

interface ProductComponentProps {
  cart: CartState;
  totalQuantity: number;
  totalPrice: number;
  addProductToCart: (product: ProductType & { quantity: number }) => void;
  countProductsInCart: (quantity: number) => void;
  countTotalPrice: (price: number) => void;
}

const Product = ({ cart, totalQuantity, totalPrice, addProductToCart, countProductsInCart, countTotalPrice }: ProductComponentProps) => {
  const { id } = useParams<{ id: string }>();
  const [itemsQuantity, setItemsQuantity] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getProduct(Number(id));
        setProduct(response.data.product);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Coś poszło nie tak, spróbuj ponownie później.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddProductToCart = () => {
    if (!product) return;

    if (!cart.productsInCart.some((element) => element.id === product.id)) {
      const productWithQuantity: ProductType & { quantity: number } = {
        ...product,
        quantity: itemsQuantity,
      };
      addProductToCart(productWithQuantity);
      countProductsInCart(totalQuantity + itemsQuantity);
      countTotalPrice(totalPrice + product.price * itemsQuantity);
    } else {
      setShowPopup(true);
    }
  };

  const handleIncreaseItemsQuantity = () => {
    if (itemsQuantity < 99) {
      setItemsQuantity((prev) => prev + 1);
    }
  };

  const handleDecreaseItemsQuantity = () => {
    if (itemsQuantity > 1) {
      setItemsQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setItemsQuantity(NaN);
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      if (numValue >= 1 && numValue <= 99) {
        setItemsQuantity(numValue);
      }
    }
  };

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Nie znaleziono takiego produktu</div>;
  }

  const images = [{ url: product.image1 }, { url: product.image2 }];

  return (
    <StyledContainer>
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
          <StyledProductQuantity
            value={itemsQuantity}
            onChange={handleQuantityChange}
            onBlur={(e) => {
              if (e.target.value === '' || isNaN(itemsQuantity)) {
                setItemsQuantity(1);
              }
            }}
          />
          <RoundButton onClick={handleIncreaseItemsQuantity}>+</RoundButton>
        </StyledAmountContainer>
        <Button onClick={handleAddProductToCart}>
          Dodaj do koszyka
          <StyledIconShoppingCart className="fas fa-shopping-cart" />
        </Button>
      </StyledDescriptionContainer>
      <Popup trigger={showPopup} closePopup={() => setShowPopup(false)}>
        <h3>Ten produkt jest już w koszyku</h3>
      </Popup>
    </StyledContainer>
  );
};

export default Product;
