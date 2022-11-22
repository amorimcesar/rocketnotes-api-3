const {Router, request} = require("express")
const NotesController = require('../controllers/NotesController')
const notesRoutes = Router()
const notescontroller = new NotesController ()
const ensureAuthenticated = require ('../middlewares/ensureAuthenticated')

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notescontroller.index)
notesRoutes.post('/', notescontroller.create)
notesRoutes.get('/:id', notescontroller.show)
notesRoutes.delete('/:id', notescontroller.delete)

module.exports = notesRoutes