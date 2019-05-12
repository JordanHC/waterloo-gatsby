import React from "react";
import * as Sentry from '@sentry/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Banner from "../components/ui/Banner";
import TitleWrapper from "../components/ui/TitleWrapper";
import Slant from "../components/ui/Slant";
import LiftOff from "../components/ui/LiftOff";

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <Navbar />
          <Banner
            style={{
              backgroundImage: `url('/img/banner-small.png')`
            }}
          >
            <Container>
              <TitleWrapper>
                <Title noMargin>Something went wrong!</Title>
              </TitleWrapper>
            </Container>
            <Slant />
          </Banner>
          <LiftOff smaller>
            <Container>
              <p>This error has been reported.</p>
            </Container>
          </LiftOff>
          <Footer />
        </>
      );
    } else {
      return this.props.children;
    }
  }
}