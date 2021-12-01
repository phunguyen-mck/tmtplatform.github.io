import React, { useMemo } from 'react';
import { Typography, Grid, Icon } from '@mds/mds-reactjs-library';
import styled from '@emotion/styled';

import ArrowRight from '@mds/mds-icons/icons/svg/outline-16-arrow-right.svg';

import useThemeColorMapping from '../../hooks/useThemeColorMapping';

const StyledCard = styled.div`
  width: 300px;
  height: 150px;
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
          <Typography type="ARTICLE_BODY" className="font-weight-bolder">
            {name}
          </Typography>
        </Grid>
        <Grid item align="right">
          <IconWrapper
            color={primaryColor}
            size={28}
            className="d-flex align-items-center justify-content-center"
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
