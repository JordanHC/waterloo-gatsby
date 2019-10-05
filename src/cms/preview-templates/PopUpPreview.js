import React from 'react';
import CmsWrapper from '../CmsWrapper';
import { BreakingNewsView } from '../../components/BreakingNews';

const BreakingNewsPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <CmsWrapper>
      <BreakingNewsView data={data} />
    </CmsWrapper>
  );
};

export default BreakingNewsPreview;
