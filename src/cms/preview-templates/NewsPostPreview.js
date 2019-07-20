import React from 'react';
import PropTypes from 'prop-types';
import CmsWrapper from '../CmsWrapper';
import { NewsPostTemplate } from '../../templates/news-post';

const NewsPostPreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <NewsPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
    />
  </CmsWrapper>
);

NewsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default NewsPostPreview;
