import styled from 'styled-components';

const DateAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.navy};
  font-weight: 600;

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
