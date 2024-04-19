let express=require('express')
const { isRequire } = require('../middleware/authMiddleware.js')
const { registerController, restPasswordHandler, loginController } = require('../Controller/authController.js')
let route = express.Router()
//Register || POST
route.post('/register', registerController)

// Login  || POST
route.post('/login', loginController)
// auth-user || get
route.get('/auth-user', isRequire, (req, res) => {
    res.send({ ok: true })
})

//Reset the password || Post
route.post('/reset-password', restPasswordHandler)
module.exports=route