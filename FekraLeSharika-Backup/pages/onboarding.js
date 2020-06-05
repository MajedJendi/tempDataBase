import '../styles/stylesheet.scss'


import '../styles/hostSignup.scss'

import Head from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Map from '../components/Map'

import React, { Component } from 'react';

// Import Search Bar Components
//import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';



const HostSignup = (props) => {
	
	
	
  return (
    <div>
      <Head title="Shadow - Become a Host" />

      <NavBar />	

    </div>
  )
}

function onSignIn(googleUser) {

	 console.log("just logged in");	 
	        // Useful data for your client-side scripts:
   var profile = googleUser.getBasicProfile();
       
   let GoogleAuth = gapi.auth2.getAuthInstance();
   // Retrieve the GoogleUser object for the current user.
   var GoogleUser = GoogleAuth.currentUser.get();
   GoogleUser.grant({'scope':'https://www.googleapis.com/auth/calendar'})

   var givenName = profile.getGivenName();
   var familyName = profile.getFamilyName();
   var imageUrl = profile.getImageUrl();
   var email = profile.getEmail();

   //Sending to the Sign-in servlet through an AJAX call

   // The ID token you need to pass to your backend:
   var id_token = googleUser.getAuthResponse().id_token;
   console.log("ID Token: " + id_token);
   
	if(googleUser.hasGrantedScopes('https://www.googleapis.com/auth/calendar')) {
	    console.log("we have already been granted the Calendar scope!");
	} else {
	   googleUser.grant({'scope':'https://www.googleapis.com/auth/calendar'});
	}


 };


export default HostSignup
