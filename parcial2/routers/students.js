const controlador = require('../controller/studentsControllers');
const express = require('express');
const router = express.Router()

router.get('/', controlador.getStudents),
router.get('/:id', controlador.getStundentsByID),
router.post('/', controlador.createstudents),
router.put('/:id', controlador.updateStudent),
router.delete('/:id', controlador.deleteStudent),






module.exports = router;