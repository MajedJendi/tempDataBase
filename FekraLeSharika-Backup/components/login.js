import React from "react";
import Autosuggest from "react-autosuggest";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Error";
import { json } from "body-parser";
const https = require('https')

const ValidationSchema = Yup.object().shape({
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
});

async function userLogin(req) {
	console.log('Trying to login rn');
	const res = await fetch(req);
	const status = await res.status;
	const json = await res.json();
  
  	if (res.status === 200) {
		console.log("login success");
		console.log(json.token);
		window.location.href = "about?token=" + json.token;
	} else if (res.status === 409) {
		console.log("Existing email");
		document.getElementById("input-row-email").innerHTML = "You are already registered, would you like to sign in";
	} else if (res.status === 408){
		console.log("Existing phone number");
		document.getElementById("input-row-phone").innerHTML = "This phone number was already used";
	} else {
		console.log("Other errors");
	}  
}

export default function Login() {
  const [country, setCountry] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      validate={values => {
        let errors = {};

        return errors;
      }}
      	onSubmit={(values, { setSubmitting, resetForm }) => {
		
            setSubmitting(true);
            console.log(JSON.stringify(values, null, 2));
            const headers = new Headers();
            headers.append('Content-type', 'application/json');
            const options = { 
                method: 'POST',
                headers,
                body: '{ "email": "' + values.email 
                    + '", "password": "' + values.password + '"}' 
            }
            const req = new Request('http://localhost:3000/users/login', options);
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
    		  
    	<div className ="columns is-mobile">
    		<div className ="column is-half is-offset-one-quarter is-4">
        		<div className = "box is-larg">

			        <form onSubmit={handleSubmit}>
					  
			          <div className="field">
				          <div className="control has-icons-left has-icons-right">
					            <input 
					            	className ="input is-info" 
					            	name="email"
					            	type="text" 
					            	placeholder="Email" 
								    onChange={handleChange}
							        onBlur={handleBlur}
					            	value={values.email}
					            />
					            
						            <span className="icon is-small is-left">
						              <i className="fas fa-envelope"></i>
						            </span>

				          <p className="help is-danger" id = "input-row-email"></p>
				          </div>
			          </div>
			          
				       <div className="field">
				          <div className="control has-icons-left has-icons-right">
					            <input 
					            	className ="input is-info" 
					            	name="password"
					            	type="text" 
					            	placeholder="Password" 
								    onChange={handleChange}
							        onBlur={handleBlur}
					            	value={values.password}
					            />
					            
						            <span className="icon is-small is-left">
						              <i className="fas fa-shield-alt"></i>
						            </span>
				          </div>
			          </div>

						<button className= "button is-primary" type = "submit" disabled={isSubmitting}>
							Login
						</button>
			        </form>
				</div>
			</div>
        </div>
      )}
    </Formik>
  );
}

//<label className="label">Password</label>




