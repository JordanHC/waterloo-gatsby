import React from "react";
import PropTypes from "prop-types";
import { HowToHelpPageTemplate } from "../../templates/how-to-help-page";

const HowToHelpPagePreview = ({ entry, widgetFor }) => (
  <HowToHelpPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

HowToHelpPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HowToHelpPagePreview;
