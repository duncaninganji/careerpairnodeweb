import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

const Footer = () => (
  <MuiThemeProvider theme={theme}>
    <div style={{
      backgroundColor: '#2196f3',
      padding: '5px',
      color: 'white',
      maxHeight: '40px',
    }}
    >
      <h1 style={{ color: 'white', fontSize: '20px' }}> ® All rights reserved 2020 </h1>
    </div>
  </MuiThemeProvider>
);

export default Footer;
