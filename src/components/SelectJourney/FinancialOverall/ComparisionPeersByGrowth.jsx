import React, { useMemo } from 'react';
import Chart from 'components/Chart/HorizontalBarChart';

import { fortmatTextPercentage } from 'lib/text';

const ComparisionPeersByGrowth = () => {
  const metricDataSet = useGetComparisionWithPeerByGrow();

  return (
    <Chart
      metricDataSet={metricDataSet}
      columnWidth={180}
      formatPointValue={fortmatTextPercentage}
    />
  );
};

export default ComparisionPeersByGrowth;

const useGetComparisionWithPeerByGrow = () => {
  const data = useMemo(() => {
    return getComparisionWithPeerByGrowthData();
  }, []);
  return data;
};

const getComparisionWithPeerByGrowthData = () => ({
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
      metricName: 'revenueGrowth',
      displayName: 'Revenue growth (%)',
      values: [1.6, 6.5, -2.9, 0.4, -6.0, 0.6],
    },
    {
      metricName: 'assetsGrowth',
      displayName: 'Revenue growth (%)',
      values: [7.0, 10.2, 1.5, 7.3, 0.1, 8.3],
    },
    {
      metricName: 'fteGrowth',
      displayName: 'FTE growth (%)',
      values: [0.2, 0.4, -3.8, -0.6, 0.7, -0.5],
    },
  ],
});
