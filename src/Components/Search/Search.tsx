import { createRef, KeyboardEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StyledIconSearch, StyledInput, StyledSearchContainer } from './SearchStyles';

interface SearchProps {
  changeSearchPhrase: (phrase: string) => void;
}

const Search = ({ changeSearchPhrase }: SearchProps) => {
  const textInput = createRef<HTMLInputElement>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (textInput.current) {
      changeSearchPhrase(textInput.current.value);
      textInput.current.value = '';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
      if (location.pathname !== '/products') {
        navigate('/products');
      }
    }
  };

  return (
    <StyledSearchContainer>
      <StyledInput type="text" placeholder="Znajdź produkt" ref={textInput} onKeyDown={handleKeyDown} />
      <Link to="/products" aria-label="loupe">
        <StyledIconSearch className="fas fa-search" onClick={handleClick} />
      </Link>
    </StyledSearchContainer>
  );
};

export default Search;
