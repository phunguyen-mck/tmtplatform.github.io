import React from 'react';
import _ from 'lodash';
import {
  Backdrop,
  Card,
  CardContent,
  Fade,
  Modal,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { Icon, TYPE_OUTLINE } from '@mds/mds-reactjs-library';
import StakeHolderIcon from '../../images/stakeholder.svg';
import StakeHolderInfoIcon from '../../images/stakeholder-info-icon.svg';
import Box from '@mui/material/Box';

const InfoModal = function (props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

// move this back into function with state management
const StakeHolderCard = function (props) {
  const { name, title, org, isMainStakeHolder } = props.stakeHolder;
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(false);

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
    background: ${check ? `#2251FF` : `#FFFFFF`} 0% 0% no-repeat padding-box;
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
              setCheck(!check);
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
            onClick={() => {
              setOpen(true);
            }}
          />
          <InfoModal
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
          />
        </CardContentDiv>
      </CardContent>
    </Card>
  );
};

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
