/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useKeycloak } from '@react-keycloak/web';


const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

// eslint-disable-next-line no-shadow
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function CreateWebinars() {
  const classes = useStyles();

  const title = 'CREATE A WEBINAR';

  const handleCreateWebinar = () => {
    console.log('API call made to create webinar');
  };

  const { keycloak } = useKeycloak();

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <>
      <div><h1 style={{ color: 'black', fontSize: '50px' }}> { title } </h1></div>
      <Card style={{ padding: '20px' }}>
        <MuiThemeProvider theme={theme}>
          <div
            className={classes.root}
            style={{
              margin: 'auto', display: 'flex', flexDirection: 'column', maxWidth: '600px'
            }}
          >

            <div>
              <TextField
                id="outlined-full-width"
                label="Webinar Title"
                style={{ margin: 8, width: 500 }}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Short Blurb"
                style={{ margin: 8, width: 500 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Date"
                style={{ margin: 8, width: 500 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Webinar Image URL"
                style={{ margin: 8, width: 500 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 8, width: 300, height: 50 }}
                onClick={handleCreateWebinar}
              >
                Create Webinar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: 8, width: 300, height: 50 }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          </div>
        </MuiThemeProvider>
      </Card>
    </>
  );
}
