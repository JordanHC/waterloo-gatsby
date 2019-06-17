import React from "react";
import PropTypes from "prop-types";
import CmsWrapper from '../CmsWrapper';
import { CampaignUpdatesPageTemplate } from "../../templates/campaign-updates-page";

const CampaignUpdatesPagePreview = ({ entry, widgetFor }) => (
  <CmsWrapper>
    <CampaignUpdatesPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      content={widgetFor("body")}
    />
  </CmsWrapper>
);

CampaignUpdatesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CampaignUpdatesPagePreview;
