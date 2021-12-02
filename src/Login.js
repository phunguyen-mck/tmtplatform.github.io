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
import img from './images/download.png';
import Single01Icon from '@mds/mds-icons/icons/svg/outline-16-single-01.svg';
import PadlockIcon from '@mds/mds-icons/icons/svg/outline-16-padlock.svg';
import { useNavigate } from 'react-router-dom';

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

  return (
    <ThemeProvider className="login">
      <Container responsive>
        <Grid container style={{ height: '100vh' }}>
          <Grid item span={6}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '100%',
              }}
            />
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
                ></FormElementWrapper>
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
