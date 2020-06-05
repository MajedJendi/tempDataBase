import '../styles/stylesheet.scss'





import '../styles/utility.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import Link from 'next/link'

import FormikForm from "../components/FormikForm";
import Login from "../components/Login";
import Signup from "../components/signup";
import parkingAttributes from "../components/parkingAttributes";

// <Hero />


const Index = () => (
  <div>
    <Head title="Shadow - Experience what it's really like to be a college student" />
    	
    	
    	
	<br></br>
	<br></br>
	<br></br>

    <parkingAttributes />

	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>

    <section className="section has-background-dark">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="subtitle has-text-white"><b>Convenient parking for less</b></h3>
            <p className="has-text-light">Stop paying so much for parking permits, and easily compare verified parking options by location and price. Park at your destination; not 5 blocks away.</p>
          </div>

          <div className="column">
            <h3 className="subtitle has-text-white"><b>Make money from your unused parking space</b></h3>
            <p className="has-text-light">Have extra parking space in your driveway? Make extra cash by letting others park in it on an hourly or long-term basis.</p>
          </div>

          <div className="column">
            <h3 className="subtitle has-text-white"><b>Pull more customers to your parking lot</b></h3>
            <p className="has-text-light">Never have an empty spot in your parking lot. Maximize profits by letting HopSpott showcase your deals and fill your unused parking spots.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h3 className="title has-text-centered">How Shadow Works</h3>

        <br/>

        <div className="columns is-centered">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/select.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">1) Select a host</h4>

            <p className="is-size-5">Browse through our selection of qualified hosts and select one that best matches your interests. Our hosts cover a variety of different majors and backgrounds and we're continuously expanding our selection to ensure you can find a perfect match.</p>
          </div>
        </div>

        <br/>

        <div className="columns is-centered reverse-row-order">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/schedule.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">2) Schedule a tour</h4>

            <p className="is-size-5">After submitting your info, your selected host will reach out and schedule a tour. Let your host know what you're interested in and where your priorities lie. Behind the scenes, your host will work on a personalized and custom itinerary to ensure the best experience possible.</p>
          </div>
        </div>

        <br/>

        <div className="columns is-centered">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/school.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">3) Visit campus</h4>

            <p className="is-size-5">Once a date is set, meet up with your host on campus and enjoy your campus experience! Ask questions and engage with your host to get the most out of your college tour</p>
          </div>
        </div>

        <hr/>

        <br/>
        <div className="columns">
          <div className="column has-text-centered">
            <p className="is-size-4"><strong>Interested? </strong> Browse through our hosts now!</p>

            <br/>

            <Link href="/book">
              <button className="button is-large is-primary">Book a Tour</button>
            </Link>
          </div>
        </div>
        <br/>

      </div>
    </section>

    <Footer />
  </div>
)


async function fetchAll(){

  	console.log('Returned success from server side');

	const headers = new Headers();
	
    const options = { 
    	method: 'GET',
	    headers: headers,
	    mode: 'cors',
	    cache: 'default'	
    };
        
    const req = new Request('http://localhost:3000/users', options);
        
    const res = await fetch(req);
  	status = await res.status;
  	
  	if(status === 200) {
  		console.log('success from all');
  	}

    const myBlob = await response.blob();
    console.log(myBlob);
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

export default Index
