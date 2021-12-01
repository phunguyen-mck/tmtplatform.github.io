import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import {
  Breadcrumbs,
  Typography,
  HEADING_FIVE,
  Container,
  Grid,
  Icon,
} from '@mds/mds-reactjs-library';
import ArrowLeft from '@mds/mds-icons/icons/svg/outline-24-arrow-left.svg';
import Outline48ChartBar33 from '@mds/mds-icons/icons/svg/outline-48-chart-bar-33.svg';
import Outline48Laptop72 from '@mds/mds-icons/icons/svg/outline-48-laptop-72.svg';
import Outline48MoneyCoins from '@mds/mds-icons/icons/svg/outline-48-money-coins.svg';
import Outline48Calendar2 from '@mds/mds-icons/icons/svg/outline-48-calendar-2.svg';
import Outline48Handshake from '@mds/mds-icons/icons/svg/outline-48-handshake.svg';
import Outline48FilterOrganization from '@mds/mds-icons/icons/svg/outline-48-filter-organization.svg';

import useThemeColorMapping from '../../hooks/useThemeColorMapping';
import { navigateToJourneyPage } from '../../lib/navigators';

import StrategyCard from './Card';

const StrategyHubPage = () => {
  const { name: accountName } = useAccount();
  const { primaryColor } = useThemeColorMapping();
  const PrimaryText = styled(Typography)`
    color: ${primaryColor};
  `;

  const strategyList = useMemo(() => getStrategeList(), []);
  const navigate = useNavigate();

  return (
    <Container maxWidth={1000} className="mt-4 p-1" style={{ height: '100%' }}>
      <div className="d-flex align-items-center">
        <Icon
          size={24}
          type="gylph"
          src={ArrowLeft}
          onClick={() => navigateToJourneyPage(navigate)}
          style={{ cursor: 'pointer' }}
        />
        <Breadcrumbs className="ml-3">
          <a className="font-weight-light">Select units of performance</a>
          <a className="font-weight-light">Select your journey</a>
        </Breadcrumbs>
      </div>
      <div>
        <Typography type={HEADING_FIVE} className="mt-1">
          Welcome to the{' '}
          <PrimaryText component="span">
            Account Strategy and Planning
          </PrimaryText>{' '}
          hub for
          <PrimaryText component="span">{accountName}</PrimaryText>
        </Typography>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Grid container spacing={40} className="mt-6">
          {strategyList.map(({ name, icon }) => (
            <Grid item>
              <StrategyCard name={name} icon={icon} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

// Mock data
// It should get data from the previous page (JourneyPage)
const useAccount = () => {
  const account = useMemo(() => ({ name: 'Citibank' }), []);
  return account;
};

const getStrategeList = () => [
  {
    name: 'Overall financials & strategic priorities',
    icon: Outline48ChartBar33,
  },
  {
    name: 'Top digital offerings',
    icon: Outline48Laptop72,
  },
  {
    name: 'IT spend map',
    icon: Outline48MoneyCoins,
  },
  {
    name: 'Past deals and upcoming renewals',
    icon: Outline48Calendar2,
  },
  {
    name: 'Major deals by peers',
    icon: Outline48Handshake,
  },
  {
    name: 'Org and key stakeholders',
    icon: Outline48FilterOrganization,
  },
];

export default StrategyHubPage;
