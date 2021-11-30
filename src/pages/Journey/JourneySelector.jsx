import React from 'react';
import styled from '@emotion/styled';

import { Typography } from '@mds/mds-reactjs-library';
import Outline32Notes from '@mds/mds-icons/icons/svg/outline-24-notes.svg';
import Outline32Meeting from '@mds/mds-icons/icons/svg/outline-24-meeting.svg';
import Outline48Bulb63 from '@mds/mds-icons/icons/svg/outline-24-bulb-63.svg';

import Card from './Card';
import AccountNameAndIndustrySetting from './AccountNameAndIndustrySetting';

const Wrapper = styled.div`
  height: 100%;
`;

const JourneySelector = () => {
  return (
    <Wrapper>
      <Typography type="HEADING_SIX" className="mt-4 mb-4">
        Select your journey
      </Typography>
      <div className="mt-4">
        <Card
          content="Account Selection"
          icon={Outline32Notes}
          renderCollapseContent={() => <div />}
        />
        <Card
          content="Account Strategy and Planning"
          icon={Outline32Meeting}
          renderCollapseContent={() => <AccountNameAndIndustrySetting />}
        />
        <Card
          content="Account ideation"
          icon={Outline48Bulb63}
          renderCollapseContent={() => <div />}
        />
      </div>
    </Wrapper>
  );
};

export default JourneySelector;
