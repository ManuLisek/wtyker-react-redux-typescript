import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../../Components/FilterBar/FilterBarContainer';
import ProductSummary from '../../Components/ProductSummary/ProductSummary';
import { StyledNoProductsContainer, StyledList, StyledSectionContainer, StyledPagination } from './ProductListStyles';
import { getFilteredProducts } from '../../redux/productsListRedux';
import { PropsFromRedux } from './ProductsListContainer';
import { getProducts } from '../../api/axiosConfig';
import { Stack } from '@mui/material';

const PRODUCTS_PER_PAGE = 10;

const ProductsList = ({ products, filters, setProducts }: PropsFromRedux) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

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

  useEffect(() => {
    if (currentPage !== 1) {
      setSearchParams({ page: '1' });
    }
  }, [filters]);

  if (loading) {
    return <div>Ładowanie produktów...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProducts = getFilteredProducts({ products, filters });
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  const productsList = paginatedProducts.map((product) => <ProductSummary key={product.id} product={product} />);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledSectionContainer>
      <FilterBar />
      <StyledList>
        {productsList.length ? (
          <>{productsList}</>
        ) : (
          <StyledNoProductsContainer>
            <h3>Przepraszamy, nie znaleziono produktów spełniających podane kryteria.</h3>
          </StyledNoProductsContainer>
        )}
      </StyledList>
      {totalPages > 1 && (
        <Stack spacing={2} sx={{ width: '100%', justifyContent: 'center', marginTop: 3 }}>
          <StyledPagination count={totalPages} page={Math.min(currentPage, totalPages)} onChange={handlePageChange} color="primary" />
        </Stack>
      )}
    </StyledSectionContainer>
  );
};

export default ProductsList;
