// issues:
// only searches for one charachter and ignores and keeps erasing everytime
// Input doesnt show
// maybe try to make the SearchBar component work?




// Imports
import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

// Import Search Bar Components
//import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };
  }
    
 

  render() {
    return (
    		<div>	
   		 
<a href="https://accounts.google.com/o/oauth2/auth?client_id=928399431916-o034tjaglvco531va87rpi5jjgn7n6an.apps.googleusercontent.com&onsuccess=onSignIn&scope=https://www.googleapis.com/auth/plus.login&accesstype=offline&redirect_uri=http://localhost:3000/onboarding&response_type=code&onSuccess=onSignIn"onclick="return onSignIn();">Google</a>
    			





    		      </div>
    );
  }
  onSignIn(googleUser) {

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
	}
}

export default Search;



//<script src="index.pack.js"></script>
//
////<section className="picturesUpload">
//
//	<div className ="columns">
//
//		<div className ="column">
//			<div class="box">
//	
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          Info file…
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      
//				      </span>
//				    </label>
//				  </div>
//				</div>
//				
//				<figure class="image is-128x128 is-mobile">
//				  <img class = "image-1" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//			
//			<div class="box">
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          Info file…
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      
//				      </span>
//				    </label>
//				  </div>
//				</div>
//				
//				<figure class="image is-128x128">
//				  <img class = "image-2" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//		</div>
//		
//		<div className ="column">
//			
//			<div class="box">
//	
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          Info file…
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      
//				      </span>
//				    </label>
//				  </div>
//				</div>
//			
//				<figure class="image is-128x128">
//				  <img class = "image-3" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//			
//			<div class="box">
//	
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          Info file…
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      
//				      </span>
//				    </label>
//				  </div>
//				</div>
//				
//				<figure class="image is-128x128">
//				  <img class = "image-4" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//		</div>
//		
//		<div className ="column">
//		
//			<div class="box">
//	
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          Info file…
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      
//				      </span>
//				    </label>
//				  </div>
//				</div>
//				
//				<figure class="image is-128x128">
//				  <img class = "image-5" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//			
//			<div class="box">
//	
//				<div class="field">
//				  <div class="file is-info has-name">
//				    <label class="file-label">
//				      <input id='fileButton' class="file-input" type="file" name="picture"></input>
//				      <span class="file-cta">
//				        <span class="file-icon">
//				          <i class="fas fa-upload"></i>
//				        </span>
//				        <span class="file-label">
//				          This one --->
//				        </span>
//				      </span>
//				      <span class="file-name">
//				      	
//				      </span>
//				    </label>
//				  </div>
//				</div>
//				
//				<figure class="image is-128x128">
//				  <img class = "image-6" src="https://bulma.io/images/placeholders/256x256.png"></img>
//				</figure>
//			</div>
//		</div>
//	</div>
//	
//)
//
//
//
////var uploader = document.getElementById('uploader');
//var fileButton = document.getElementById('fileButton');
//
//
////Listen for file selection
//fileButton.addEventListener('change', function(e) {
//	// Get file
//	
//	//console.log('here----->');
//	const file = e.target.file[0];
//	
//	// Create storage ref
//	const storageRef = firebase.storage().ref('sweet_gifs/' + file.name);
//	
//	// Upload file
//	var task = storageRef.put(file);
//	// Update progress bar
//	task.on('state_changed',
//		function progress(snapshot) {
//			var percentage = (snapshot.bytesTransferred / 
//			snapshot.totalBytes) * 100;
//			uploader.value = percentage;
//		},
//		
//		function error(err) {
//			console.log(err);
//		},
//		
//		function complete() {
//			console.log('Completed file upload');
//		}
//			
//	)
	