import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { ProductType } from '../../types/types';
import { StyledContainer, StyledImage, StyledPrice, StyledTag, StyledTags, StyledTitle } from './ProductSummaryStyles';

interface ProductSummaryProps {
  product: ProductType;
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const tags = product.tags.map((tag) => <StyledTag key={uuid()}>{tag}</StyledTag>);

  return (
    <li>
      <Link
        to={{
          pathname: `/product/${product.id}`,
        }}
      >
        <StyledContainer>
          <StyledImage src={product.image1} alt={product.title} />
          <StyledTitle>{product.title}</StyledTitle>
          <StyledPrice>{product.price.toFixed(2)}zł</StyledPrice>
          <StyledTags>{tags}</StyledTags>
        </StyledContainer>
      </Link>
    </li>
  );
};

export default React.memo(ProductSummary);
