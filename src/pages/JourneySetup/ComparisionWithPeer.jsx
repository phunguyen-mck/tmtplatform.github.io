import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import { Typography, Grid, Icon, Button } from '@mds/mds-reactjs-library';
import Chart from 'components/Chart/HorizontalBarChart';

const ComparisionByPeer = () => {
  const metricDataSet = useGetRevenueComparisionWithPeerPercentage();

  return (
    <div>
      <Chart metricDataSet={metricDataSet} columnWidth={180} />
    </div>
  );
};

const StyledButton = styled(Button)`
  width: 150px;
  display: block;
  margin-bottom: 14px;
  background-color: ${(props) => !props.selected && '#f0f0f0'};
  color: ${(props) => !props.selected && '#000'};
`;
const T = () => {
  return (
    <div>
      <Grid container>
        <Grid item style={{ width: 200 }}>
          <StyledButton selected>Revenue</StyledButton>
          <StyledButton>Size</StyledButton>
          <StyledButton>Growth</StyledButton>
        </Grid>
        <Grid item flex={1}>
          <ComparisionByPeer />
        </Grid>
      </Grid>
    </div>
  );
};

export default T;

const getComparisionWithPeerData = () => ({
  labels: [
    'Citigroup Inc',
    'JPMorgan Chase & Co.',
    'Banco Santander, S.A.',
    'Bank of America Corporation',
    'Wells Fargo & Company',
    'BNP Paribas SA',
  ],
  metrics: [
    {
      metricName: 'anually',
      displayName: 'Year-over-year',
      values: [0, 3.4, -10, -4, -13.4, -1.1],
    },
    {
      metricName: '3Years',
      displayName: '3 Years',
      values: [1.6, 6.5, -2.9, -0.4, -6.0, -0.6],
    },
    {
      metricName: '5Years',
      displayName: '5 Years',
      values: [-0.5, 5.1, -0.7, -0.8, -3.4, 0.5],
    },
  ],
});

const useGetRevenueComparisionWithPeerPercentage = () => {
  const data = useMemo(() => {
    return getComparisionWithPeerData();
  }, []);
  return data;
};
