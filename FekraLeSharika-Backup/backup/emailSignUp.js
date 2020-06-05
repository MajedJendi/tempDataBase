
import '../styles/stylesheet.scss'


import '../styles/utility.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import Link from 'next/link'
//import { Route } from 'react-router';

import Login from "../components/Login";

const emailSignUP = () => (

	<div>	
	
	<Login />

		 
<a href="https://accounts.google.com/o/oauth2/auth?client_id=928399431916-o034tjaglvco531va87rpi5jjgn7n6an.apps.googleusercontent.com&onsuccess=onSignIn&scope=https://www.googleapis.com/auth/plus.login&accesstype=offline&redirect_uri=http://localhost:3000/onboarding&response_type=code&onSuccess=onSignIn">Google</a>
		
      </div>
      
)

export default emailSignUP
