import React, { useMemo } from 'react';
import Chart from 'components/Chart/HorizontalBarChart';

import { fortmatTextPercentage } from 'lib/text';
const ComparisionPeersByRevenue = () => {
  const metricDataSet = useGetRevenueComparisionWithPeerPercentage();

  return (
    <Chart
      metricDataSet={metricDataSet}
      columnWidth={180}
      formatPointValue={fortmatTextPercentage}
    />
  );
};

export default ComparisionPeersByRevenue;

const getComparisionWithPeerData = () => ({
  labels: [
    'Citigroup Inc',
    'JPMorgan Chase & Co.',
    'Banco Santander, S.A.',
    'Bank ',
    'Wells',
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
