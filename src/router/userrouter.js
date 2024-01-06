// userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');

router.post('/create', userController.createUser);
router.put('/update', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);
router.get('/read/:userId', userController.readUser);

module.exports = router;
