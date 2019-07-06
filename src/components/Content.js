import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Markdown = styled.div`
  & > *:first-child {
    margin-top: 0;
  }

  pre {
    color: white;
    padding: 10px;
    background: ${props => props.theme.navy};
    border-radius: 8px;
    @media (min-width: 992px) {
      padding: 20px;
    }
  }

  p,
  li,
  pre {
    font-size: 14px;
    line-height: 23px;
    @media (min-width: 992px) {
      font-size: 15px;
      line-height: 26px;
    }
    @media (min-width: 1380px) {
      font-size: 18px;
      line-height: 32px;
    }
  }

  blockquote {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 20px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      height: 100%;
      background: ${props => props.theme.blueFaded};
    }
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  h1 {
    font-size: 20px;
    @media (min-width: 992px) {
      font-size: 22px;
    }
    @media (min-width: 1380px) {
      font-size: 24px;
    }
  }

  code {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  h2 {
    font-size: 18px;
    @media (min-width: 992px) {
      font-size: 20px;
    }
    @media (min-width: 1380px) {
      font-size: 22px;
    }
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    @media (min-width: 992px) {
      font-size: 18px;
    }
    @media (min-width: 1380px) {
      font-size: 20px;
    }
  }

  h2,
  h3,
  p,
  ol,
  ul,
  blockquote,
  pre {
    margin-top: 24px;
    margin-bottom: 24px;
    @media (min-width: 992px) {
      margin-top: 26px;
      margin-bottom: 26px;
    }
    @media (min-width: 1380px) {
      margin-top: 28px;
      margin-bottom: 28px;
    }
  }
`;

export const HTMLContent = ({ content, className }) => (
  <Markdown dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => <Markdown>{content}</Markdown>;

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
