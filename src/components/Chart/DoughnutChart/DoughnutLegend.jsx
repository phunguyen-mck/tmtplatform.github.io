import React from 'react';
import styled from '@emotion/styled';
import {
  Grid,
  Typography,
  PARAGRAPH,
  BODY_SMALL,
} from '@mds/mds-reactjs-library';

const StyledColorBox = styled.div`
  width: 14px;
  height: 14px;
  background: ${(props) => props.backgroundColor};
  margin-right: 8px;
`;

const DoughnutLegend = ({ chartData }) => {
  const { labels, backgroundColors } = chartData;
  return (
    <Grid container spacing={20} className="w-100 mt-4">
      {labels.map((label, index) => {
        return (
          <Grid item span={6}>
            <div className="d-inline-flex align-items-flex-start">
              <StyledColorBox backgroundColor={backgroundColors[index]} />
              <Typography type={BODY_SMALL}>{label}</Typography>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DoughnutLegend;
