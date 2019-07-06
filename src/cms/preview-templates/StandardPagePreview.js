import React from "react";
import PropTypes from "prop-types";
import { StandardPageTemplate } from "../../templates/standard-page";
import CmsWrapper from '../CmsWrapper';

const StandardPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <StandardPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      content={widgetFor("body")}
    />
  </CmsWrapper>
);

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default StandardPagePreview;
