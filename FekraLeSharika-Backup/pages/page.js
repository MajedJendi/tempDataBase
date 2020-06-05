import React, {Component} from 'react';
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
import absoluteUrl from 'next-absolute-url';
import { useRouter } from 'next/router'


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

const classes = makeStyles((theme) => ({
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
  
const aws_access_key_id = "AKIA6BGTFVX3EAMMACWL";
const aws_secret_access_key = "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";
var AWS = require('aws-sdk');
AWS.config.update({region : 'us-east-2', accessKeyId: aws_access_key_id, secretAccessKey: aws_secret_access_key});
var s3 = new AWS.S3();


let location;


export default class Page extends React.Component {

    static async getInitialProps({query}) {
      console.log("here **************-->");
      var cards = [];
 
       // ----Uncomment here for static testing-----
      // var Paved = {
      //     "name" : "Paved", "description" : "Email marketing and sponsored content, simplified. Find newsletters with subscriber profiles that fit your needs, and advertise with them.",
      //     "shortDescription" : "Email marketing and sponsored content, simplified. Find newsletters with subscriber profiles that…",
      //     "Likes" : "1",
      //     "imgURL" : "https://y2u.be/img/why_y2ube_v2.png",
      //     "URL" : "https://www.paved.com"
      // }
      // cards[0] = Paved;
      // cards[1] = Paved;
      // cards[2] = Paved;
      // cards[3] = Paved;
      // cards[4] = Paved;

      var index = 0;
      var infoJson;
      var info;
      var prefix =  query.category.toString() + query.subcategory.toString();
      var params = {Bucket: 'the-resources', Prefix: query.category.toString() + query.subcategory.toString()};
      let categoryFolder = await s3.listObjectsV2(params).promise();
      console.log(prefix);

      console.log(categoryFolder.Contents);
      for(var i = 0; i < categoryFolder.KeyCount; i += 2) {
          var limit = categoryFolder.Contents[i].Key.lastIndexOf("/");
          var newBucket = categoryFolder.Contents[i].Key.substring(0, limit);
          console.log("newBucket: " + newBucket);
          params = {Bucket: 'the-resources/' + newBucket, Key: 'info.txt'};
          info = await s3.getObject(params).promise();
          infoJson = JSON.parse(info.Body.toString());
          const imgURL = s3.getSignedUrl('getObject', {
              Bucket: 'the-resources/' + newBucket,
              Key: 'thumbnail.png',
              Expires: 142662
          });
          console.log("infoJson.name: " + infoJson.name);
          console.log("imgURL: " + imgURL);
          infoJson["imgURL"] = imgURL;
          cards[index] = infoJson;
          index++;
      }
      
      return {repos:cards}
    }

    render() {
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
          <br></br>
          <br></br>
          <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
              {this.props.repos.map(card => (
                  <Grid item key= {card.name} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                      <CardMedia
                          style = {{ height: 10, paddingTop: '56%'}}
                          className={classes.cardMedia}
                          image= {card.imgURL}
                          title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                          {card.name}
                      </Typography>
                      <Typography>
                          {card.shortDescription}
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
          <br></br>
          <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purposes!
          </Typography>
          <Copyright />
          </footer>
          {/* End footer */}
      </React.Fragment>
        )
    } 
}
