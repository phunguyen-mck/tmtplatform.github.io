import React from 'react';
import { useNavigate } from 'react-router';
import { Typography, Grid, Icon } from '@mds/mds-reactjs-library';

import styled from '@emotion/styled/macro';

import useThemeColorMapping from 'hooks/useThemeColorMapping';
import { navigateToJourneySetupPage } from 'lib/navigators';

import NextIconButton from './NextIconButton';

const StyledCard = styled.div`
  width: 320px;
  height: 171px;
  background: var(--color-neutral-white) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 24px rgba(21, 21, 21, 0.08);
  border-radius: 6px;
  opacity: 1;
`;

const StrategyCard = ({ icon, name }) => {
  const { primaryColor } = useThemeColorMapping();
  const navigate = useNavigate();

  return (
    <StyledCard className="shadow p-3 bg-white">
      <div className="mb-2">
        <Icon
          src={icon}
          size={24}
          fill={primaryColor}
          type="outline"
          style={{ cursor: 'pointer' }}
        />
      </div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item flex="200px">
          <Typography type="ARTICLE_LEAD" className="font-weight-bolder">
            {name}
          </Typography>
        </Grid>
        <Grid item align="right">
          <NextIconButton
            onClick={() => navigateToJourneySetupPage(navigate)}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default StrategyCard;
