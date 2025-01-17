const express = require('express')
const router = express.Router()


const commonController = require('../controllers/common.controller')
const droneController = require('../controllers/drone.controller')
const userController = require('../controllers/users.controller')

router.get('/', commonController.home)

router.get("/users/new", userController.create);
router.post("/users", userController.doCreate);

router.get('/drones', droneController.list)

router.get('/drones/new', droneController.create)
router.post('/drones', droneController.doCreate)

router.get('/drones/:id/update', droneController.update)
router.post('/drones/:id', droneController.doUpdate)

router.post('/drones/:id/delete', droneController.delete)

module.exports = router