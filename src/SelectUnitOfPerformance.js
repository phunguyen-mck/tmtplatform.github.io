import './mck-bootstrap.min.css';
import React from 'react';
import styled from '@emotion/styled/macro';

import { Box, Container, Icon, TYPE_OUTLINE } from '@mds/mds-reactjs-library';
import ArrowLeft from './images/arrow-left.svg';
import Account from './images/account.svg';
import Deals from './images/deals.svg';
import ServiceLines from './images/service-lines.svg';
import Alliances from './images/alliances.svg';
import Org from './images/org.svg';
import CapabilityBuilding from './images/capability-building.svg';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

const UnitOfPerformanceCard = function (props) {
  const IconContainer = styled.div`
    height: 100px;
    width: 100px;
    background-color: #2251ff;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin: 29px 0 29px 18px;
  `;

  const Container = styled.div`
    display: flex;
    height: 156px;
    width: 300px;
    background-color: #e2f3ff;
    border-radius: 8px;
    align-items: center;
    color: #333333;
    cursor: pointer;

    & + * {
      margin-left: 28px;
    }

    :hover {
      background: #2251ff;
      color: #ffffff;

      ${IconContainer} {
        background-color: #5478fe;
        border-radius: 8px 200px 200px 8px;
        height: 200px;
        width: 200px;
        margin: 0 0 0 -82px;
        padding-left: 50px;
        transition: all 300ms;
      }

      transition: all 200ms;
    }

    overflow: hidden;
  `;

  const UnitNameDiv = styled.div`
    font: normal normal 500 24px/26px McKinsey Sans;
    letter-spacing: 0.58px;
    margin-left: 18px;
    max-width: 150px;
  `;
  return (
    <Container
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      <IconContainer>
        <Icon size={48} type={TYPE_OUTLINE} src={props.iconSrc} />
      </IconContainer>
      <UnitNameDiv>{props.name}</UnitNameDiv>
    </Container>
  );
};

const SelectUnitOfPerformance = function () {
  const navigate = useNavigate();
  const Title = styled.div`
    font: normal normal bold 28px/29px Bower;
    color: #000000;
  `;
  return (
    <ThemeProvider>
      <Box alignHor={true}>
        <div className="d-flex flex-column pt-sm-2 pt-md-4">
          <div>
            <Icon
              size={16}
              type={TYPE_OUTLINE}
              src={ArrowLeft}
              onClick={() => {
                navigate('/active-engagements');
              }}
            />
          </div>
          <Title className="mt-3">Select units of performance</Title>
          <div className="d-flex flex-row mt-5">
            <UnitOfPerformanceCard
              name={'Account'}
              iconSrc={Account}
              onClick={() => {
                navigate('/journey');
              }}
            />
            <UnitOfPerformanceCard name={'Deals'} iconSrc={Deals} />
            <UnitOfPerformanceCard
              name={'Service Lines'}
              iconSrc={ServiceLines}
            />
          </div>
          <div className="d-flex flex-row mt-4">
            <UnitOfPerformanceCard name={'Alliances'} iconSrc={Alliances} />
            <UnitOfPerformanceCard name={'Org and people'} iconSrc={Org} />
            <UnitOfPerformanceCard
              name={'Capability building'}
              iconSrc={CapabilityBuilding}
            />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default SelectUnitOfPerformance;
