import React from "react";
import PropTypes from "prop-types";
import CmsWrapper from '../CmsWrapper';
import { WhyWeAreFightingPageTemplate } from "../../templates/why-we-are-fighting-page";

const WhyWeAreFightingPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <WhyWeAreFightingPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      content={widgetFor("body")}
    />
  </CmsWrapper>
);

WhyWeAreFightingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default WhyWeAreFightingPagePreview;
