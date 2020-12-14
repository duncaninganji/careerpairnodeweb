/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useKeycloak } from '@react-keycloak/web';
import { createStudent } from '../../../api/profiles';


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

const schools = [
  {
    value: 'Stanford',
    label: 'Stanford',
  },
  {
    value: 'San Jose State University',
    label: 'San Jose State University',
  },
  {
    value: 'UC Berkeley',
    label: 'UC Berkeley',
  },
  {
    value: 'Santa Clara University',
    label: 'Santa Clara University',
  },
  {
    value: 'UC Davis',
    label: 'UC Davis',
  },
  {
    value: 'UC Santa Cruz',
    label: 'UC Santa Cruz',
  },
];

const years = [
  {
    value: 'Freshman',
    label: 'Freshman',
  },
  {
    value: 'Sophomore',
    label: 'Sophomore',
  },
  {
    value: 'Junior',
    label: 'Junior',
  },
  {
    value: 'Senior',
    label: 'Senior',
  },
  {
    value: 'Masters',
    label: 'Masters',
  },
  {
    value: 'PhD',
    label: 'PhD',
  },
];

export default function Register() {
  const classes = useStyles();
  const [year, setYears] = React.useState('Freshman');
  const [school, setSchool] = React.useState('Stanford');
  const [fname, setFname] = React.useState('John');
  const [lname, setLname] = React.useState('Doe');
  const [email, setEmail] = React.useState('john.doe@sjsu.edu');
  const [url, setUrl] = React.useState('https://source.unsplash.com/user/erondu/600x400');
  const title = 'CREATE YOUR PROFILE';
  const userObj = {};
  let userCreated = false;

  const handleYear = (event) => {
    setYears(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleFirstName = (event) => {
    setFname(event.target.value);
  };

  const handleLastName = (event) => {
    setLname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleSignUp = async () => {
    userObj.firstname = fname;
    userObj.lastname = lname;
    userObj.email = email;
    userObj.school = school;
    userObj.Url = url;
    if (await createStudent(userObj)) userCreated = true;
  };

  const { keycloak } = useKeycloak();
  const isStudent = keycloak.hasRealmRole('student');
  const isRecruiter = keycloak.hasRealmRole('recruiter');

  const handleLogout = () => {
    keycloak.logout();
  };


  return (
    <>
      <div><h1 style={{ color: 'black', fontSize: '50px' }}> { userCreated ? 'USER CREATED' : title } </h1></div>
      <Card style={{ padding: '20px' }}>
        <MuiThemeProvider theme={theme}>
          <div
            className={classes.root}
            style={{
              margin: 'auto', display: 'flex', flexDirection: 'column', maxWidth: '600px'
            }}
          >
            {isStudent
              && (
              <div>
                <TextField
                  id="outlined-full-width"
                  label="First Name"
                  style={{ margin: 8, width: 500 }}
                  margin="normal"
                  onChange={handleFirstName}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Last Name"
                  style={{ margin: 8, width: 500 }}
                  fullWidth
                  margin="normal"
                  onChange={handleLastName}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Your School Email Address"
                  style={{ margin: 8, width: 500 }}
                  fullWidth
                  margin="normal"
                  onChange={handleEmail}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Major"
                  style={{ margin: 8, width: 500 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <div>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="School"
                    style={{ margin: 8, width: 500 }}
                    value={school}
                    onChange={handleSchoolChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    {schools.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Year"
                    style={{ margin: 8 }}
                    value={year}
                    onChange={handleYear}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    {years.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <TextField
                  id="outlined-full-width"
                  label="Profile Image URL"
                  style={{ margin: 8, width: 500 }}
                  fullWidth
                  margin="normal"
                  onChange={handleUrl}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: 8, width: 300, height: 50 }}
                  onClick={handleSignUp}
                >
                  Sign Up
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
              )
            }
            {isRecruiter
             && (
             <div>
               <TextField
                 id="outlined-full-width"
                 label="First Name"
                 style={{ margin: 8, width: 500 }}
                 margin="normal"
                 InputLabelProps={{
                   shrink: true,
                 }}
                 variant="outlined"
               />
               <TextField
                 id="outlined-full-width"
                 label="Last Name"
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
                 label="Your Company Email Address"
                 style={{ margin: 8, width: 500 }}
                 fullWidth
                 margin="normal"
                 InputLabelProps={{
                   shrink: true,
                 }}
                 variant="outlined"
               />
               <TextField
                 id="outlined-select-currency-native"
                 select
                 label="Company"
                 style={{ margin: 8, width: 500 }}
                 value={school}
                 onChange={handleSchoolChange}
                 SelectProps={{
                   native: true,
                 }}
                 variant="outlined"
               >
                 {schools.map(option => (
                   <option key={option.value} value={option.value}>
                     {option.label}
                   </option>
                 ))}
               </TextField>
               <TextField
                 id="outlined-full-width"
                 label="Profile Image URL"
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
               >
                 Sign Up
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
             )
            }
          </div>
        </MuiThemeProvider>
      </Card>
    </>
  );
}
