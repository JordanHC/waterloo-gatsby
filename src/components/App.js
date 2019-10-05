import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ErrorBoundary from '../utils/errorBoundary';
import useSiteMetadata from './SiteMetadata';
import { useNavigationValue } from '../context/NavigationContext';
import BreakingNews from './BreakingNews';

const FakeBody = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  overflow: hidden;
  transition: ${props => props.theme.normalTransition};
  &.is-active {
    @media (max-width: 1199px) {
      left: -200px;
    }
  }
`;

const App = ({ children }) => {
  // eslint-disable-next-line
  const [{ isActive }, dispatch] = useNavigationValue();
  const { title, description } = useSiteMetadata();

  return (
    <FakeBody className={isActive ? 'is-active' : ''}>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='theme-color' content='#111' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta property='og:image' content='/img/og-image.jpg' />
      </Helmet>
      <ErrorBoundary>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <BreakingNews />
      </ErrorBoundary>
    </FakeBody>
  );
};

export default App;
