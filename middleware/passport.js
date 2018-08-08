
const keys = require('./../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

module.exports = passport => {
    passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.userId).select('email id');
        try {

            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        } catch (e) {
            console.log(e)
        }

    }));
}