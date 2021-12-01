import './mck-bootstrap.min.css';
import React from 'react';
import './ActiveEngagement.scss';
import _ from 'lodash';
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import {
  Container,
  DISPLAY_SIX,
  Grid,
  HEADING_SIX,
  Table,
  ThemeProvider,
  Typography,
} from '@mds/mds-reactjs-library';

Chart.register(ArcElement);
const StatusTag = function (props) {
  let type = 'default';
  switch (props.type) {
    case 'completed':
      type = 'completed';
      break;
    case 'inprogress':
      type = 'inprogress';
      break;
    default:
      break;
  }
  return <div className={`status-tag ${props.type}`}>{props.value}</div>;
};

const EngagementCard = function (props) {
  const engagement = props.engagement;
  return (
    <div className="engagement-card">
      <div className="engagement-code">{engagement.code}</div>
      <div className="engagement-company-name">{engagement.companyName}</div>
      <StatusTag value={engagement.status} type={'inprogress'}></StatusTag>
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
        data: [39, 61],
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

  return (
    <div className="status-cell d-flex flex-row align-items-center">
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
      <StatusTag value={'In progress'} type={'inprogress'}></StatusTag>
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
      dataKey: 'client',
      label: 'Client',
      width: 100,
      flexGrow: true,
      CellRenderer: TextCellRenderer,
      HeaderRenderer,
    },
    {
      dataKey: 'projectName',
      label: 'Project name',
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
      dataKey: 'stage',
      label: 'Stage',
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
      CellRenderer: StatusCellRenderer,
      HeaderRenderer,
    },
  ];
  const rows = [
    {
      chargeCode: '1234AB',
      client: 'TechM',
      projectName: 'E2E growth diagnostic',
      requestor: 'Saurabh',
      stage: 'New project creation',
      status: 39,
    },
    {
      chargeCode: '1234AB',
      client: 'TechM',
      projectName: 'E2E growth diagnostic',
      requestor: 'Saurabh',
      stage: 'New project creation',
      status: 39,
    },
    {
      chargeCode: '1234AB',
      client: 'TechM',
      projectName: 'E2E growth diagnostic',
      requestor: 'Saurabh',
      stage: 'New project creation',
      status: 39,
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
        <Grid container className="pt-sm-6">
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
