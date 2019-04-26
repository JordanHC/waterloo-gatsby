import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Banner from "../components/ui/Banner";
import Slant from "../components/ui/Slant";
import TitleWrapper from "../components/ui/TitleWrapper";
import LiftOff from "../components/ui/LiftOff";

const NotFoundPage = () => (
  <Layout>
    <Banner
        style={{
          backgroundImage: `url('/img/banner-small.png')`
        }}
    >
      <Container>
        <TitleWrapper>
          <Title noMargin>NOT FOUND</Title>
        </TitleWrapper>
      </Container>
      <Slant />
    </Banner>
      <LiftOff>
        <Container>
          <p>
            Looks like this page doesn't exist, would you like to go <Link to="/">home</Link>?
          </p>
        </Container>
      </LiftOff>
  </Layout>
)

export default NotFoundPage
