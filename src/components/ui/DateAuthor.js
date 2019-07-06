import styled from 'styled-components';

const DateAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.blue};
  font-weight: 600;

  p {
    margin-top: 0;
    margin-bottom: 34px;
    @media (min-width: 992px) {
      margin-bottom: 40px;
    }
  }
`;
export default DateAuthor;
