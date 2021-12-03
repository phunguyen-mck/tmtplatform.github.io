export const reduceToGetMaxPointValue = (maxValue, pointValue) =>
  Math.max(maxValue, Math.abs(pointValue));

export const getBarConfiguration =
  ({ chartWidth, maxPointValue }) =>
  (pointValue) => ({
    width: (Math.abs(pointValue) / maxPointValue) * chartWidth,
    direction: pointValue >= 0 ? 'right' : 'left',
  });
