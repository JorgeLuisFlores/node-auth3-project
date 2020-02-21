module.exports = (req, res, next) => {

    console.log(req.decodedJwt);
    if (req.decodedJwt.department) {
        req.department = req.decodedJwt.department;
        next();
    } else {
        res.status(403).json({
            message: "You don't have permission."
        });
    };
};