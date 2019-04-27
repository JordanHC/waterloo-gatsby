import React from "react";
import PropTypes from "prop-types";
import CmsWrapper from '../CmsWrapper';
import { ThanksTemplate } from "../../pages/thanks";

const ThanksPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <ThanksTemplate
      heading={entry.getIn(["data", "heading"])}
      subheading={entry.getIn(["data", "subheading"])}
      image={entry.getIn(["data", "image"])}
    />
  </CmsWrapper>
);

ThanksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ThanksPagePreview;
