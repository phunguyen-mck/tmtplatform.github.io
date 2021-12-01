import React from 'react';
import { useNavigate } from 'react-router';
import { Typography, Grid, Icon } from '@mds/mds-reactjs-library';

import styled from '@emotion/styled';

import ArrowRight from '@mds/mds-icons/icons/svg/outline-16-arrow-right.svg';

import useThemeColorMapping from 'hooks/useThemeColorMapping';
import { navigateToJourneySetupPage } from 'lib/navigators';

const StyledCard = styled.div`
  width: 320px;
  height: 171px;
  background: var(--color-neutral-white) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 24px rgba(21, 21, 21, 0.08);
  border-radius: 6px;
  opacity: 1;
`;
const IconWrapper = styled.div`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.color};
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
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
          <IconWrapper
            color={primaryColor}
            size={28}
            className="d-flex align-items-center justify-content-center"
            onClick={() => navigateToJourneySetupPage(navigate)}
          >
            <StyledIcon
              size={12}
              type="outline"
              src={ArrowRight}
              fill={primaryColor}
            />
          </IconWrapper>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default StrategyCard;
