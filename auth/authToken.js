const jwt = require("jsonwebtoken");
const secrets = require('../Middleware/secrets.js');

module.exports = {
    generateToken
};

function generateToken(user) {
    console.log(user);
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.Department
    };
    const options = {
        expiresIn: '5d'
    };

    return jwt.sign(payload, secrets.jwtSecret, options)

}