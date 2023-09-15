import yup from 'yup';

export const DiagnosisSchema = yup.object().shape({
    blood_sugar: yup
        .number('Blood Sugar should be a number')
        .max(50)
        .required('Blood sugar required'),
    blood_pressure_systolic: yup
        .string('Blood pressure Systolic must be a number')
        .required('Blood pressure Systolic required'), 
    blood_pressure_diastolic: yup
        .string('Blood pressure Diastolic must be a number')
        .required('Blood pressure Diastolic required'), 
    temperature: yup
        .number('Temperature should be a number')
        .required('Temperature required'),
    weight: yup
        .number('Weight should be a number')
        .required('Weight required'),
});