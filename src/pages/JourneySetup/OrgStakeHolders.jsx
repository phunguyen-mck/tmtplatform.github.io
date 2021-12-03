import React from 'react';
import _ from 'lodash';
import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { Icon, TYPE_OUTLINE } from '@mds/mds-reactjs-library';
import StakeHolderIcon from '../../images/stakeholder.svg';
import StakeHolderInfoIcon from '../../images/stakeholder-info-icon.svg';

// move this back into function with state management
class StakeHolderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  render() {
    const { name, title, org, isMainStakeHolder } = this.props.stakeHolder;
    const { isChecked } = this.state;

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
      background: ${isChecked ? `#2251FF` : `#FFFFFF`} 0% 0% no-repeat
        padding-box;
      border: 0.5px solid #d0d0d0;
      border-radius: 2px;
    `;

    const NameDiv = styled.div`
      font: normal normal normal 16px/20px McKinsey Sans;
      color: #000000;
    `;
    const TitleDiv = styled.div`
      font: italic normal 300 14px/18px McKinsey Sans;
      letter-spacing: 0px;
      color: #000000;
    `;
    const IconWrapper = styled.img`
      position: absolute;
      top: 12px;
      right: 36px;
      color: #1f40e6;
      width: 16px;
      height: 16px;
    `;

    return (
      <Card sx={{ maxWidth: 345 }} className="m-2">
        <CardContent>
          <CardContentDiv>
            <Check
              onClick={() => {
                this.setState({
                  isChecked: !isChecked,
                });
              }}
            />
            <IconContainer>
              <Icon size={48} type={TYPE_OUTLINE} src={StakeHolderIcon} />
            </IconContainer>
            <div>
              <NameDiv>{name}</NameDiv>
              <TitleDiv>
                {title}, {org}
              </TitleDiv>
            </div>
            <IconWrapper
              src={StakeHolderInfoIcon}
              alt={'StakeHolderInfoIcon'}
            />
          </CardContentDiv>
        </CardContent>
      </Card>
    );
  }
}

const OrgStakeHolders = () => {
  const CARD_PER_ROW = 4;
  const stakeHolders = getStakeHolders();
  const mainStakeholder = _.find(
    stakeHolders,
    (stakeHolder) => stakeHolder.isMainStakeHolder
  );
  const otherStakeholder = _.filter(
    stakeHolders,
    (stakeHolder) => !stakeHolder.isMainStakeHolder
  );

  function getDummyCards(dummyCardCount) {
    const cards = [];
    for (let i = 0; i < dummyCardCount; i++) {
      cards.push(<div className="col" />);
    }
    return cards;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col" />
        <div className="col">
          {<StakeHolderCard stakeHolder={mainStakeholder} />}
        </div>
        <div className="col" />
      </div>

      {_.map(_.chunk(otherStakeholder, CARD_PER_ROW), (stackholders) => {
        const length = stackholders.length;
        const dummyCardCount = CARD_PER_ROW - length;

        return (
          <div className="row mt-4">
            {_.map(stackholders, (stackholder) => {
              return (
                <div className="col">
                  <StakeHolderCard stakeHolder={stackholder} />
                </div>
              );
            })}
            {dummyCardCount > 0 && getDummyCards(dummyCardCount)}
          </div>
        );
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
    {
      name: 'Jane Fraser',
      title: 'CEO',
      org: 'Citybank',
      isMainStakeHolder: false,
    },
  ];
};
