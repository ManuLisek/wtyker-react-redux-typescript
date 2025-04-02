import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/NavigationContainer';
import Footer from '../Footer/Footer';
import { StyledContainer, StyledLayout, StyledLayoutContainer } from './MainLayoutStyles';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  return location.pathname !== '/' ? (
    <StyledLayoutContainer>
      <Navigation />
      <StyledContainer>
        <StyledLayout>{children}</StyledLayout>
      </StyledContainer>

      <Footer />
    </StyledLayoutContainer>
  ) : (
    <StyledLayoutContainer>
      <StyledLayout>{children}</StyledLayout>
    </StyledLayoutContainer>
  );
};

export default MainLayout;
