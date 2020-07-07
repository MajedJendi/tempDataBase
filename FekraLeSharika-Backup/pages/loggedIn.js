import React from "react";
import Logout from "../components/logout";

import Autosuggest from "react-autosuggest";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";


import '../styles/stylesheet.scss'


import Head from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import HostData from '../data/hosts.json'

async function userLogin() {
  	console.log('Trying to login rn');
	
  	var urlString = window.document.URL;
  	console.log(urlString);

}

const LoggedIn = () => {
	
	userLogin();
	
	
//	firebase.auth().signOut().then(function() {
//		  // Sign-out successful.
//		}, function(error) {
//		  // An error happened.
//		});
	return (<div>
	
				<h3 className="title has-text-centered">How Shadow Works</h3>
				<Logout />
				
		   </div>);

}




export default LoggedIn
