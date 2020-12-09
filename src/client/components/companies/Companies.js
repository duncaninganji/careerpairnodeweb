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


const Companies = [
  {
    company: 'Google',
    desc: "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Microsoft',
    desc: "Microsoft's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Uber',
    desc: "Uber's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Facebook',
    desc: "Facebook's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Twitter',
    desc: "Twitter's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Amazon',
    desc: "Amazon's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Netflix',
    desc: "Netflix's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    company: 'Apple',
    desc: "Apple's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
    image: 'https://source.unsplash.com/user/erondu/600x400'
  },
];

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
  },
  media: {
    height: 200,
  },
  padding: 20,
  paddingLeft: 20,
  marginLeft: 30
});

export default function CareerFairs() {
  const classes = useStyles();
  const careerFairName = 'EECS Career Fair';
  const title = careerFairName.concat(' - ', 'Companies').toUpperCase();

  return (
    <>
      <div><h1 style={{ color: 'black', fontSize: '50px' }}> { title } </h1></div>
      <Grid container flexGrow="1" spacing={2} style={{ marginLeft: '20px', padding: '10px' }}>
        <div style={{ padding: '10px' }}><h1 style={{ marginLeft: '20px' }}> Sign up for 1-1s with Recruiters Below </h1></div>
        <Grid item lg={12}>
          <Grid container justify="left" spacing={2}>
            { Companies
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
  const { image, desc, company } = props.metadata;
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={company}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { company }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ justify: 'left' }}>
            { desc }
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
