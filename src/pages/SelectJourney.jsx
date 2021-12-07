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
  Typography,
  BODY_DEFAULT,
} from '@mds/mds-reactjs-library';
import styled from '@emotion/styled';
import './SelectJourney.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
import WelcomeHeader from 'components/SelectJourney/Header/WelcomeHeader';
import OppourtunityMap from 'components/SelectJourney/OppourtunityMap/OppourtunityMap';
export default function SelectJourney() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
  const [dashboardTitle, setDashboardTitle] = React.useState('');
  const [isRedirectToOppourtunityPage, setIsRedirectToOppourtunityPage] =
    React.useState(false);
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
  const handleOnClickOpenOppourtunityButton = () => {
    setIsRedirectToOppourtunityPage(true);
    setSelectedCardOffering(0);
  };
  const handleGoBackSelectJourneyScreen = () => {
    setIsRedirectToOppourtunityPage(false);
  };
  const handleGoBackSelectStrategyScreen = () => {
    navigate('/journey/select-strategy');
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
  const TabContentContainer = styled.div`
    padding: 30px;
  `;
  const FreeSpaceBackground = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    padding: 30px;
  `;

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
  const renderOppourtunityPage = () => {
    if (isRedirectToOppourtunityPage) {
      return (
        <>
          <FreeSpaceBackground>
            <WelcomeHeader
              withBadge={true}
              tabValue={value}
              isRedirectToOppourtunityPage={isRedirectToOppourtunityPage}
              handleOnClickOpenOppourtunityButton={
                handleOnClickOpenOppourtunityButton
              }
              handleGoBackSelectJourneyScreen={handleGoBackSelectJourneyScreen}
            />
          </FreeSpaceBackground>
          <OppourtunityMap />
        </>
      );
    }
    return (
      <>
        <FreeSpaceBackground>
          <WelcomeHeader
            withBadge={true}
            tabValue={value}
            isRedirectToOppourtunityPage={isRedirectToOppourtunityPage}
            handleOnClickOpenOppourtunityButton={
              handleOnClickOpenOppourtunityButton
            }
            handleGoBackSelectJourneyScreen={handleGoBackSelectJourneyScreen}
            handleGoBackSelectStrategyScreen={handleGoBackSelectStrategyScreen}
          />
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
      </>
    );
  };
  return (
    <ThemeProvider theme={theme}>{renderOppourtunityPage()}</ThemeProvider>
  );
}
