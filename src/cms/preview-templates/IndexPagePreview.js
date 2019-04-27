import React from 'react';
import PropTypes from 'prop-types';
import getCtas from '../../utils/getCtas';
import CmsWrapper from '../CmsWrapper';
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const callToActions = getCtas( data, "cta" );
  if (data) {
    return (
      <CmsWrapper>
        <IndexPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
          callToActions={callToActions}
        />
      </CmsWrapper>
    )
  } else {
    return (<div>Loading...</div>)
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
