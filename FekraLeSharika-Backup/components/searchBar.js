import React from "react";


import Autosuggest from "react-autosuggest";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Error";


// const ValidationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(1, "Too Short!")
//     .max(255, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .email("Must be an email address")
//     .max(255, "Too Long!")
//     .required("Required"),
//     name: Yup.string()
//     .min(1, "Too Short!")
//     .max(255, "Too Long!")
//     .required("Required"),
//     phone: Yup.string()
//     .min(1, "Too Short!")
//     .max(255, "Too Long!")
//     .required("Required")
// });

async function userLogin(req) {
  	console.log('Trying to login rn');
	
	const res = await fetch(req);
	
	const status = await res.status;
	
	if (res.status === 200) {
		console.log("success");
		
		//window.location.href = "book";

		
	} else if (res.status === 409) {
	console.log("Existing email");
	
	   	document.getElementById("input-row-email").innerHTML = "You are already registered, would you like to sign in";
		//window.location.href="map?varid=" + encodeURIComponent(res.json);
	//	return (<h2>wrong email or password</h2>);
	} else if (res.status === 408){
		console.log("Existing phone number");
		   	document.getElementById("input-row-phone").innerHTML = "This phone number was already used";
	} else {
		console.log("Other errors");
		   	//document.getElementById("input-row-password").innerHTML = "Other errors";
	}

	//	return (<h2>wrong email or password</h2>);
	
}

async function fetchAll(req){


	const headers = new Headers();
	
    const options = { 
    	method: 'GET',
	    headers: headers,
	    mode: 'cors',
	    cache: 'default'	
    };
        
   // const req = new Request('http://localhost:3000/users', options);
        
    const res = await fetch(req);
  	status = await res.status;
  	
  	if(status === 200) {
  		console.log('successful login');
  		
  	}
  	
}

export default function SearchBar() {
  const [country, setCountry] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        phone: "",
      }}
    //   validationSchema={ValidationSchema}
    //   validate={values => {
    //     let errors = {};

    //     return errors;
    //   }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        console.log(JSON.stringify(values, null, 2));

        
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        
        const options = { 
        	method: 'POST',
        	headers,
        	body: JSON.stringify(values),
        };
        
        const req = new Request('http://localhost:3000/users/signup', options);
        
        
      setTimeout(() => {
          userLogin(req);
	      resetForm();
	      setCountry("");
	      setSubmitting(false);
	   }, 500);
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => ( 
        <form onSubmit={handleSubmit}>
            <div className = "column is-6">
                <div className = "field has-addons">
                    <p className = "control has-icons-left is-expanded">
                        <input 
                            className = "input is-info" 
                            name = "name"
                            type = "text" 
                            placeholder = "Search up our resources" 
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value = {values.name}
                        />    
                    </p>

                    <p className  = "control">
                        <a className="button" type="submit" disabled={isSubmitting}>
                            Search
                        </a>
                    </p>
                </div>
            </div>
        </form>
      )}
    </Formik>
  );
}

// is-offset-one-fifth

