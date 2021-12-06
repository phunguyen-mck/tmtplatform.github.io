import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';
import styled from '@emotion/styled';
import RevenueChartComponent, {
  BorderedDiv,
  Title,
} from './RevenueChartComponent';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import numeral from 'numeral';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

const EBITDA = function (props) {
  const { EBITDAMargin } = props;
  const labels = _.map(EBITDAMargin, (k) => k.year);
  const margins = _.map(EBITDAMargin, (k) => {
    return k.margin;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'margin',
        data: margins,
        barThickness: 30,
        backgroundColor: ['#051C2C'],
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        color: '#7F7F7F',
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#000000',
        anchor: 'end',
        align: 'top',
        formatter: function (value) {
          return value + '%';
        },
        font: {
          size: 14,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const Container = styled.div`
    height: 600px;
  `;

  return (
    <Container>
      <Title className="mb-4">
        <span>EBITDA Margin</span> (%)
      </Title>
      <BorderedDiv>
        <Bar
          data={data}
          options={options}
          height={300}
          plugins={[ChartDataLabels]}
        />
      </BorderedDiv>
    </Container>
  );
};

const MarketCapitalization = function (props) {
  const { marketCapitalisation } = props;
  const labels = _.map(marketCapitalisation, (k) => k.name);
  const dataset = _.map(marketCapitalisation, (k) => {
    return k.marketCap;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'margin',
        data: dataset,
        barThickness: 30,
        backgroundColor: [
          '#034B6F',
          '#027AB1',
          '#3C96B4',
          '#39BDF3',
          '#71D2F1',
          '#AAE6F0',
        ],
        color: '#7F7F7F',
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
        color: '#000000',
        anchor: 'end',
        align: 'center',
        clamp: true,
        formatter: function (value) {
          return '               ' + numeral(value).format('0,0');
        },
        font: {
          size: 14,
        },
      },
    },
  };

  const Container = styled.div`
    height: 600px;
  `;

  return (
    <Container>
      <Title className="mb-4">
        <span>Market capitalisation, CY</span> (USB Mn)
      </Title>
      <BorderedDiv>
        <Bar
          data={data}
          options={options}
          height={169}
          plugins={[ChartDataLabels]}
        />
      </BorderedDiv>
    </Container>
  );
};

export default function FinancialPerformance() {
  const data = getData();
  return (
    <ThemeProvider>
      <div className="container-fluid px-2 py-8">
        <div className="row">
          <div className="col-4">
            <RevenueChartComponent
              revenue={_.get(data, 'client.revenue') || []}
            />
          </div>
          <div className="col-3">
            <EBITDA EBITDAMargin={_.get(data, 'client.EBITDAMargin') || []} />
          </div>
          <div className="col-5">
            <MarketCapitalization
              marketCapitalisation={
                _.get(data, 'client.marketCapitalisation') || []
              }
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

const getData = function () {
  return {
    client: {
      name: 'Citibank',
      revenue: [
        {
          year: 2016,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2017,
          institutionalClientsGroup: 3000,
          globalConsumerBanking: 1000,
          citiHoldings: 25000,
          corporateOther: 20000,
        },
        {
          year: 2018,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2019,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2020,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
      ],
      EBITDAMargin: [
        {
          year: 2016,
          margin: 35,
        },
        {
          year: 2017,
          margin: 36,
        },
        {
          year: 2018,
          margin: 36,
        },
        {
          year: 2019,
          margin: 25,
        },
      ],
      marketCapitalisation: [
        {
          name: 'Citigroup Inc',
          marketCap: 133501,
        },
        {
          name: 'JPMorgan Chase & Co.',
          marketCap: 493411,
        },
        {
          name: 'Banco Santander, S.A.',
          marketCap: 58112,
        },
        {
          name: 'Bank of America Corporation',
          marketCap: 389808,
        },
        {
          name: 'Wells Fargo & Company',
          marketCap: 204585,
        },
        {
          name: 'BNP Paribas SA',
          marketCap: 81142,
        },
      ],
    },
  };
};
