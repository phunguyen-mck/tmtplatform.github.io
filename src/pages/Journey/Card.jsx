import React, { useRef } from 'react';
import styled from '@emotion/styled';

import { Icon, Typography } from '@mds/mds-reactjs-library';

import useCollapsible from 'hooks/useCollapse';
import useThemeColorMapping from 'hooks/useThemeColorMapping';
import AnimatedExpandIcon from './AnimatedExpandIcon';

const StyledCard = styled.div`
  width: 612px;
  background: var(--color-neutral-white) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 24px rgba(21, 21, 21, 0.08);
  border-radius: 3px;
  opacity: 1;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
`;

const JourneyCard = ({ content, icon, renderCollapseContent }) => {
  const { primaryColor } = useThemeColorMapping();
  const ref = useRef();
  const { expanded, setExpanded } = useCollapsible(ref);

  return (
    <StyledCard className="p-3 mb-3">
      <StyledHeader>
        <div className="d-inline-flex align-items-center">
          <IconWrapper
            color={primaryColor}
            size={45}
            backgroundColor={expanded ? primaryColor : 'white'}
            className="mr-3"
          >
            <Icon
              size={16}
              type="outline"
              src={icon}
              fill={expanded ? 'white' : primaryColor}
              key={expanded}
            />
          </IconWrapper>
          <Typography
            type="ARTICLE_BODY"
            className={expanded ? 'font-weight-bolder' : 'font-weight-bold'}
            style={{ fontSize: '22px' }}
          >
            {content}
          </Typography>
        </div>
        <AnimatedExpandIcon
          onClick={() => setExpanded((t) => !t)}
          expanded={expanded}
        />
      </StyledHeader>
      <div ref={ref}>
        <div className="p-3">{renderCollapseContent()}</div>
      </div>
    </StyledCard>
  );
};

export default JourneyCard;
