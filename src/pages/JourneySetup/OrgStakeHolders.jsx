import React from 'react';
import _ from 'lodash';
import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { Icon, TYPE_OUTLINE } from '@mds/mds-reactjs-library';
import StakeHolderIcon from '../../images/stakeholder.svg';

const StakeHolderCard = function (props) {
  const { name, title, org, isMainStakeHolder } = props.stakeHolder;

  const CardContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  `;
  const IconContainer = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 11px;
    background-color: ${isMainStakeHolder ? `#051C2C` : `#E6E6E6`};
    color: ${isMainStakeHolder ? `#FFFFFF` : `#051C2C`};
  `;

  const Check = styled.div`
    height: 18px;
    width: 18px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0.5px solid #d0d0d0;
    border-radius: 2px;
  `;

  return (
    <Card sx={{ maxWidth: 345 }} className="m-2">
      <CardContent>
        <CardContentDiv>
          <Check></Check>
          <IconContainer>
            <Icon size={48} type={TYPE_OUTLINE} src={StakeHolderIcon} />
          </IconContainer>
          <div>
            <div>{name}</div>
            <div>
              {title}, {org}
            </div>
          </div>
        </CardContentDiv>
      </CardContent>
    </Card>
  );
};

const OrgStakeHolders = () => {
  const stakeHolders = getStakeHolders();
  const mainStakeholder = _.find(
    stakeHolders,
    (stakeHolder) => stakeHolder.isMainStakeHolder
  );
  const otherStakeholder = _.filter(
    stakeHolders,
    (stakeHolder) => !stakeHolder.isMainStakeHolder
  );
  return (
    <div>
      {<StakeHolderCard stakeHolder={mainStakeholder} />}
      {_.map(otherStakeholder, (stakeHolder) => {
        return <StakeHolderCard stakeHolder={stakeHolder} />;
      })}
    </div>
  );
};

export default OrgStakeHolders;

const getStakeHolders = () => {
  return [
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: true,
    },
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
  ];
};
