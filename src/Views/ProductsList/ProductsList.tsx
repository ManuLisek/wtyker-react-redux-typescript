import FilterBar from '../../Components/FilterBar/FilterBarContainer';
import ProductSummary from '../../Components/ProductSummary/ProductSummary';
import { ProductType } from '../../types/types';
import { StyledNoProductsContainer, StyledList, StyledSectionContainer } from './ProductListStyles';

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  const productsList = products.map((product: ProductType) => <ProductSummary key={product.id} product={product} />);

  return (
    <StyledSectionContainer>
      <FilterBar />
      <StyledList>
        {productsList.length ? (
          productsList
        ) : (
          <StyledNoProductsContainer>
            <h3>Przepraszamy, nie znaleziono produktów spełniających podane kryteria.</h3>
          </StyledNoProductsContainer>
        )}
      </StyledList>
    </StyledSectionContainer>
  );
};

export default ProductsList;
