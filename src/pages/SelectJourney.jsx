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

import TopOfferingContent from './TopOfferingContent';
import DigitalPayment from '../components/SelectJourney/DigitalPayment';
import Sticky from 'react-sticky-el';
import IndustryTabs from '../components/Tabs/Tabs';
import {
  OVERALL_FINANCIAL_TAB,
  TOP_DIGITAL_OFFERING_TAB,
  IT_SPEND_MAP,
  PAST_DEAL_TAB,
  MAJOR_DEALS_TAB,
  ORG_STAKEHOLDERS_TAB,
} from '../constant/tabsMapObject';

import DealInfo from './JourneySetup/DealInfo';
import PeerMajorDealInfo from './JourneySetup/PeerMajorDealInfo';

export default function SelectJourney() {
  const [value, setValue] = React.useState(MAJOR_DEALS_TAB);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
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
          <Typography className="cardHeading" type={BODY_DEFAULT} tablet>
            Industry specific offerings
          </Typography>
          {/* <TopOfferingContent />  use later*/}
          <DigitalPayment />
        </>
      );
    }

    if (value === PAST_DEAL_TAB) {
      return <DealInfo />;
    }

    if (value === MAJOR_DEALS_TAB) {
      return <PeerMajorDealInfo />;
    }
    return <span>Placeholder</span>;
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="container-tmp">
        <div className="scroll-area">
          <div className="block">
            <FreeSpaceBackground>
              <Sticky boundaryElement=".block" scrollElement=".scroll-area">
                <Container>
                  <ContainerContent>
                    <IconContainer>
                      <Icon name="arrow-left" type="glyph" size={16} />
                    </IconContainer>
                    <Breadcrumbs>
                      <a href="#">Select units of performance</a>
                      <a href="#">Select your journey </a>
                    </Breadcrumbs>
                  </ContainerContent>
                  <ContentItemContainer>
                    <div>
                      Welcome to the{' '}
                      <TextContainer>
                        {' '}
                        Account Strategy and Planning
                      </TextContainer>{' '}
                      hub for <TextContainer>Citibank</TextContainer>
                    </div>
                    <ButtonContainer>
                      <ButtonStyled
                        appearance={SECONDARY_BUTTON}
                        endIcon={userIcon}
                      >
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
                />
              </Sticky>
            </FreeSpaceBackground>
            <TabContentContainer>{renderTabContent()}</TabContentContainer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
