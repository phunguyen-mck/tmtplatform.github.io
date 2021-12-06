import _ from 'lodash';
import styled from '@emotion/styled';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import numeral from 'numeral';

const Label = styled.div`
  font: normal normal 300 14px/9px McKinsey Sans;
  color: #7f7f7f;
`;

const YAxis = function (props) {
  const { yAxisMax, yAxisHeight } = props;
  const totalProportion = 4;

  const Container = styled.div`
    text-align: right;
    margin-bottom: 20px;
  `;

  const getLabel = function (max, proportion, totalProportion) {
    return numeral(Math.round((max * proportion) / totalProportion)).format(
      0,
      0
    );
  };

  return (
    <Container
      className="d-flex flex-column justify-content-between"
      style={{
        height: yAxisHeight,
      }}
    >
      <Label>{getLabel(yAxisMax, 4, totalProportion)}</Label>
      <Label>{getLabel(yAxisMax, 3, totalProportion)}</Label>
      <Label>{getLabel(yAxisMax, 2, totalProportion)}</Label>
      <Label>{getLabel(yAxisMax, 1, totalProportion)}</Label>
      <Label>{0}</Label>
    </Container>
  );
};

const StackedChart = function (props) {
  const { data, yAxisMax, yAxisHeight } = props;
  const label = props.data.year;
  const dataset = _.omit(data, ['year']);

  let total = 0;
  _.each(dataset, (k) => {
    total += k;
  });

  const stackHeight = (total / yAxisMax) * yAxisHeight;

  const Container = styled.div`
    font: normal normal 300 14px/9px McKinsey Sans;
    height: ${stackHeight}px;
    width: 30px;
    position: relative;
  `;

  let currentHeight = 0;
  let i = 0;
  const bgColors = ['#AAE6F0', '#00A9F4', '#2251FF', '#051C2C'];

  return (
    <div className="d-flex  align-items-center flex-column">
      <div>{numeral(total).format('0,0')}</div>
      <Container>
        {_.reverse(
          _.map(dataset, (k) => {
            let height = (k / total) * stackHeight + currentHeight;
            // todo think about another approach to this
            height = height < 20 ? 0 : height;
            const Bar = styled.div`
              position: absolute;
              bottom: 0;
              left: 0;
              height: ${height}px;
              width: 100%;
              background-color: ${bgColors[i % bgColors.length]};
              border-radius: 50px;
              color: white;
            `;
            currentHeight = height;
            i++;
            return <Bar />;
          })
        )}
      </Container>
      <Label className="mt-2">{label}</Label>
    </div>
  );
};

export const BorderedDiv = styled.div`
  border: 1px solid #b3b3b3;
  padding: 12px;
`;

export const Title = styled.div`
  font: normal normal 300 20px/10px McKinsey Sans;

  span {
    font: normal normal 500 20px/10px McKinsey Sans;
  }
`;

export default function RevenueChartComponent(props) {
  const { revenue } = props;

  const Container = styled.div`
    height: 600px;
  `;

  return (
    <Container>
      <Title className="mb-4">
        <span>Revenue</span> (USD Mn)
      </Title>
      <BorderedDiv className="container">
        <div className="d-flex align-items-end justify-content-between">
          <div className="px-2">
            <YAxis yAxisMax={80000} yAxisHeight={300} />
          </div>
          {_.map(revenue, (k) => {
            return (
              <div className="px-2">
                <StackedChart data={k} yAxisMax={80000} yAxisHeight={300} />
              </div>
            );
          })}
        </div>
      </BorderedDiv>
    </Container>
  );
}
