/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const myWebinars = [
  {
    name: 'Facebook Data Science',
    company: "Let's connect the world",
    date: 'January 20 2021',
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'Apple Tech Talk',
    company: 'Imagination is everything',
    date: 'January 27 2021',
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
];

const Webinars = [
  {
    name: 'Adventures with Android',
    company: 'Google',
    date: 'October 10 2020',
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'Create with Cisco',
    text: 'Talk by Andrew Bond',
    date: 'September 10 2020',
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'Explore with Expedia',
    text: 'Q&A with our Engineering Teams',
    date: 'August 20 2020',
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
];

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
  },
  media: {
    height: 250,
  },
  padding: 20,
  paddingLeft: 20,
  marginLeft: 30
});

export default function CareerFairs() {
  const classes = useStyles();
  const careerFairName = 'EECS Career Fair';
  const title = careerFairName.concat(' - ', 'Webinars').toUpperCase();

  const { keycloak } = useKeycloak();

  const handleCreateWebinars = () => {
    console.log('Redirecting...');
    window.location.href = '/create-webinars';
  };

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <>
      {keycloak.hasRealmRole('recruiter')
      && (
      <Button
        variant="contained"
        color="primary"
        style={{ margin: 8, width: 300, height: 50 }}
        onClick={handleCreateWebinars}
      >
        Create Webinars
      </Button>
      )}
      <div><h1 style={{ color: 'black', fontSize: '50px' }}> { title } </h1></div>
      <Grid container flexGrow="1" spacing={2} style={{ marginLeft: '20px', padding: '10px' }}>
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> My Webinars </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { myWebinars
            // eslint-disable-next-line max-len
              .map(metadata => (
                <Grid key={metadata.name} item>
                  <CareerFairCard
                    metadata={metadata}
                    classes={classes}
                    key={metadata.name}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container flexGrow="1" spacing={2} style={{ marginLeft: '20px', padding: '10px' }}>
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> Webinars </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { Webinars
            // eslint-disable-next-line max-len
              .map(metadata => (
                <Grid key={metadata.name} item>
                  <CareerFairCard
                    metadata={metadata}
                    classes={classes}
                    key={metadata.name}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const CareerFairCard = (props) => {
  const {
    image, name, company, date
  } = props.metadata;
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { company }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { date }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" justify="center">
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
};
