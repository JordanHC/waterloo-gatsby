import React from "react";
import PropTypes from "prop-types";
import { ThanksTemplate } from "../../pages/thanks";

const ThanksPagePreview = ({ entry, widgetFor }) => (
  <ThanksTemplate
    heading={entry.getIn(["data", "heading"])}
    subheading={entry.getIn(["data", "subheading"])}
  />
);

ThanksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ThanksPagePreview;
