import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



// const React = require('react');
// const AppBar = require('@material-ui/core/AppBar');
// const Button = require('@material-ui/core/Button');
// const CameraIcon = require('@material-ui/icons/PhotoCamera');
// const Card = require('@material-ui/core/Card');
// const CardActions = require('@material-ui/core/CardActions');
// const CardContent = require('@material-ui/core/CardContent');
// const CardMedia = require('@material-ui/core/CardMedia');
// const CssBaseline = require('@material-ui/core/CssBaseline');
// const Grid = require('@material-ui/core/Grid');
// const Toolbar = require('@material-ui/core/Toolbar');
// const Typography = require('@material-ui/core/Typography');
// const { makeStyles } = require('@material-ui/core/styles');
// const Container = require('@material-ui/core/Container');
// const Link = require('@material-ui/core/Link');


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];


export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.posts.map((post) => (
              <Grid item key={post} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {post.imgURL}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.name}
                    </Typography>
                    <Typography>
                        {post.shortDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}






// var cards = [];
// var Paved = {
//     "name" : "Paved", "description" : "Email marketing and sponsored content, simplified. Find newsletters with subscriber profiles that fit your needs, and advertise with them.",
//     "shortDescription" : "Email marketing and sponsored content, simplified. Find newsletters with subscriber profiles that…",
//     "Likes" : "1",
//     "URL" : "https://www.paved.com"
// }

// cards[0] = Paved;

// var Pimpify = {
//     "name" : "Pimpify",
//     "description" : "Going to a conference? Pompify creates custom displays for startups, companies, and organizations. Fast 48 hour production and free shipping",
//     "shortDescription" : "Going to a conference? Pompify creates custom displays for startups, companies, and…",
//     "Likes" : "15",
//     "URL" : "https://www.pompify.com",
// }

// cards[1] = Pimpify;

// var Quu = {
//     "name" : "Quuu Promote",
//     "description" : "This is the easiest and absolutely one of the most cost effective ways I’ve found to promote content. You submit your content, choose a category, and as long as it’s not too sales-y they usually approve it. It is then used to feed the content feeds of all the lovely folks using Quuu to fill their social media feeds with good stuff.",
//     "shortDescription" : "This is the easiest and absolutely one of the most cost effective…",
//     "Likes" : "20",
//     "URL" : "https://quuu.co/promote?via=joi",
// }

// cards[2] = Quu;

// var SassPages = {
//     "name" : "Saas Pages",
//     "description" : "Browse 900+ landing page screenshots. We give you the best practices to help you convert more visitors to customers.",
//     "shortDescription" : "Browse 900+ landing page screenshots. We give you the best practices to…",
//     "Likes" : "10",
//     "URL" : "https://www.acquia.com/products-services/mautic",
// }

// cards[3] = SassPages;


// var Saashacker = {
//     "name" : "Saashacker",
//     "description" : "#saashacker is a weekly, actionable SaaS marketing case study, sent by email. They cover the growth tactics from companies like Moz, Mailchimp, and Hubspot, in a fun and analytical style (yep, those two things do go togethe. Take the ideas and use them in your growth strategies. For free.",
//     "shortDescription" : "#saashacker is a weekly, actionable SaaS marketing case study, sent by email….",
//     "Likes" : "10",
//     "URL" : "https://saashacker.co",
// }
// cards[4] = Saashacker;
