import { useState } from 'react';
import uuid from 'react-uuid';
import Button from '../Button/Button';
import { StyledCheckbox, StyledFilterBarContainer, StyledFilterBarContent, StyledInputPrice, StyledLabel } from './FilterBarStyles';
import { FiltersState } from '../../types/types';

interface FilterBarProps {
  filters: FiltersState;
  tags: string[];
  brands: string[];
  changePrice: (type: 'from' | 'to', value: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  addBrand: (brand: string) => void;
  removeBrand: (brand: string) => void;
  changeSortingKey: (sortingKey: string) => void;
  clearFilters: () => void;
}

function FilterBar({
  filters,
  tags,
  brands,
  changePrice,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
  changeSortingKey,
  clearFilters,
}: FilterBarProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  function handlePrice(type: 'from' | 'to', value: string) {
    changePrice(type, value);
  }

  function handleTags(tag: string, checked: boolean) {
    if (checked) {
      addTag(tag);
    } else {
      removeTag(tag);
    }
  }

  function handleBrands(brand: string, checked: boolean) {
    if (checked) {
      setSelectedBrand(brand);
      brands.forEach((b) => removeBrand(b));
      addBrand(brand);
    } else {
      setSelectedBrand(null);
      removeBrand(brand);
    }
  }

  function handleSortingKey(e: React.ChangeEvent<HTMLSelectElement>) {
    changeSortingKey(e.target.value);
  }

  function handleClearFilters() {
    clearFilters();
  }

  return (
    <StyledFilterBarContainer>
      <StyledFilterBarContent>
        <StyledLabel>Cena</StyledLabel>
        <StyledLabel>
          od:
          <StyledInputPrice
            type="number"
            min="50"
            max="3400"
            value={filters.price.from}
            onChange={(e) => handlePrice('from', e.target.value)}
          />
          zł
        </StyledLabel>
        <StyledLabel>
          do:
          <StyledInputPrice
            type="number"
            min="50"
            max="3400"
            value={filters.price.to}
            onChange={(e) => handlePrice('to', e.target.value)}
          />
          zł
        </StyledLabel>
        <details>
          <summary>Filtruj po kategoriach</summary>
          <div>
            {tags.map((tag) => (
              <StyledLabel key={uuid()}>
                <StyledCheckbox
                  type="checkbox"
                  checked={filters.checkedTags.includes(tag)}
                  onChange={(e) => handleTags(tag, e.target.checked)}
                />
                {tag}
              </StyledLabel>
            ))}
          </div>
        </details>
        <details>
          <summary>Filtruj po marce</summary>
          <div>
            {brands.map((brand) => (
              <StyledLabel key={uuid()}>
                <StyledCheckbox type="checkbox" checked={selectedBrand === brand} onChange={(e) => handleBrands(brand, e.target.checked)} />
                {brand}
              </StyledLabel>
            ))}
          </div>
        </details>
        <StyledLabel>Sortuj:</StyledLabel>
        <select value={filters.sortingKey} onChange={handleSortingKey}>
          <option value="---">---</option>
          <option value="Alfabetycznie">Alfabetycznie</option>
          <option value="Po cenie: rosnąco">Po cenie: rosnąco</option>
          <option value="Po cenie: malejąco">Po cenie: malejąco</option>
        </select>
        <Button onClick={handleClearFilters}>Wyczyść</Button>
      </StyledFilterBarContent>
    </StyledFilterBarContainer>
  );
}

export default FilterBar;
