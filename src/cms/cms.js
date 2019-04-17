import CMS from "netlify-cms";

import HistoryPagePreview from "./preview-templates/HistoryPagePreview";
import NewsPostPreview from "./preview-templates/NewsPostPreview";
import HowToHelpPagePreview from "./preview-templates/HowToHelpPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("history", HistoryPagePreview);
CMS.registerPreviewTemplate("how-to-help", HowToHelpPagePreview);
CMS.registerPreviewTemplate("news-post", NewsPostPreview);
