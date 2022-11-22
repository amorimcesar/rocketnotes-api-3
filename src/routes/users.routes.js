const {Router} = require("express")
const multer = require('multer')
const uploadingconfig = require('../configs/upload')

const Userscontroller = require('../controllers/Userscontroller')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require ('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload = multer(uploadingconfig.MULTER)

const usersController = new Userscontroller ()
const userAvatarController = new UserAvatarController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = usersRoutes