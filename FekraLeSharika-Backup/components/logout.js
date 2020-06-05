import Link from 'next/link'

async function logout() {
    console.log("Logging out");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = { 
        method: 'POST',
        headers,
        body: '{ "token": "' + token +'"}'
    }
    const req = new Request('http://localhost:3000/users/logout', options);
    const res = await fetch(req);
    const status = await res.status;
    
	if (status === 200) {
		console.log("logout successful");	
		window.location.href = "/";
	} else {
		console.log("Other errors");
	}

}

const Logout = () => (
<div>
    <button className = "button is-primary" type = "submit" onClick = {logout}>
        Logout
    </button>
</div>
)




export default Logout


//- link rel = "stylesheet" href = "../css/guideMe.css"


// meta name = "viewport" content="width=device-width, initial-scale=1"

