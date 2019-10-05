import CMS from "netlify-cms";

import StandardPageTemplate from "./preview-templates/StandardPagePreview";
import NewsPostPreview from "./preview-templates/NewsPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ThanksPagePreview from "./preview-templates/ThanksPagePreview";
import PopUpPreview from "./preview-templates/PopUpPreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("standard-page", StandardPageTemplate);
CMS.registerPreviewTemplate("latest-news", NewsPostPreview);
CMS.registerPreviewTemplate("thanks", ThanksPagePreview);
CMS.registerPreviewTemplate("pop-up", PopUpPreview);