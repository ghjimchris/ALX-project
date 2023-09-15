import { Router } from "express";
import * as PatientsController from '../controllers/patient.js';
import { PatientSchema } from '../schema/patient.js';
import Validation from '../middlewares/validation.js'
import { verifyAdmin } from '../middlewares/auth.js'

const router = new Router();

// router.post('/add', verifyAdmin, Validation(PatientSchema, 'body'), PatientsController.AddPatient);
router.post('/add', Validation(PatientSchema, 'body'), PatientsController.AddPatient);
router.get('/all', PatientsController.GetAllPatients);
router.get('/single', PatientsController.GetSinglePatient);
router.put('/edit', verifyAdmin, Validation(PatientSchema, 'body'), PatientsController.EditPatient);

router.delete('/delete', verifyAdmin, PatientsController.DeletePatient);

export default router