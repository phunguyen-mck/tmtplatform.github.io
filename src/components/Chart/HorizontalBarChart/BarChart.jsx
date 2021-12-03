import React, { useCallback, useMemo } from 'react';
import { Grid } from '@mds/mds-reactjs-library';
import styled from '@emotion/styled';

const StyledBar = styled.div`
  width: ${(prop) => prop.width}px;
  height: 14px;
  background-color: ${(prop) => prop.backgroundColor};
  border-radius: 4px;
  position: relative;
  margin-left: 4px;
  margin-right: 4px;
`;
const StyledRow = styled.div`
  width: 100%;
  position: relative;
  height: ${(prop) => prop.height}px;
`;

const StyledRowInner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14;
`;

const StyledVerticalDivider = styled.div`
  border: 1px solid #f0f0f0;
  height: ${(prop) => prop.height}px;
  position: absolute;
  left: 50%;
`;

const reduceToGetMaxPointValue = (maxValue, pointValue) =>
  Math.max(maxValue, Math.abs(pointValue));

const getBarConfiguration =
  ({ chartWidth, maxPointValue }) =>
  (pointValue) => ({
    width: (Math.abs(pointValue) / maxPointValue) * chartWidth,
    direction: pointValue >= 0 ? 'right' : 'left',
  });

const Chart = ({ data, width, rowHeight }) => {
  const { values, backgroundColors } = data;
  const itemCount = values.length;
  const maxPointValue = useMemo(
    () => values.reduce(reduceToGetMaxPointValue, 0),
    []
  );
  const computeBarPosition = useCallback(
    getBarConfiguration({ maxPointValue, chartWidth: width / 2 }),
    [maxPointValue, width]
  );

  const renderRow = (pointValue, pointIndex) => {
    const { width: barWidth, direction } = computeBarPosition(pointValue);
    const style = {
      ...(direction === 'right' ? { left: width / 2 } : {}),
      ...(direction === 'left' ? { right: width / 2 } : {}),
    };
    let text = `${pointValue}%`;

    return (
      <StyledRow height={rowHeight} key={pointIndex}>
        <StyledRowInner style={style}>
          {direction === 'left' && text}
          <StyledBar
            width={barWidth}
            backgroundColor={backgroundColors[pointIndex]}
          />
          {direction === 'right' && text}
        </StyledRowInner>
      </StyledRow>
    );
  };

  return (
    <div style={{ width: width }}>
      <div style={{ position: 'relative' }}>
        <StyledVerticalDivider height={rowHeight * itemCount} />
        {values.map(renderRow)}
      </div>
    </div>
  );
};

export default Chart;
