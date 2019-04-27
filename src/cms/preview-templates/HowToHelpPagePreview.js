import React from "react";
import PropTypes from "prop-types";
import CmsWrapper from '../CmsWrapper';
import { HowToHelpPageTemplate } from "../../templates/how-to-help-page";

const HowToHelpPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <HowToHelpPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      content={widgetFor("body")}
    />
  </CmsWrapper>
);

HowToHelpPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HowToHelpPagePreview;
