import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { Icon, TYPE_OUTLINE } from '@mds/mds-reactjs-library';
import PositiveIcon from '../../images/positive.svg';
import NegativeIcon from '../../images/negative.svg';

const InformationCard = function (props) {
  const Container = styled.div`
    background-color: #ffffff;
    border: 1px solid #b3b3b3;
    margin-top: 28px;
    font: normal normal normal 16px/22px McKinsey Sans;
  `;
  const Header = styled.div`
    background-color: #051c2c;
    color: #ffffff;
    padding: 15px 20px;
    font: normal normal 500 18px/15px McKinsey Sans;
  `;

  return (
    <Container>
      <Header>{props.title}</Header>
      {props.children}
    </Container>
  );
};

export const BasicInformationCard = function (props) {
  const Container = styled.div`
    padding: 15px 20px;
  `;
  const Line = styled.div`
    & + div {
      margin-top: 12px;
    }

    font: normal normal normal 16px/22px McKinsey Sans;
  `;

  return (
    <InformationCard title={props.title}>
      <Container>
        {_.map(props.keys, (k) => {
          return <Line>{k}</Line>;
        })}
      </Container>
    </InformationCard>
  );
};

export const DoubleColInformationCard = function (props) {
  const Container = styled.div`
    padding: 15px 20px;
  `;
  const Content = styled.div`
    font: normal normal normal 16px/22px McKinsey Sans;
    display: flex;
    flex-flow: column;
    height: 100%;

    .title {
      font: normal normal 500 16px/24px McKinsey Sans;
    }

    .content {
      margin-top: 12px;
      padding: 15px 12px;
      background-color: #f0f0f0;
      border-radius: 4px;
      flex-grow: 1;
    }
  `;

  return (
    <InformationCard title={props.title}>
      <Container>
        <div className="row">
          {_.map(props.keys, (key) => {
            return (
              <div className="col">
                <Content>
                  <div className="title">{_.get(key, 'title')}</div>
                  <div className="content">{_.get(key, 'content')}</div>
                </Content>
              </div>
            );
          })}
        </div>
      </Container>
    </InformationCard>
  );
};

export const PositiveNegativeInformationCard = function (props) {
  const { negative, positive } = props;
  const Container = styled.div`
    padding: 15px 20px;
  `;
  const PositiveContent = styled.div`
    font: normal normal normal 16px/22px McKinsey Sans;

    .title {
      font: normal normal 500 16px/24px McKinsey Sans;
      color: #3c96b4;
    }

    .content {
      margin-top: 12px;

      .line {
        svg {
          margin-top: -4px;
          margin-right: 8px;
          color: #3c96b4;
        }
      }

      .line + .line {
        margin-top: 12px;
      }
    }
  `;
  const NegativeContent = styled.div`
    font: normal normal normal 16px/22px McKinsey Sans;

    .title {
      font: normal normal 500 16px/24px McKinsey Sans;
      color: #e5546c;
    }

    .content {
      margin-top: 12px;

      .line {
        svg {
          margin-top: -4px;
          margin-right: 8px;
          color: #e5546c;
        }
      }

      .line + .line {
        margin-top: 12px;
      }
    }
  `;

  return (
    <InformationCard title={props.title}>
      <Container>
        <div className="row">
          <div className="col border-right">
            <PositiveContent>
              <div className="title">{_.get(positive, 'title')}</div>
              <div className="content">
                {_.map(_.get(positive, 'content', []), (k) => {
                  return (
                    <div className="line">
                      <Icon type={TYPE_OUTLINE} src={PositiveIcon} />
                      {k}
                    </div>
                  );
                })}
              </div>
            </PositiveContent>
          </div>
          <div className="col">
            <NegativeContent>
              <div className="title">{_.get(negative, 'title')}</div>
              <div className="content">
                {_.map(_.get(negative, 'content', []), (k) => {
                  return (
                    <div className="line">
                      <Icon type={TYPE_OUTLINE} src={NegativeIcon} />
                      {k}
                    </div>
                  );
                })}
              </div>
            </NegativeContent>
          </div>
        </div>
      </Container>
    </InformationCard>
  );
};
