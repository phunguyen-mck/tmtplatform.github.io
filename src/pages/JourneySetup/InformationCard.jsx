import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';

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
