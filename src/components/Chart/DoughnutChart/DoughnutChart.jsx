import React, { useState, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { hexToRGB, getTextColorByBackgroundColor } from 'lib/color';

const DoughnutChart = React.memo(
  ({ onPieHover, data: rawData, radius, innerRadius }) => {
    const options = buildChartOptions({
      onPieHover,
      innerRadius,
      backgroundColors: rawData.backgroundColors,
    });
    const data = transformRawDataToChartData(rawData);

    return (
      <Doughnut
        width={radius * 2}
        height={radius * 2}
        data={data}
        redraw={false}
        options={options}
        plugins={[ChartDataLabels]}
      />
    );
  }
);

export default DoughnutChart;

const transformRawDataToChartData = (rawData) => {
  const backgroundColors = rawData.backgroundColors;
  return {
    labels: rawData.labels,
    datasets: [
      {
        data: rawData.values,
        backgroundColor: ({ dataIndex }) => {
          const hexColor = backgroundColors[dataIndex];
          return hexToRGB(hexColor, { opacity: 0.5 });
        },
        hoverBackgroundColor: ({ dataIndex }) => {
          const hexColor = backgroundColors[dataIndex];
          return hexToRGB(hexColor);
        },
        hoverBorderWidth: 0,
        borderWidth: 0,

        offset: 8,
        hoverOffset: 8,
      },
    ],
  };
};

/**
 *
 * @param {Object} param0
 * {
 *     onPieHover : Function,
 *     backgroundColors: Array<ColorString>,
 *     innerRadius: number
 * }
 * @returns
 * {
 *   animation: boolean,
 *   cutout: number,
 *   onHover: Function,
 *   plugins: {
 *      dataLabels: DataLabelsSetting
 *   }
 * }
 */
const buildChartOptions = ({ onPieHover, backgroundColors, innerRadius }) => ({
  animation: false,
  cutout: innerRadius,
  onHover: (_, context) => {
    if (!context || context[0] === undefined) {
      onPieHover(undefined);
      return;
    }
    const { index } = context[0];
    onPieHover(index);
  },
  plugins: {
    datalabels: {
      display: true,
      align: 'center',
      anchor: 'center',
      textAlign: 'center',
      color: function (context) {
        var index = context.dataIndex;
        var backgroundColor = backgroundColors[index];
        return getTextColorByBackgroundColor(hexToRGB(backgroundColor));
      },
      font: function (context) {
        const { active } = context;
        return active ? { size: 20 } : { size: 12 };
      },
    },
  },
});
