import React, {
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import { Grid, useWindowResize } from '@mds/mds-reactjs-library';

import BarChartTwoSide from './BarChartTwoSide';
import BarChartOneSide from './BarChartOneSide';

const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  position: relative;
  margin: 0px auto;
`;

const StyledGridWrapper = styled(Grid)`
  width: 100%;
  max-width: 1180px;
  justify-content: center;
  flex-wrap: nowrap;
`;

const mapMetricDataToChartDataSet = (backgroundColors) => (metric) => ({
  name: metric.metricName,
  displayName: metric.displayName,
  values: metric.values,
  // twoside or oneside
  hasNegativeValue: !!metric.values.find((f) => f < 0),
  backgroundColors,
});

const getDatasetDisplayName = (dataset) => dataset.displayName;

const ChartWrapper = ({
  columnWidth: originalColumnWidth,
  spacing = 100,
  rowHeight = 34,
  formatPointValue = (x) => x,

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

  const [columnWidth, setColumnWidth] = useState(originalColumnWidth);
  const { labels, metrics } = metricDataSet;

  const datasets = useMemo(
    () => metrics.map(transformMetricToDataSet),
    [metrics, transformMetricToDataSet]
  );

  const datasetsDisplayNames = useMemo(
    () => datasets.map(getDatasetDisplayName),
    [datasets]
  );

  const renderChart = (dataset) => {
    let Chart = dataset.hasNegativeValue ? BarChartTwoSide : BarChartOneSide;

    return (
      <Grid item key={dataset.name}>
        <Wrapper width={columnWidth}>
          <Chart
            data={dataset}
            width={columnWidth}
            rowHeight={rowHeight}
            formatPointValue={formatPointValue}
          />
        </Wrapper>
      </Grid>
    );
  };
  const containerRef = useRef();

  const computeColumnWidth = () => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setColumnWidth(Math.round(width / 4) - spacing);
  };

  useWindowResize(computeColumnWidth);
  useEffect(() => {
    computeColumnWidth();
  }, []);

  return (
    <div>
      <ChartDatasetName displayNames={datasetsDisplayNames} />
      <div ref={containerRef}>
        <StyledGridWrapper container spacing={spacing}>
          <Grid item>
            <ChartLegend labels={labels} rowHeight={rowHeight} />
          </Grid>
          {datasets.map((dataset) => renderChart(dataset))}
        </StyledGridWrapper>
      </div>
    </div>
  );
};

export default ChartWrapper;

const ChartLegend = ({ labels, rowHeight }) => {
  const StyledLabel = styled.div`
    height: ${(prop) => prop.rowHeight}px;
    font-szie: 12;
    color: #7f7f7f;
    text-align: right;
  `;
  return (
    <React.Fragment>
      {labels.map((label) => (
        <StyledLabel key={label} rowHeight={rowHeight}>
          {label}
        </StyledLabel>
      ))}
    </React.Fragment>
  );
};

const ChartDatasetName = ({ displayNames, columnWidth }) => {
  const StyledContainer = styled(Grid)`
    width: 100%;
    justify-content: center;
    font-size: 12;
    margin-bottom: 16px;
  `;

  const renderDisplayName = (displayName) => (
    <Grid item span={3} key={displayName}>
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
