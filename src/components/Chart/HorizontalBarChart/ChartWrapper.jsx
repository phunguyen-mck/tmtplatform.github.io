import React, { useMemo, useCallback } from 'react';
import styled from '@emotion/styled';
import { Typography, Grid, Icon, Button } from '@mds/mds-reactjs-library';

import BarChart from './BarChart';

const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  position: relative;
  margin: 0px auto;
`;

const mapMetricDataToChartDataSet = (backgroundColors) => (metric) => ({
  name: metric.metricName,
  displayName: metric.displayName,
  values: metric.values,
  backgroundColors,
});

const getDatasetDisplayName = (dataset) => dataset.displayName;

const ChartWrapper = ({
  columnWidth,

  // data
  // Array<{ label: string, value: number }>
  /**
   * {
   *   labels: Array<string>
   *   metrics: Array<{
   *      displayName: string,
   *      name: string,
   *      values: Array<number>
   *   }>
   * }
   */
  metricDataSet,
}) => {
  const backgroundColors = useMemo(() => getDefaultBackgroundColors(), []);
  const transformMetricToDataSet = useCallback(
    mapMetricDataToChartDataSet(backgroundColors),
    [backgroundColors]
  );

  const { labels, metrics } = metricDataSet;
  console.log(labels);

  const datasets = useMemo(
    () => metrics.map(transformMetricToDataSet),
    [metrics, transformMetricToDataSet]
  );

  const datasetsDisplayNames = useMemo(
    () => datasets.map(getDatasetDisplayName),
    [datasets]
  );

  const renderChart = (data) => (
    <Grid item key={data.name}>
      <Wrapper width={columnWidth}>
        <BarChart data={data} width={columnWidth} />
      </Wrapper>
    </Grid>
  );

  return (
    <React.Fragment>
      <ChartDatasetName
        displayNames={datasetsDisplayNames}
        columnWidth={columnWidth}
      />
      <Grid
        container
        style={{ width: '100%', justifyContent: 'center' }}
        spacing={100}
      >
        <Grid item>
          <ChartLegend labels={labels} />
        </Grid>
        {datasets.map((data) => renderChart(data))}
      </Grid>
    </React.Fragment>
  );
};

export default ChartWrapper;

const ChartLegend = ({ labels }) => {
  const StyledLabel = styled.div`
    height: 34px;
    font-szie: 14;
    color: #7f7f7f;
    text-align: right;
  `;
  return (
    <React.Fragment>
      {labels.map((label) => (
        <StyledLabel key={label}>{label}</StyledLabel>
      ))}
    </React.Fragment>
  );
};

const ChartDatasetName = ({ displayNames, columnWidth }) => {
  const StyledContainer = styled(Grid)`
    width: 100%;
    justify-content: center;
    font-size: 14;
  `;

  const renderDisplayName = (displayName) => (
    <Grid item style={{ width: columnWidth }}>
      {displayName}
    </Grid>
  );

  return (
    <StyledContainer container>
      <Grid item span={3}></Grid>
      {displayNames.map(renderDisplayName)}
    </StyledContainer>
  );
};

const getDefaultBackgroundColors = () => [
  '#051C2C',
  '#027AB1',
  '#3C96B4',
  '#39BDF3',
  '#3C96B4',
  '#71D2F1',
  '#AAE6F0',
];
