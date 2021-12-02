import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography, ARTICLE_BODY } from '@mds/mds-reactjs-library';

import DonutChart from 'components/Chart/DoughnutChart';
import useThemeColorMapping from 'hooks/useThemeColorMapping';

const Card = styled.div`
  width: ${(props) => props.width}px;
  background: var(--color-neutral-white) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000012;
  border-radius: 6px;
  opacity: 1;
  padding: 12px 14px;
`;

const StyledTypoWrapper = styled(Typography)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: ${(prop) => prop.color};
`;

const ITSpendInfo = () => {
  const { primaryColor } = useThemeColorMapping();
  const metricPointsByFunction = useGetMetricPoints('function');
  const metricPointsBySegment = useGetMetricPoints('segment');
  const metricPointsByChannel = useGetMetricPoints('channel');

  const renderCard = (title, metricPoints) => (
    <Grid span={4} item>
      <Typography className="mb-4" type="ARTICLE_BODY">
        {title}
      </Typography>
      <Card width={412}>
        <DonutChart metricPoints={metricPoints} radius={135} innerRadius={90} />
      </Card>
    </Grid>
  );

  const renderMetricCard = (title, value) => {
    return (
      <Grid span={4} item>
        <Card width={412}>
          <Typography>{title}</Typography>
          <StyledTypoWrapper color={primaryColor}>
            <Typography
              className="font-weight-bolder"
              style={{ fontSize: 60 }}
              color="primary"
            >
              {value}
            </Typography>
            <Typography style={{ fontSize: 22 }}>Mn</Typography>
          </StyledTypoWrapper>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <div className="mb-8">
        <Typography type="HEADING_SIX" className="mb-3">
          IT Spend
        </Typography>
        <Grid container>
          {renderMetricCard('Total IT Spend', '$166')}
          {renderMetricCard('External IT Spend', '$131')}
          {renderMetricCard('Internal IT Spend', '$35')}
        </Grid>
      </div>
      <Typography type="HEADING_SIX" className="mb-3">
        IT spend breakup up segment and function
      </Typography>
      <Grid container spacing={16}>
        {renderCard('By segment', metricPointsBySegment)}
        {renderCard('By function', metricPointsByFunction)}
        {renderCard('By channel', metricPointsByChannel)}
      </Grid>
    </div>
  );
};

export default ITSpendInfo;

const useGetMetricPoints = (byType) => {
  const metricPoints = useMemo(() => {
    if (byType === 'function') {
      return getChartMetricPointsByFunction();
    }
    if (byType === 'channel') {
      return getChartMetricPointsByChannel();
    }
    if (byType === 'segment') {
      return getChartMetricPointsBySegment();
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

const getChartMetricPointsByChannel = () => [
  createMetricPoint('Internal Development and Maintenance (IT staff)', 18),
  createMetricPoint('Systems Integrators', 35),
  createMetricPoint('Vendors', 34),
  createMetricPoint('ICT Services providers/consulting firms', 27),
  createMetricPoint('Local Resellers', 24),
  createMetricPoint('Specialist Outsourcers', 10),
  createMetricPoint('Telcos', 20),
];

const getChartMetricPointsBySegment = () => [
  createMetricPoint('Hardware', 14),
  createMetricPoint('Network & Comms', 19),
  createMetricPoint('Consulting', 34),
  createMetricPoint('Software', 29),
  createMetricPoint('ICT services', 18),
  createMetricPoint('Others', 18),
];
