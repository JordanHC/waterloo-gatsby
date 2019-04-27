import React from "react";
import PropTypes from "prop-types";
import { HistoryPageTemplate } from "../../templates/history-page";
import CmsWrapper from '../CmsWrapper';

const HistoryPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <HistoryPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      content={widgetFor("body")}
    />
  </CmsWrapper>
);

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HistoryPagePreview;
