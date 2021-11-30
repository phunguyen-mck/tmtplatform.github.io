import React, { useRef } from 'react';
import { Icon, Typography, DISPLAY_FIVE_CLASS } from '@mds/mds-reactjs-library';
import Outline16ArrowDown from '@mds/mds-icons/icons/svg/outline-16-arrow-down.svg';
import Outline16ArrowUp from '@mds/mds-icons/icons/svg/outline-16-arrow-up.svg';

import useCollapsible from '../../hooks/useCollapse';
import useThemeColorMapping from '../../hooks/useThemeColorMapping';

import styled from '@emotion/styled';

const StyledCard = styled.div`
  width: 600px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.color};
`;

const JourneyCard = ({ content, icon, renderCollapseContent }) => {
  const { primaryColor } = useThemeColorMapping();
  const ref = useRef();
  const { expanded, setExpanded } = useCollapsible(ref);

  return (
    <StyledCard className="shadow p-3 mb-3 bg-white">
      <StyledHeader>
        <IconWrapper color={primaryColor} size={36}>
          <Icon size={16} type="outline" src={icon} fill={primaryColor} />
        </IconWrapper>
        <Typography type="ARTICLE_BODY" className="font-weight-bolder">
          {content}
        </Typography>
        <IconWrapper
          color={primaryColor}
          size={28}
          onClick={() => setExpanded((t) => !t)}
        >
          <Icon
            size={16}
            type="outline"
            src={expanded ? Outline16ArrowUp : Outline16ArrowDown}
            fill={primaryColor}
          />
        </IconWrapper>
      </StyledHeader>
      <div ref={ref}>
        <div className="p-3">{renderCollapseContent()}</div>
      </div>
    </StyledCard>
  );
};

export default JourneyCard;
