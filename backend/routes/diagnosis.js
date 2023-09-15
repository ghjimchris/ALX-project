import { Router } from "express";
import * as DiagnosisController from '../controllers/diagnosis.js';
import { DiagnosisSchema } from '../schema/diagnosis.js';
import Validation from '../middlewares/validation.js'
import { verifyAdmin } from '../middlewares/auth.js'

const router = new Router();

router.post('/add', verifyAdmin, Validation(DiagnosisSchema, 'body'), DiagnosisController.AddDiagnosis);
router.get('/multiple', DiagnosisController.GetDiagnoses);
router.get('/single', DiagnosisController.GetSingleDiagnosis);
router.put('/edit', verifyAdmin, Validation(DiagnosisSchema, 'body'), DiagnosisController.EditDiagnosis);

router.delete('/delete', verifyAdmin, DiagnosisController.DeleteDiagnosis);

export default router