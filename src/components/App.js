import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { useNavigationValue } from "../context/NavigationContext";

const FakeBody = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  overflow: hidden;
  transition: ${props => props.theme.normalTransition};
  &.is-active {
    @media (max-width: 991px) {
      left: -200px;
    }
  }
`;

const App = ({ children }) => {
  // eslint-disable-next-line
  const [{ isActive }, dispatch] = useNavigationValue();
  const { title, description } = useSiteMetadata();

  return (
    <FakeBody className={isActive ? "is-active" : ""}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <meta name="theme-color" content="#111" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </FakeBody>
  );
};

export default App;
