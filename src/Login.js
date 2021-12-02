import './mck-bootstrap.min.css';
import './Login.css';
import React from 'react';
import {
  Box,
  Button,
  Container,
  DISPLAY_SIX,
  FormElementWrapper,
  Grid,
  Icon,
  Input,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  SIZE_LARGE,
  ThemeContext,
  ThemeProvider,
  TYPE_OUTLINE,
  Typography,
} from '@mds/mds-reactjs-library';
import backgroundImg from './images/login-background.png';
import logoImg from './images/mckinseylogo.svg';
import projectLogoImg from './images/projectlogo.svg';
import Single01Icon from '@mds/mds-icons/icons/svg/outline-16-single-01.svg';
import PadlockIcon from '@mds/mds-icons/icons/svg/outline-16-padlock.svg';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const GroupedInput = function (props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Icon src={props.iconSrc} type={TYPE_OUTLINE} size={16} />
        </div>
      </div>
      <Input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const Login = function () {
  const theme = React.useContext(ThemeContext);
  let navigate = useNavigate();

  const BackgroundDiv = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
  `;
  const Logo = styled.img`
    width: 150px;
    position: absolute;
    top: 45px;
    left: 34px;
  `;

  const ProjectLogo = styled.img`
    width: 300px;
    position: absolute;
    top: 40%;
    left: 12%;
  `;
  return (
    <ThemeProvider className="login">
      <Container>
        <Grid container style={{ height: '100vh' }}>
          <Grid item span={6}>
            <BackgroundDiv>
              <Logo src={logoImg} />
              <ProjectLogo src={projectLogoImg} />
            </BackgroundDiv>
          </Grid>
          <Grid item span={6} style={{ height: '100%' }}>
            <Box alignHor alignVert style={{ height: '100%' }}>
              <form className="px-4 py-3">
                <Typography type={DISPLAY_SIX} tablet>
                  Login
                </Typography>
                <FormElementWrapper
                  className="mt-3"
                  size={SIZE_LARGE}
                  component={GroupedInput}
                  label="Username"
                  inputProps={{
                    iconSrc: Single01Icon,
                    placeholder: 'Enter your username',
                  }}
                />
                <FormElementWrapper
                  className="mt-3"
                  size={SIZE_LARGE}
                  component={GroupedInput}
                  label="Password"
                  inputProps={{
                    iconSrc: PadlockIcon,
                    placeholder: 'Enter your password',
                  }}
                />
                <Box alignHor className="mt-4">
                  <Button
                    className="rounded-button"
                    appearance={SECONDARY_BUTTON}
                  >
                    SSO sign-in
                  </Button>
                  <Button
                    className="rounded-button"
                    appearance={PRIMARY_BUTTON}
                    style={{
                      width: '114px',
                      marginLeft: '20px',
                    }}
                    onClick={() => {
                      navigate('/active-engagements');
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
