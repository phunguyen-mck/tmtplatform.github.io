import React from 'react';
import styled from '@emotion/styled';

import { Typography } from '@mds/mds-reactjs-library';
import Outline48Bulb63 from '@mds/mds-icons/icons/svg/outline-24-bulb-63.svg';

import Card from './Card';
import AccountNameAndIndustrySetting from './AccountNameAndIndustrySetting';

import MeetingIcon from 'components/Icons/Meeting.svg';
import NoteIcon from 'components/Icons/Note.svg';
import BulbIcon from 'components/Icons/Bulb.svg';

const Wrapper = styled.div`
  height: 100%;
`;

const JourneySelector = () => {
  return (
    <Wrapper>
      <Typography
        type="HEADING_SIX"
        className="mt-4 mb-4"
        style={{ fontSize: 28 }}
      >
        Select your journey
      </Typography>
      <div className="mt-4">
        <Card
          content="Account Selection"
          icon={NoteIcon}
          renderCollapseContent={() => <div />}
        />
        <Card
          content="Account Strategy and Planning"
          icon={MeetingIcon}
          renderCollapseContent={() => <AccountNameAndIndustrySetting />}
        />
        <Card
          content="Account ideation"
          icon={BulbIcon}
          renderCollapseContent={() => <div />}
        />
      </div>
    </Wrapper>
  );
};

export default JourneySelector;
