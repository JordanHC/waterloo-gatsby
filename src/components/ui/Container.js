import styled from "styled-components";

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 992px) {
    max-width: 952px;
    margin: 0 auto;
  }
  @media (min-width: 1380px) {
    max-width: 1340px;
  }
`;

export default Container;
