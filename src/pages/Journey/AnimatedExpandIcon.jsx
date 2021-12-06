import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Icon } from '@mds/mds-reactjs-library';

import Outline16ArrowDown from '@mds/mds-icons/icons/svg/outline-16-arrow-down.svg';
import Outline16ArrowUp from '@mds/mds-icons/icons/svg/outline-16-arrow-up.svg';

import useThemeColorMapping from 'hooks/useThemeColorMapping';

const StyledIcon = styled(Icon)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const IconWrapper = styled.span`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @keyframes iconmovetop {
    0% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(30px);
    }
    41% {
      opacity: 0px;
    }
    42% {
      transform: translateY(-30px);
      opacity: 1px;
    }
    60% {
      transform: translateY(0px);
    }
  }

  @keyframes iconmoveup {
    0% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(-30px);
    }
    41% {
      opacity: 0px;
    }
    42% {
      transform: translateY(30px);
      opacity: 1px;
    }
    60% {
      transform: translateY(0px);
    }
  }

  :hover {
    ${StyledIcon} {
      animation: ${(prop) => (prop.expanded ? 'iconmoveup' : 'iconmovetop')}
        0.5s;
    }
  }
`;

const AnimatedExpandIcon = ({ onClick, expanded }) => {
  const { primaryColor } = useThemeColorMapping();
  const [hover, setHover] = useState(false);

  return (
    <IconWrapper
      color={primaryColor}
      size={24}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      isHover={hover}
      expanded={expanded}
      onMouseOver={() => setHover(true)}
    >
      <StyledIcon
        size={10}
        type="outline"
        fill={primaryColor}
        src={expanded ? Outline16ArrowUp : Outline16ArrowDown}
      />
    </IconWrapper>
  );
};

export default AnimatedExpandIcon;
