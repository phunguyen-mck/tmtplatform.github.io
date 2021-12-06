import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Icon } from '@mds/mds-reactjs-library';
import ArrowRight from '@mds/mds-icons/icons/svg/outline-16-arrow-right.svg';

import useThemeColorMapping from 'hooks/useThemeColorMapping';

const StyledIcon = styled(Icon)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: translateX(0px);
`;

const IconWrapper = styled.div`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.color};
  cursor: pointer;
  overflow: hidden;

  @keyframes iconmove {
    0% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(20px);
    }
    41% {
      opacity: 0px;
    }
    42% {
      transform: translateX(-20px);
      opacity: 1px;
    }
    60% {
      transform: translateX(0px);
    }
  }

  @keyframes iconmovereverse {
    0% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(-20px);
    }
    41% {
      opacity: 0px;
    }
    42% {
      transform: translateX(20px);
      opacity: 1px;
    }
    60% {
      transform: translateX(0px);
    }
  }

  :not(:hover) {
    ${StyledIcon} {
      animation: ${(prop) => (prop.isHover ? 'iconmovereverse 0.4s' : '')};
    }
  }

  :hover {
    ${StyledIcon} {
      animation: iconmove 0.4s;
    }
  }
`;

const NextIconButton = ({ onClick }) => {
  const { primaryColor } = useThemeColorMapping();
  const [hover, setHover] = useState(false);

  return (
    <IconWrapper
      color={primaryColor}
      size={28}
      className="d-flex align-items-center justify-content-center"
      onClick={onClick}
      isHover={hover}
      onMouseOver={() => setHover(true)}
    >
      <StyledIcon
        size={12}
        type="outline"
        src={ArrowRight}
        fill={primaryColor}
      />
    </IconWrapper>
  );
};

export default NextIconButton;
