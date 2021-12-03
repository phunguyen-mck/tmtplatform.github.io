import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';

import { reduceToGetMaxPointValue, getBarConfiguration } from './helpers';

const StyledBar = styled.div`
  width: ${(prop) => prop.width}px;
  height: 14px;
  background-color: ${(prop) => prop.backgroundColor};
  border-radius: 4px;
  position: relative;
  margin-left: 4px;
  margin-right: 8px;
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
  font-size: 12;
`;

const StyledVerticalDivider = styled.div`
  border: 1px solid #f0f0f0;
  height: ${(prop) => prop.height}px;
  position: absolute;
  left: 50%;
`;

const Chart = ({ data, width, rowHeight, formatPointValue }) => {
  const { values, backgroundColors } = data;
  const maxPointValue = useMemo(
    () => values.reduce(reduceToGetMaxPointValue, 0),
    []
  );
  const computeBarPosition = useCallback(
    getBarConfiguration({ maxPointValue, chartWidth: width / 2 }),
    [maxPointValue, width]
  );

  const renderRow = (pointValue, pointIndex) => {
    const { width: barWidth } = computeBarPosition(pointValue);
    let text = `${formatPointValue(pointValue)}`;

    return (
      <StyledRow height={rowHeight} key={pointIndex}>
        <StyledRowInner>
          <StyledBar
            width={barWidth}
            backgroundColor={backgroundColors[pointIndex]}
          />
          {text}
        </StyledRowInner>
      </StyledRow>
    );
  };

  return (
    <div style={{ width: width }}>
      <div style={{ position: 'relative' }}>{values.map(renderRow)}</div>
    </div>
  );
};

export default Chart;
