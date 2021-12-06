import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';
import styled from '@emotion/styled';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

const Revenue = function (props) {
  const { revenue } = props;
  const labels = _.map(revenue, (k) => k.year);

  // refactor this
  const institutionalClientsGroup = _.map(revenue, (k) => {
    return k.institutionalClientsGroup;
  });
  const globalConsumerBanking = _.map(revenue, (k) => {
    return k.globalConsumerBanking;
  });
  const citiHoldings = _.map(revenue, (k) => {
    return k.citiHoldings;
  });
  const corporateOther = _.map(revenue, (k) => {
    return k.corporateOther;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'institutionalClientsGroup',
        data: institutionalClientsGroup,
        backgroundColor: ['#051C2C'],
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: 'globalConsumerBanking',
        data: globalConsumerBanking,
        backgroundColor: ['#2251FF'],
      },
      {
        label: 'citiHoldings',
        data: citiHoldings,
        backgroundColor: ['#00A9F4'],
      },
      {
        label: 'corporateOther',
        data: corporateOther,
        backgroundColor: ['#AAE6F0'],
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        display: true,
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
      <div>Revenue (USD Mn)</div>
      <Bar data={data} options={options} />
    </Container>
  );
};

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
        backgroundColor: ['#051C2C'],
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
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
      <div>EBITDA Margin (%)</div>
      <Bar data={data} options={options} />
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
        backgroundColor: [
          '#034B6F',
          '#027AB1',
          '#3C96B4',
          '#39BDF3',
          '#71D2F1',
          '#AAE6F0',
        ],
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
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const Container = styled.div``;

  return (
    <Container>
      <div>Market capitalisation, CY (USB Mn)</div>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default function FinancialPerformance() {
  const data = getData();
  return (
    <ThemeProvider>
      <div className="container-fluid p-8">
        <div className="row">
          <div className="col-4">
            <Revenue revenue={_.get(data, 'client.revenue') || []} />
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
          margin: 35,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2017,
          margin: 36,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2018,
          margin: 36,
          institutionalClientsGroup: 35000,
          globalConsumerBanking: 13000,
          citiHoldings: 2500,
          corporateOther: 10000,
        },
        {
          year: 2019,
          margin: 25,
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
