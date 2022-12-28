const jwt = require('jsonwebtoken')

const tokenCheck = function (req, res, next) {
    try {
        if (!req.headers['x-auth-token']) res.status(400).send({ status: false, error: 'please enter token in header' })
        let token = req.headers['x-auth-token']
        let id = req.params.userId
        let decodeToken = jwt.verify(token, 'loginkey')
        if (!decodeToken._id) res.status(403).send({ status: false, error: "Please enter a valid token" })
        if (decodeToken._id !== id) res.status(403).send({ status: false, error: 'You are not authorized' })
        next()
    }
    catch (error) {
        res.status(403).send({ error: error.message })
    }
}

module.exports.tokenCheck = tokenCheck