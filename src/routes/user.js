const user = require('../controllers/user')
const router = require('express').Router()

router.get('/', user.getusers)  

module.exports = router