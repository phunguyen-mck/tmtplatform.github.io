import React, { useMemo } from 'react';
import DonutChart from '../../components/Chart/DoughnutChart';
import styled from '@emotion/styled';

const Card = styled.div`
  width: 412px;
  background: var(--color-neutral-white) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000012;
  border-radius: 6px;
  opacity: 1;
  padding: 12px;
`;

const ITSpendInfo = () => {
  const metricPointsByFunction = useGetMetricPoints('function');
  return (
    <div>
      <Card>
        <DonutChart
          metricPoints={metricPointsByFunction}
          radius={135}
          innerRadius={90}
        />
      </Card>
    </div>
  );
};

export default ITSpendInfo;

const useGetMetricPoints = (byType) => {
  const metricPoints = useMemo(() => {
    if (byType === 'function') {
      return getChartMetricPointsByFunction();
    }
    return {};
  }, [byType]);

  return metricPoints;
};

const createMetricPoint = (label, value) => ({ label, value });
const getChartMetricPointsByFunction = () => [
  createMetricPoint('Data Centre', 16),
  createMetricPoint('Applications', 34),
  createMetricPoint('ICT Service Desk', 14),
  createMetricPoint('Communications', 19),
  createMetricPoint('End-User Computing', 25),
  createMetricPoint('Management', 27),
  createMetricPoint('Network', 32),
];
