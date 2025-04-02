import styled from 'styled-components';
import { Pagination } from '@mui/material';
import colors from '../../styles/colors';
import size from '../../styles/breakpoints';

export const StyledCenterDiv = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${size.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 240px);
  position: relative;
  left: 30px;
  list-style-type: none;
  @media (max-width: ${size.lg}) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: static;
  }
`;

export const StyledNoProductsContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  width: 100%;
`;

export const StyledPagination = styled(Pagination)`
  && {
    .MuiPagination-ul {
      justify-content: center;
      margin
    }
    .MuiPaginationItem-root {
      color: ${colors.secondary};
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: ${colors.secondary};
      color: white;

      &:hover {
        background-color: ${colors.secondaryHovered};
      }
    }
  }
`;
