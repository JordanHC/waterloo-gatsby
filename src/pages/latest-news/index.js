import React from "react";

import Layout from "../../components/Layout";
import LiftOff from "../../components/ui/LiftOff";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import TitleWrapper from "../../components/ui/TitleWrapper";
import Banner from "../../components/ui/Banner";
import Slant from "../../components/ui/Slant";
import LatestNewsRoll from "../../components/LatestNewsRoll";

export default class LatestNewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Banner
          style={{
            backgroundImage: `url('/img/banner-small.png')`
          }}
        >
          <Container>
            <TitleWrapper>
              <Title noMargin>Latest News</Title>
            </TitleWrapper>
          </Container>
          <Slant />
        </Banner>
        <LiftOff>
          <Container>
            <LatestNewsRoll />
          </Container>
        </LiftOff>
      </Layout>
    );
  }
}
