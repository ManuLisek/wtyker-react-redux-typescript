import { useEffect, useState } from 'react';
import FilterBar from '../../Components/FilterBar/FilterBarContainer';
import ProductSummary from '../../Components/ProductSummary/ProductSummary';
import { StyledNoProductsContainer, StyledList, StyledSectionContainer } from './ProductListStyles';
import { getFilteredProducts } from '../../redux/productsListRedux';
import { PropsFromRedux } from './ProductsListContainer';
import { getProducts } from '../../api/axiosConfig';

const ProductsList = ({ products, filters, setProducts }: PropsFromRedux) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProducts();
        setProducts(response.data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas ładowania produktów');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return <div>Ładowanie produktów...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProducts = getFilteredProducts({ products, filters });
  const productsList = filteredProducts.map((product) => <ProductSummary key={product.id} product={product} />);

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
