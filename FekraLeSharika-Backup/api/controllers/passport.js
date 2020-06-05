
const passport = require('passport');

const GooglePlusTokenStrategy = require('passport-google-plus-token');
	

passport.use('googleToken', new GooglePlusTokenStrategy({
	clientID: '928399431916-o034tjaglvco531va87rpi5jjgn7n6an.apps.googleusercontent.com',
	clientSecret: 'Cw6N_nES90Gk_dkVd8dYcncj'
}, async(accessToken, refreshToken, profile, done) => {
	console.log('accessToken', accessToken);
	console.log('refreshToken', refreshToken);
	console.log('profile', profile);

}));