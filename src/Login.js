import React from 'react';
import styled from '@emotion/styled';
import {
  ThemeProvider,
  ThemeContext,
  Container,
  Grid,
  Image,
  Input,
  Box,
  Tag,
  Typography,
  FormElementWrapper,
  SIZE_LARGE,
  DISPLAY_SIX,
  Button,
  Spacer,
  SECONDARY_BUTTON,
  PRIMARY_BUTTON,
} from '@mds/mds-reactjs-library';
import img from './images/download.png';

const Login = function () {
  const theme = React.useContext(ThemeContext);

  const LargeInput = styled(Input)`
    width: 380px;
  `;

  const Spacer = styled.div`
    width: 100%;
    height: 16px;
  `;

  return (
    <ThemeProvider>
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
                <Spacer />
                <FormElementWrapper
                  size={SIZE_LARGE}
                  component={LargeInput}
                  label="Username"
                  inputProps={{ placeholder: 'Enter your username' }}
                />
                <Spacer />
                <FormElementWrapper
                  size={SIZE_LARGE}
                  component={LargeInput}
                  label="Password"
                  inputProps={{ placeholder: 'Enter your password' }}
                />
                <Spacer />
                <Box alignHor>
                  <Button appearance={SECONDARY_BUTTON}>SSO sign-in</Button>
                  <Button
                    appearance={PRIMARY_BUTTON}
                    style={{
                      marginLeft: '20px',
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
