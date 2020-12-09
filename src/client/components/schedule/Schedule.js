/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import appointments from './data';

const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

export default function Schedule() {
  const careerFairName = 'EECS Career Fair';
  const title = careerFairName.concat(' - ', 'Schedule').toUpperCase();

  return (
    <>
      <div><h1 style={{ color: 'black', fontSize: '50px' }}> { title } </h1></div>
      <div style={{ display: 'flex' }}>
        <Card style={{ padding: '20px' }}>
          <MuiThemeProvider theme={theme}>
            <Paper>
              <Scheduler data={appointments}>
                <ViewState currentDate="2018-06-28" />
                <DayView startDayHour={9} endDayHour={19} />
                <Appointments />
              </Scheduler>
            </Paper>
          </MuiThemeProvider>
        </Card>
        <Card style={{ padding: '20px' }}>
          <MuiThemeProvider theme={theme}>
            <Paper>
              <Scheduler data={appointments}>
                <ViewState currentDate="2018-06-28" />
                <DayView startDayHour={9} endDayHour={19} />
                <Appointments />
              </Scheduler>
            </Paper>
          </MuiThemeProvider>
        </Card>
      </div>
    </>
  );
}
