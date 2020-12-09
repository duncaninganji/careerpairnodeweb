/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const currentData = [
  {
    name: 'UC Berkeley EECS Career Fair',
    text: 'Come network with recruiters!',
    date: 'December 20 2020',
    signedUp: true,
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
];

const upcomingData = [
  {
    name: 'UC Berkeley STEM Career Fair',
    text: 'Talk by GM Peer Mentors',
    date: 'January 20 2021',
    signedUp: true,
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'Cal Business Career Fair',
    text: 'Wallstreet is here boyz',
    date: 'January 27 2021',
    signedUp: false,
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
];

const pastData = [
  {
    name: 'Apple Day',
    text: 'Come get free apple products, and also talk to us',
    date: 'October 10 2020',
    signedUp: false,
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'College of Chemistry',
    text: 'Talk by Albert Einstein',
    date: 'September 10 2020',
    signedUp: false,
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    name: 'Engineering Career Fair',
    text: 'Tesla will demo their new cybertruck',
    date: 'August 20 2020',
    signedUp: true,
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
  return (
    <>
      <div><h1 style={{ color: 'black', fontSize: '50px' }}>CAREER FAIRS </h1></div>
      <Grid container flexGrow="1" spacing={2} style={{ marginLeft: '20px', padding: '10px' }}>
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> Current </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { currentData
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
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> Upcoming </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { upcomingData
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
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> Past </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { pastData
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
    image, name, text, date
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
            { text }
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
