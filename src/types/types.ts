export interface PriceType {
  from: number;
  to: number;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  tags: string[];
  image1: string;
  image2: string;
}

export interface ProductInCartType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image1: string;
  image2?: string;
}

export interface FiltersState {
  searchPhrase: string;
  price: PriceType;
  checkedTags: string[];
  checkedBrands: string[];
  sortingKey: string;
}

export interface CartState {
  productsInCart: ProductInCartType[];
  delivery: number;
  totalQuantity: number;
  totalPrice: number;
}

export interface RootState {
  products: ProductType[];
  filters: FiltersState;
  cart: CartState;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface Action<T = unknown> {
  type: string;
  payload?: T;
}
