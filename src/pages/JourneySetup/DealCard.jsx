import React from 'react';
import { useNavigate } from 'react-router';
import { Typography, Grid, Icon } from '@mds/mds-reactjs-library';

import styled from '@emotion/styled';

import useThemeColorMapping from 'hooks/useThemeColorMapping';

const StyledCard = styled.div`
  width: 400px;
  height: 448px;

  background: 0% 0% no-repeat padding-box;
  background-color: ${(prop) => (prop.upcoming ? '#051C2C' : 'white')};
  color: ${(props) => (props.upcoming ? '#fff' : '#000')};

  box-shadow: 0px 0px 24px #00000014;
  border: 1px solid #ffffff;
  border-radius: 8px;
  opacity: 1;
`;

const StyledFieldValue = styled.div`
  background-color: ${(prop) => (prop.upcoming ? '#fff' : '#f0f0f0')};
  color: #000;
  border-radius: 4px;
  opacity: ${(prop) => (prop.upcoming ? 1 : 0.6)};
  padding: 16px;
  width: 100%;
`;
const StyledFieldLabel = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
`;
const StyledField = styled.div`
  width: 100%;
`;

const Field = ({ label, value, upcoming, className, style }) => {
  return (
    <StyledField {...{ className, style }}>
      <StyledFieldLabel className="mb-2">{label}</StyledFieldLabel>
      <StyledFieldValue upcoming={upcoming}>{value}</StyledFieldValue>
    </StyledField>
  );
};

const StrategyCard = ({ icon, name, upcoming, deal }) => {
  const { primaryColor } = useThemeColorMapping();
  const navigate = useNavigate();
  return (
    <StyledCard className="p-3" upcoming={upcoming}>
      <div className="d-flex">
        <Field
          className="mr-2"
          style={{ flex: 3 }}
          label="Vendor Name"
          value={deal.vendorName}
          upcoming={upcoming}
        />
        <Field
          className="ml-2"
          style={{ flex: 2 }}
          label="Year"
          value={deal.year}
          upcoming={upcoming}
        />
      </div>
      <Field
        label="Theme"
        value={deal.theme}
        upcoming={upcoming}
        className="mt-3"
      />
      <Field
        label="TCV"
        value={deal.tcv}
        upcoming={upcoming}
        className="mt-3"
      />
      <Field
        className="mt-3"
        label="Contract End Period"
        value={deal.expirationDate}
        upcoming={upcoming}
      />
    </StyledCard>
  );
};

export default StrategyCard;
