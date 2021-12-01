import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Select,
  Typography,
  Grid,
  Icon,
  Button,
} from '@mds/mds-reactjs-library';
import ArrowRight from '@mds/mds-icons/icons/svg/outline-16-arrow-right.svg';

import { navigateToStrategyHubPage } from 'lib/navigators';

const AccountNameAndIndustrySetting = () => {
  const SelectStyled = styled(Select)`
    width: 250px;
  `;

  const navigate = useNavigate();
  const industryList = useMemo(() => getIndustryList(), []);
  const accountList = useMemo(() => getAccountList(), []);

  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <Typography type="BODY">Account Name</Typography>
          <SelectStyled
            size="SIZE_LARGE"
            options={accountList}
            placeholder="Select..."
            custom
          />
        </Grid>
        <Grid item>
          <Typography type="BODY">Industry</Typography>
          <SelectStyled
            size="SIZE_LARGE"
            options={industryList}
            placeholder="Select..."
            custom
          />
        </Grid>
      </Grid>
      <div className="text-right mt-3">
        <Button
          className="text-right"
          style={{ width: '122px' }}
          onClick={() => navigateToStrategyHubPage(navigate)}
        >
          Next
          <Icon
            size={16}
            type="outline"
            src={ArrowRight}
            fill="white"
            className="ml-2"
          />
        </Button>
      </div>
    </div>
  );
};

export default AccountNameAndIndustrySetting;

const getAccountList = () => [
  { label: 'CITI', value: 'CITI' },
  { label: 'CITI 2', value: 'CITI2' },
  { label: 'CITI 3', value: 'CITI3' },
  { label: 'CITI 4', value: 'CITI4' },
  { label: 'CITI 5', value: 'CITI5' },
];

const getIndustryList = () => [
  {
    label: 'Automobile',
    value: 'Automobile',
  },
  {
    label: 'Pharma',
    value: 'Pharma',
  },
  {
    label: 'Retail',
    value: 'Retail',
  },
  {
    label: 'BFSI',
    value: 'BFSI',
  },
  {
    label: 'FIG',
    value: 'FIG',
  },
];
