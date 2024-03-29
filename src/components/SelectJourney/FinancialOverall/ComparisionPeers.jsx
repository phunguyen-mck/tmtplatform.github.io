import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Grid, Button, SECONDARY_BUTTON, Icon } from '@mds/mds-reactjs-library';

import DocumentIcon from 'components/Icons/Documents.svg';

import ComparisionPeersByRevenue from './ComparisionPeersByRevenue';
import ComparisionPeersBySize from './ComparisionPeersBySize';
import ComparisionPeersByGrowth from './ComparisionPeersByGrowth';

const StyledButton = styled(Button)`
  width: 150px;
  display: block;
  margin-bottom: 14px;
  background-color: ${(props) => !props.selected && '#f0f0f0'};
  color: ${(props) => !props.selected && '#000'};

  &:hover {
    color: ${(props) => !props.selected && '#fff'} !important;
    opacity: ${(props) => !props.selected && 0.5};
  }
`;

const StyledGridContainer = styled(Grid)`
  flex-wrap: nowrap;
`;

const ComparisionByPeer = () => {
  const [byMetric, setByMetric] = useState(REVENUE_METRIC);
  return (
    <div>
      <StyledGridContainer container className="mt-5">
        <Grid item style={{ width: 200 }}>
          <StyledButton
            selected={byMetric === REVENUE_METRIC}
            onClick={() => setByMetric(REVENUE_METRIC)}
          >
            Revenue
          </StyledButton>
          <StyledButton
            selected={byMetric === SIZE_METRIC}
            onClick={() => setByMetric(SIZE_METRIC)}
          >
            Size
          </StyledButton>
          <StyledButton
            selected={byMetric === GROWTH_METRIC}
            onClick={() => setByMetric(GROWTH_METRIC)}
          >
            Growth
          </StyledButton>
        </Grid>
        <Grid item flex={1}>
          {byMetric === REVENUE_METRIC && <ComparisionPeersByRevenue />}
          {byMetric === SIZE_METRIC && <ComparisionPeersBySize />}
          {byMetric === GROWTH_METRIC && <ComparisionPeersByGrowth />}
        </Grid>
      </StyledGridContainer>
      <div className="w-100 text-center mt-6">
        <Button appearance={SECONDARY_BUTTON}>
          Add to slide
          <Icon src={DocumentIcon} className="ml-3" size={32} />
        </Button>
      </div>
    </div>
  );
};

export default ComparisionByPeer;

const REVENUE_METRIC = 0;
const SIZE_METRIC = 1;
const GROWTH_METRIC = 2;
