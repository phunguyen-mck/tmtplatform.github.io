import React from 'react';
import _ from 'lodash';
import { Backdrop, Card, CardContent, Fade, Modal } from '@mui/material';
import styled from '@emotion/styled';
import {
  Button,
  Icon,
  PRIMARY_BUTTON,
  TYPE_OUTLINE,
} from '@mds/mds-reactjs-library';
import StakeHolderIcon from '../../images/stakeholder.svg';
import StakeHolderInfoIcon from '../../images/stakeholder-info-icon.svg';
import LocationIcon from '../../images/location-icon.svg';
import StarIcon from '../../images/star.svg';
import Box from '@mui/material/Box';
import {
  BasicInformationCard,
  DoubleColInformationCard,
  PositiveNegativeInformationCard,
} from './InformationCard';

const InfoModal = function (props) {
  const { name, title, org, location, overview } = props.stakeholder;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80vh',
    overflow: 'auto',
    bgcolor: '#FFFFFF',
    boxShadow: '0px 6px 24px #00000033',
  };

  const Container = styled.div`
    padding: 30px 25px;
  `;
  const Header = styled.div`
    padding: 12px 18px;
    background-color: #2251ff;
    color: #ffffff;
    display: flex;
    align-items: center;

    .name {
      margin-left: 100px;
      font: normal normal 500 24px/10px McKinsey Sans;
      flex-grow: 1;
    }

    .location {
      font: normal normal 300 20px/10px McKinsey Sans;
      color: #ffffff;
    }
  `;

  const IconContainer = styled.div`
    position: absolute;
    width: 66px;
    height: 66px;
    border-radius: 66px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2251ff;
    margin-left: 10px;

    svg {
      width: 50px;
      height: 50px;
    }
  `;

  const Overview = styled.div`
    background-color: #f0f0f0;
    margin-top: 28px;
    padding: 23px 17px 17px 17px;
    font: normal normal normal 16px/22px McKinsey Sans;

    .items-list-container {
      background-color: #ffffff;
      margin-top: 18px;
      padding: 14px 20px;
    }
  `;
  const KeyContainer = styled.div`
    display: flex;
    align-items: center;

    & + div {
      margin-top: 20px;
    }

    svg {
      color: #2251ff;
    }

    span {
      margin-left: 8px;
    }
  `;

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
          <Container>
            <Header>
              <IconContainer style={{}}>
                <Icon size={'px'} type={TYPE_OUTLINE} src={StakeHolderIcon} />
              </IconContainer>
              <div className="name">
                {name}, {title} {org}
              </div>
              <div className="location">
                <Icon size={32} type={TYPE_OUTLINE} src={LocationIcon} />
                <span className="ml-2">{location}</span>
              </div>
            </Header>
            <Overview>
              <div>
                They are reasonably social and can develop loyalty towards you
                over time. They like to get a grasp on the process before they
                start making decisions
              </div>
              <div className="items-list-container container-fluid">
                <div className="row">
                  <div className="col border-right">
                    {_.map(_.get(overview, 'keys', []), (k) => {
                      return (
                        <KeyContainer>
                          <Icon size={16} type={TYPE_OUTLINE} src={StarIcon} />
                          <span>{k}</span>
                        </KeyContainer>
                      );
                    })}
                  </div>
                  <div className="col pl-8">
                    <div className="mb-2">
                      <b>DISC profile</b>
                    </div>
                    {_.map(_.get(overview, 'discProfile', []), (k) => {
                      return <div className="mt-2">{k}</div>;
                    })}
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <b>OCEAN (BIG 5) profile</b>
                    </div>
                    {_.map(_.get(overview, 'oceanProfile', []), (k) => {
                      return <div className="mt-2">{k}</div>;
                    })}
                  </div>
                </div>
              </div>
            </Overview>

            <PositiveNegativeInformationCard
              title={'When qualifying or pitching'}
              positive={_.get(overview, 'pitching.positive')}
              negative={_.get(overview, 'pitching.negative')}
            />
            <DoubleColInformationCard
              title={'When negotiating and closing'}
              keys={_.get(overview, 'negotiatingAndClosing', [])}
            />
            <BasicInformationCard
              title={'When interacting in general (key interests)'}
              keys={_.get(overview, 'interactingKeyInterests', [])}
            />
            <DoubleColInformationCard
              title={'Setting sales expectations'}
              keys={_.get(overview, 'saleExpectations', [])}
            />

            <div className="d-flex mt-3 justify-content-center">
              <Button
                appearance={PRIMARY_BUTTON}
                onClick={props.handleClose}
                style={{ borderRadius: '4px' }}
              >
                Close
              </Button>
            </div>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};

// move this back into function with state management
const StakeHolderCard = function (props) {
  const { name, title, org, isMainStakeHolder } = props.stakeholder;
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const CardContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    position: relative;
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
    top: -4px;
    right: 0px;
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
            <Icon type={TYPE_OUTLINE} src={StakeHolderIcon} />
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
            stakeholder={props.stakeholder}
          />
        </CardContentDiv>
      </CardContent>
    </Card>
  );
};

const OrgStakeHolders = () => {
  const CARD_PER_ROW = 4;
  const stakeholders = getStakeHolders();
  const mainStakeholder = _.find(
    stakeholders,
    (stakeholder) => stakeholder.isMainStakeHolder
  );
  const otherStakeholder = _.filter(
    stakeholders,
    (stakeholder) => !stakeholder.isMainStakeHolder
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
          {<StakeHolderCard stakeholder={mainStakeholder} />}
        </div>
        <div className="col" />
      </div>

      {_.map(_.chunk(otherStakeholder, CARD_PER_ROW), (stakeholders) => {
        const length = stakeholders.length;
        const dummyCardCount = CARD_PER_ROW - length;

        return (
          <div className="row mt-4">
            {_.map(stakeholders, (stakeholder) => {
              return (
                <div className="col">
                  <StakeHolderCard stakeholder={stakeholder} />
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
      location: 'New York, USA',
      isMainStakeHolder: true,
      overview: {
        keys: ['Slow-Paced', 'Concensus Seeker', 'Risk-Taker'],
        discProfile: ['High Steadiness', 'High Dominance'],
        oceanProfile: ['Very Conscientious', 'Agreeable', 'Sensitive'],
        interactingKeyInterests: [
          'When negotiating terms, help them build an impression that they are the ones calling the shots',
          'Be personal and polite and slightly formal',
          'Be very observant about how they perceive the risk in the decision',
        ],
        negotiatingAndClosing: [
          {
            title: 'The secret to closing fast with stakeholder:',
            content:
              'Low risk, followed by confidence in ROI is most important for them',
          },
          {
            title: 'Will you ever get a clear answer from stakeholder?',
            content:
              'They don’t say no very often by themselves, you will need to push them to get a clear yes or no',
          },
        ],
        saleExpectations: [
          {
            title: 'How fast (or slow) will CP move?',
            content:
              'They start out slow and can take time to understand your proposition, but can speed up later once they are confident of your proposal',
          },
          {
            title: 'Can Mike take some risk or not?',
            content:
              'They can develop some risk-appetite once they have evaluated the merits of the decision',
          },
        ],
        pitching: {
          positive: {
            title: 'Do this to build a winning connection',
            content: [
              'When negotiating terms, help them build an impression that they are the ones calling the shots',
              'Be personal and polite and slightly formal',
              'Be very observant about how they perceive the risk in the decision',
            ],
          },
          negative: {
            title: 'Don’t do this, you will lose their confidence',
            content: [
              "Don't try too hard to forge relationships with them",
              'Don’t try to be overly social in the early interactions',
              'Do not sound very transactional, make extra effort to be genuinely interested',
              'Ensure that you don’t seem disinterested when speaking to them ',
              'Don’t take too much time in sending them information if they ask for any',
            ],
          },
        },
      },
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
