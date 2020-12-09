/* eslint-disable react/prop-types */
import * as React from 'react';
import { useCallback } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useKeycloak } from '@react-keycloak/web';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';

const Login = (props) => {
  console.log('Login');
  const { component: Component, rest } = props;

  const { keycloak, initialized } = useKeycloak();
  const login = useCallback(() => {
      // eslint-disable-next-line no-unused-expressions
      keycloak?.login();
  }, [keycloak]);

  // eslint-disable-next-line max-len
  if (initialized && keycloak?.authenticated) {
    console.log('rendering private component');
    return <Component {...rest} />;
  }

  const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card style={{ width: '40%', height: 120, margin: '0 auto' }}>
          {initialized
            ? (
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 'auto', width: 300, height: 50 }}
                onClick={login}
              >
                Login
              </Button>
            ) : <h2> Loading... </h2>}
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

export default Login;
