import './mck-bootstrap.min.css';
import React from 'react';
import './ActiveEngagement.scss';
import _ from 'lodash';
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from '@emotion/styled';
import DownloadFile from '@mds/mds-icons/icons/svg/outline-16-data-download.svg';

import {
  Container,
  DISPLAY_SIX,
  Grid,
  HEADING_SIX,
  Table,
  ThemeProvider,
  Typography,
  Button,
  SIZE_SMALL,
  SECONDARY_BUTTON,
  Icon,
  TYPE_OUTLINE,
} from '@mds/mds-reactjs-library';

Chart.register(ArcElement);
const StatusTag = function (props) {
  let type = 'default';
  switch (props.type) {
    case 'completed':
      type = 'completed';
      break;
    case 'beingprocessed':
      type = 'beingprocessed';
      break;
    default:
      break;
  }
  return <div className={`status-tag ${type}`}>{props.value}</div>;
};

const EngagementCard = function (props) {
  const engagement = props.engagement;
  return (
    <div className="engagement-card">
      <div className="engagement-code">{engagement.code}</div>
      <div className="engagement-company-name">{engagement.companyName}</div>
      <StatusTag value={engagement.status} type={'completed'}></StatusTag>
    </div>
  );
};

const CodeCellRenderer = (args) => {
  const { value } = args;
  return <div className="code-cell">{value}</div>;
};

const TextCellRenderer = (args) => {
  const { value } = args;
  return <div className="text-cell">{value}</div>;
};

const StatusCellRenderer = (args) => {
  const { value } = args;

  const data = {
    labels: ['Done', 'NotDone'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#3C96B4', '#E6E6E6'],
        hoverOffset: 4,
      },
    ],
  };
  const plugins = [
    {
      beforeDraw: function (chart) {
        const fontSize = 15;
        const { height, width, ctx } = chart;
        ctx.restore();
        ctx.font = `${fontSize}px Bower`;
        ctx.textBaseline = 'top';
        const text = value + '%';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = Math.round((height - fontSize) / 2);
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const ButtonStyled = styled(Button)`
    border-radius: 3px;
  `;
  const downloadIcon = (
    <Icon size={16} type={TYPE_OUTLINE} src={DownloadFile} />
  );

  return (
    <div className="status-cell">
      {value < 100 && (
        <div className="d-flex flex-row align-items-center">
          <div className="canvas-container">
            <Doughnut
              data={data}
              options={{
                animation: false,
                cutout: 28,
                radius: 30,
              }}
              plugins={plugins}
            />
          </div>
          <StatusTag
            value={'Being processed'}
            type={'beingprocessed'}
          ></StatusTag>
        </div>
      )}
      {value == 100 && (
        <div className="p-1">
          <ButtonStyled
            size={SIZE_SMALL}
            appearance={SECONDARY_BUTTON}
            startIcon={downloadIcon}
          >
            Download File
          </ButtonStyled>
        </div>
      )}
    </div>
  );
};

const HeaderRenderer = (args) => {
  const { columnData } = args;
  return <div className="header-cell">{columnData.label}</div>;
};

const ActiveEngagements = function () {
  const engagements = [
    {
      companyName: 'Company A',
      code: '1234AB',
      status: 'Completed',
    },
    {
      companyName: 'Company A',
      code: '1234AB',
      status: 'Completed',
    },
    {
      companyName: 'Company A',
      code: '1234AB',
      status: 'Completed',
    },
    {
      companyName: 'Company A',
      code: '1234AB',
      status: 'Completed',
    },
  ];

  const columns = [
    {
      dataKey: 'chargeCode',
      label: 'Charge code',
      width: 160,
      CellRenderer: CodeCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'accountName',
      label: 'Account Name',
      width: 100,
      flexGrow: true,
      CellRenderer: TextCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'status',
      label: 'Status',
      width: 100,
      flexGrow: true,
      CellRenderer: TextCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'requestor',
      label: 'Requestor',
      width: 100,
      flexGrow: true,
      CellRenderer: TextCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'journey',
      label: 'Journey',
      width: 100,
      flexGrow: true,
      CellRenderer: TextCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'result',
      label: 'Result',
      width: 120,
      flexGrow: true,
      CellRenderer: StatusCellRenderer,
      HeaderRenderer,
    },
  ];
  const rows = [
    {
      chargeCode: '1234AB',
      accountName: 'Mastercard',
      status: 'Open',
      requestor: 'Anshul',
      journey: 'Account selection',
      result: 50,
    },
    {
      chargeCode: '1234AD',
      accountName: 'Morgan Stanley',
      status: 'Closed',
      requestor: 'Abhishree',
      journey: 'Account selection',
      result: 100,
    },
  ];

  return (
    <ThemeProvider
      customTheme={{
        table: {
          rowBgColor: '#FFFFFF',
          rowBorderBottom: '#D0D0D0',
          cellTextColor: '#000000',
          lightHeaderTextColor: '#000000',
          lightHeaderBgColor: '#FFFFFF',
        },
      }}
    >
      <Container responsive>
        <Grid container className="pt-sm-6 px-4">
          <Grid item span={12}>
            <div className="d-flex flex-row">
              <div className="engagement-container">
                <Typography type={HEADING_SIX} className="engagement-title">
                  Past engagements
                </Typography>
                {_.map(engagements, (engagement) => {
                  return <EngagementCard engagement={engagement} />;
                })}
              </div>
              <div className="active-engagements-container">
                <Typography type={DISPLAY_SIX} mobile>
                  Active Engagements
                </Typography>
                <Table
                  className="active-engagements-table"
                  dark={false}
                  columns={columns}
                  striped={false}
                  rows={rows}
                  rowHeight={80}
                  height={'auto'}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default ActiveEngagements;
