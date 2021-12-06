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
  CONTRAST_BUTTON,
  ThemeProvider,
} from '@mds/mds-reactjs-library';
import DocumentIcon from 'components/Icons/Documents.svg';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import './WelcomeHeader.scss';
import { ORG_STAKEHOLDERS_TAB } from '../../../constant/tabsMapObject';
export default function WelcomeHeader({
  withBadge,
  tabValue,
  isRedirectToOppourtunityPage,
  handleOnClickOpenOppourtunityButton,
  handleGoBackSelectJourneyScreen,
  handleGoBackSelectStrategyScreen,
}) {
  const ButtonStyled = styled(ButtonMDS)`
    margin-right: 12px;
    margin-bottom: 12px;
    background: white;
  `;
  const ContainerContent = styled.div`
    height: auto;
    padding: 10px;
    padding-bottom: 0;
    display: flex;
    align-item: center;
  `;
  const IconContainer = styled.div`
    margin-right: 10px;
  `;
  const ContentItemContainer = styled.div`
    padding: 10px;
    padding-top: 0;
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
    font-size: 28px;
  `;
  const documentIcon = <Icon src={DocumentIcon} className="ml-3" size={32} />;
  const renderBreadcrumbs = () => {
    if (!isRedirectToOppourtunityPage) {
      return (
        <Breadcrumbs>
          <Link to="/journey/select-strategy">Select units of performance</Link>
          <a href="#">Select your journey </a>
        </Breadcrumbs>
      );
    }
    return (
      <div className="breadcrumb-header">
        <p>Oppourtunity</p> <span>Beta</span>
      </div>
    );
  };
  return (
    <ThemeProvider>
      <Container>
        <ContainerContent>
          <IconContainer
            className="goback-container"
            onClick={
              isRedirectToOppourtunityPage
                ? handleGoBackSelectJourneyScreen
                : handleGoBackSelectStrategyScreen
            }
          >
            <Icon name="arrow-left" type="glyph" size={16} />
          </IconContainer>
          {renderBreadcrumbs()}
        </ContainerContent>
        <ContentItemContainer>
          <div>
            <span className="welcome-text">Welcome to the </span>
            <TextContainer> Account Strategy and Planning</TextContainer>{' '}
            <span className="sub-text"> hub for </span>{' '}
            <TextContainer>Citibank</TextContainer>
          </div>
          {withBadge && !isRedirectToOppourtunityPage && (
            <ButtonContainer>
              {tabValue === ORG_STAKEHOLDERS_TAB && (
                <ButtonMDS
                  onClick={handleOnClickOpenOppourtunityButton}
                  className="oppurtunity-button"
                  appearance={CONTRAST_BUTTON}
                >
                  Opportunity
                  <span className="beta-text">BETA</span>
                </ButtonMDS>
              )}
              <ButtonStyled
                appearance={SECONDARY_BUTTON}
                endIcon={documentIcon}
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
          )}
        </ContentItemContainer>
      </Container>
    </ThemeProvider>
  );
}
