import React, { useMemo } from 'react';
import Chart from 'components/Chart/HorizontalBarChart';

import { formatNumberWithCommas } from 'lib/text';

const ComparisionPeersBySize = () => {
  const metricDataSet = useGetComparisionWithPeerBySize();

  return (
    <Chart
      metricDataSet={metricDataSet}
      columnWidth={180}
      formatPointValue={formatNumberWithCommas}
    />
  );
};

export default ComparisionPeersBySize;

const useGetComparisionWithPeerBySize = () => {
  const data = useMemo(() => {
    return getComparisionWithPeerBySizeData();
  }, []);
  return data;
};

const getComparisionWithPeerBySizeData = () => ({
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
      metricName: 'adjustedRevenue',
      displayName: 'Adjusted revenue (USD Mn)',
      values: [74291, 119537, 54164, 85528, 72377, 54676],
    },
    {
      metricName: 'totalAssets',
      displayName: 'Total assets (USD Bn)',
      values: [2260, 3386, 1844, 2819, 1955, 3044],
    },
    {
      metricName: 'fte',
      displayName: 'FTE (count)',
      values: [210000, 255351, 180231, 231000, 268531, 193319],
    },
  ],
});
