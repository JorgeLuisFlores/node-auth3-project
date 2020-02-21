// something-router.js
const router = require('express').Router();
const checkDepartment = require('../auth/authDepartment.js');
// const router = express.Router();

// Import data model
const userData = require("./usersModel.js");

// AuthMiddleware
const authMiddle = require('../auth/authMiddleware.js');

// Write CRUD operations
// checkDepartment,
// authMiddle,
router.get('/', authMiddle, checkDepartment, (req, res) => {
    userData.findDepartment(req.department)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});





// Export router
module.exports = router;