import styled from 'styled-components';

const DateAuthor = styled.div`
  color: ${props => props.theme.navy};
  font-weight: 600;

  @media (min-width: 480px) {
    justify-content: space-between;
    display: flex;
  }

  p {
    margin-top: 0;
    margin-bottom: 34px;
    @media (min-width: 992px) {
      margin-bottom: 40px;
    }

    @media (min-width: 1380px) {
      font-size: 18px;
    }
  }
`;
export default DateAuthor;
