import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Views/Home/Home';
import ProductsList from './Views/ProductsList/ProductsListContainer';
import Product from './Views/Product/ProductContainer';
import Cart from './Views/Cart/CartContainer';
import MainLayout from './Components/MainLayout/MainLayout';
import NotFound from './Views/NotFound/NotFound';
import ScrollToTop from './utilities/ScrollToTop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </MainLayout>
      </ScrollToTop>
    </Router>
  );
}

export default App;
