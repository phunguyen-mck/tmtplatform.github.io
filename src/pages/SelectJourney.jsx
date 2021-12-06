import React from 'react';
import {
  Container,
  Breadcrumbs,
  Icon,
  Badge,
  SECONDARY_BUTTON,
  Button as ButtonMDS,
  BADGE_TYPE_INFORMATION_DEFAULT,
  SIZE_SMALL,
  TYPE_OUTLINE,
  Typography,
  BODY_DEFAULT,
} from '@mds/mds-reactjs-library';
import styled from '@emotion/styled';
import './SelectJourney.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import TopOfferingContent from './TopOfferingContent';
import DigitalPayment from '../components/SelectJourney/DigitalPayment';
import IndustryTabs from '../components/Tabs/Tabs';
import OverallFinancial from './OverallFinancial';
import {
  OVERALL_FINANCIAL_TAB,
  TOP_DIGITAL_OFFERING_TAB,
  IT_SPEND_MAP,
  PAST_DEAL_TAB,
  MAJOR_DEALS_TAB,
  ORG_STAKEHOLDERS_TAB,
} from '../constant/tabsMapObject';
import { industryTabLabels } from '../constant/TabLabels';

import DealInfo from './JourneySetup/DealInfo';
import PeerMajorDealInfo from './JourneySetup/PeerMajorDealInfo';
import OrgStakeHolders from './JourneySetup/OrgStakeHolders';
import ITSpendInfo from './JourneySetup/ITSpendInfo';

export default function SelectJourney() {
  const [value, setValue] = React.useState(0);
  const [dashboardTitle, setDashboardTitle] = React.useState('');
  const [selectedCardOffering, setSelectedCardOffering] = React.useState(0);
  const [listOfTabSelected, setListOfTabSelected] = React.useState([0]);

  const handleTabChange = (event, newValue) => {
    const newListOfTabSelected = [...listOfTabSelected, newValue];
    setValue(newValue);
    setSelectedCardOffering(0);
    if (listOfTabSelected.includes(newValue)) {
      return;
    }
    setListOfTabSelected(newListOfTabSelected);
  };

  const handleTabClick = (event, newValue) => {
    setSelectedCardOffering(0);
  };
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  const ButtonStyled = styled(ButtonMDS)`
    margin-right: 12px;
    margin-bottom: 12px;
    background: white;
  `;
  const TabContentContainer = styled.div`
    padding: 30px;
  `;
  const FreeSpaceBackground = styled.div`
    width: 100%;
    background-color: #f5f5f5;
  `;
  const ContainerContent = styled.div`
    height: auto;
    padding: 10px;
    display: flex;
    align-item: center;
  `;
  const IconContainer = styled.div`
    margin-right: 10px;
  `;
  const ContentItemContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const ButtonContainer = styled.div`
    position: relative;
  `;
  const StyledBadge = styled(Badge)`
    position: absolute;
    top: -7px;
    right: 5px;
  `;
  const TextContainer = styled.span`
    color: blue;
    font-weight: bold;
  `;
  const userIcon = <Icon size={16} type={TYPE_OUTLINE} name="single-01" />;

  const renderTabContent = () => {
    if (value === TOP_DIGITAL_OFFERING_TAB) {
      return (
        <>
          <TopOfferingContent
            setDashboardTitle={setDashboardTitle}
            setSelectedCardOffering={setSelectedCardOffering}
          />
        </>
      );
    }
    if (value == OVERALL_FINANCIAL_TAB) {
      return <OverallFinancial />;
    }
    if (value === PAST_DEAL_TAB) {
      return <DealInfo />;
    }
    if (value === MAJOR_DEALS_TAB) {
      return <PeerMajorDealInfo />;
    }

    // move into switch/case in stead of using multiple ifs
    if (value === ORG_STAKEHOLDERS_TAB) {
      return <OrgStakeHolders />;
    }

    if (value === IT_SPEND_MAP) {
      return <ITSpendInfo />;
    }

    return <span>Placeholder</span>;
  };
  const renderCardDetails = () => {
    return <DigitalPayment title={dashboardTitle} />;
  };
  return (
    <ThemeProvider theme={theme}>
      <FreeSpaceBackground>
        <Container>
          <ContainerContent>
            <IconContainer>
              <Icon name="arrow-left" type="glyph" size={16} />
            </IconContainer>
            <Breadcrumbs>
              <Link to="/select-strategy">Select units of performance</Link>
              <a href="#">Select your journey </a>
            </Breadcrumbs>
          </ContainerContent>
          <ContentItemContainer>
            <div>
              Welcome to the{' '}
              <TextContainer> Account Strategy and Planning</TextContainer> hub
              for <TextContainer>Citibank</TextContainer>
            </div>
            <ButtonContainer>
              <ButtonStyled appearance={SECONDARY_BUTTON} endIcon={userIcon}>
                Slide deck{' '}
              </ButtonStyled>
              <StyledBadge
                type={BADGE_TYPE_INFORMATION_DEFAULT}
                size={SIZE_SMALL}
              >
                1
              </StyledBadge>
            </ButtonContainer>
          </ContentItemContainer>
        </Container>
        <IndustryTabs
          tabIndex={value}
          handleOnChange={handleTabChange}
          handleTabClick={handleTabClick}
          isWithIcon={true}
          tabLabels={industryTabLabels}
          tabsSelected={listOfTabSelected}
        />
      </FreeSpaceBackground>
      <TabContentContainer>
        <div className="scrollable">
          {selectedCardOffering === 0
            ? renderTabContent()
            : renderCardDetails()}
        </div>
      </TabContentContainer>
    </ThemeProvider>
  );
}
