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
  padding: 10px;
  position: relative;
  display: flex;
`;
const reduceToGetMaxPointValue = (maxValue, pointValue) =>
  Math.max(maxValue, Math.abs(pointValue));

const getBarConfiguration =
  ({ chartWidth, maxPointValue }) =>
  (pointValue) => ({
    width: (Math.abs(pointValue) / maxPointValue) * chartWidth,
    direction: pointValue >= 0 ? 'right' : 'left',
  });

const Chart = ({ data, width }) => {
  const { values, backgroundColors } = data;
  const maxPointValue = useMemo(
    () => values.reduce(reduceToGetMaxPointValue, 0),
    []
  );
  const computeBarPosition = useCallback(
    getBarConfiguration({ maxPointValue, chartWidth: width / 2 }),
    [maxPointValue, width]
  );

  return (
    <div style={{ width: width }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            border: '1px solid #f0f0f0',
            height: values.length * 34,
            position: 'absolute',
            left: width / 2 - 1,
          }}
        />
        {values.map((value, index) => {
          const { width: barWidth, direction } = computeBarPosition(value);
          const pos = {
            ...(direction === 'right' ? { left: width / 2 } : {}),
            ...(direction === 'left' ? { right: width / 2 } : {}),
          };
          let tmp = `${value}%`;

          return (
            <div style={{ width: '100%', position: 'relative', height: 34 }}>
              <div
                style={{
                  position: 'absolute',
                  ...pos,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 14,
                }}
              >
                {direction === 'left' && tmp}
                <StyledBar
                  width={barWidth}
                  backgroundColor={backgroundColors[index]}
                ></StyledBar>
                {direction === 'right' && tmp}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
