import React from 'react';
import styled from '@emotion/styled';
import {
  Grid,
  Typography,
  PARAGRAPH,
  BODY_SMALL,
} from '@mds/mds-reactjs-library';

const StyledColorBox = styled.div`
  min-width: 14px;
  height: 14px;
  background: ${(props) => props.backgroundColor};
  margin-right: 8px;
  margin-top: 2px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DoughnutLegend = ({ chartData }) => {
  const { labels, backgroundColors } = chartData;
  return (
    <Grid container spacing={16} className="w-100 mt-4 ml-2">
      {labels.map((label, index) => {
        return (
          <Grid item span={6} className="p-0 pb-2">
            <StyledContentWrapper className="d-flex">
              <StyledColorBox backgroundColor={backgroundColors[index]} />
              <Typography type={BODY_SMALL}>{label}</Typography>
            </StyledContentWrapper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DoughnutLegend;
