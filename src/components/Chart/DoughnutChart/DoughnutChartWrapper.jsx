import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';

import DoughnutChart from './DoughnutChart';
import DoughnutLabel from './DoughnutLabel';
import DoughnutLegend from './DoughnutLegend';

const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  position: relative;
  margin: 0px auto;
`;

const ChartWrapper = ({
  radius,
  innerRadius,

  // data
  // Array<{ label: string, value: number }>
  metricPoints,
}) => {
  const [hoveredPieIndex, setHoverPieIndex] = useState(undefined);
  const backgroundColors = useMemo(() => getDefaultBackgroundColors(), []);

  const data = useMemo(() => {
    return metricPoints.reduce(
      (chartData, nextPoint) => {
        return {
          labels: chartData.labels.concat(nextPoint.label),
          values: chartData.values.concat(nextPoint.value),
          backgroundColors,
        };
      },
      { labels: [], values: [] }
    );
  }, [metricPoints]);

  return (
    <div>
      <Wrapper width={radius * 2}>
        <DoughnutChart
          onPieHover={setHoverPieIndex}
          data={data}
          radius={radius}
          innerRadius={innerRadius}
        />

        <DoughnutLabel {...{ radius, innerRadius }}>
          {hoveredPieIndex !== undefined ? data.labels[hoveredPieIndex] : ''}
        </DoughnutLabel>
      </Wrapper>
      <DoughnutLegend chartData={data}></DoughnutLegend>
    </div>
  );
};

export default ChartWrapper;

const getDefaultBackgroundColors = () => [
  '#8C5AC8',
  '#051C2C',
  '#00A9F4',
  '#2251FF',
  '#3C96B4',
  '#AFC3FF',
  '#AAE6F0',
];
