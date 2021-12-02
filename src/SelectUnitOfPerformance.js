import './mck-bootstrap.min.css';
import React from 'react';
import styled from '@emotion/styled';

import {
  Container,
  Grid,
  Icon,
  ThemeProvider,
  TYPE_OUTLINE,
} from '@mds/mds-reactjs-library';
import ArrowLeft from '@mds/mds-icons/icons/svg/outline-16-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

const UnitOfPerformanceCard = function (props) {
  const Container = styled.div`
    display: flex;
  `;
  const IconContainer = styled.div`
    display: flex;
  `;
  return (
    <Container>
      <IconContainer>
        <Icon size={16} type={TYPE_OUTLINE} src={ArrowLeft} />
      </IconContainer>
    </Container>
  );
};

const SelectUnitOfPerformance = function () {
  return (
    <ThemeProvider>
      <Container>
        <Grid container className="pt-sm-6 px-sm-2 px-md-4">
          <Grid item span={12}>
            <div className="d-flex flex-column">
              <div>
                <Icon size={16} type={TYPE_OUTLINE} src={ArrowLeft} />
              </div>
              <div>Select units of performance</div>
              <div>
                <UnitOfPerformanceCard name={'Account'} />
                <div></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SelectUnitOfPerformance;
