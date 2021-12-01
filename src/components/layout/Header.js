import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Header,
  Avatar,
  HeaderIconButton,
  HeaderRightSectionItemWrapper
} from "@mds/mds-reactjs-library";

const AvatarIconButton = styled(HeaderIconButton)`
  width: auto;
  height: auto;
  margin-left: 14px !important;

  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

/**
 * @name Header
 * @desc Header Component
 */
const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [path, setPath] = React.useState(location.pathname);
  const AvatarStyled = styled(Avatar)`
  margin: 0 3px;
  fontSize: 10px;
`;
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const rightSection = [
    <HeaderRightSectionItemWrapper
    key="alerts"
    label="Alerts"
    aria-label="Alerts"
    onClick={() => console.log('onClick Alerts')}
    horizontalLayoutComponent={props => (
      <AvatarIconButton {...props}>
            <AvatarStyled alt="Phu Nguyen" /> 
      </AvatarIconButton>
    )}
  />,
  <HeaderRightSectionItemWrapper
  key="alerts"
  label="Alerts"
  aria-label="Alerts"
  onClick={() => console.log('onClick Alerts')}
  horizontalLayoutComponent={props => (
    <div>
        Phu Nguyen
    </div>

  )}
/>,
];
  return (
    <Header
    logoSection="Sale 2.0 Platform"
      rightSection={rightSection}
    >
    </Header>
  )
  }
export default HeaderComponent;