import React from 'react';
import { Container } from '@mds/mds-reactjs-library';
import styled from '@emotion/styled';

import JourneySelector from './JourneySelector';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const JourneyPage = () => {
  return (
    <StyledContainer maxWidth="md">
      <JourneySelector />
    </StyledContainer>
  );
};

export default JourneyPage;
