import yup from 'yup';

export const PatientSchema = yup.object().shape({
    first_name: yup
        .string('First Name must be a string')
        .max(50)
        .required('First Name required'),
    last_name: yup
        .string('Last Name must be a string')
        .max(50)
        .required('Last Name required'),
    other_names: yup
        .string('Other Names must be a string')
        .max(100),
    gender: yup
        .string('Gender must be a string')
        .max(15), 
    dob: yup
        .date('Date of Birth should be a date')
        .required('Date of Birth required'),
    phone: yup
        .string('Phone should be only numbers')
        .min(10, 'Minimum length for Phone is 10')
        .max(15, 'Maximum length for Phone is 15')
        .required('Phone required'),
    phone_alt: yup
        .string('Phone should be only numbers')
        .min(10, 'Minimum length for Phone is 10')
        .max(15, 'Maximum length for Phone is 15')
        .nullable(true)
        .transform((_, val) => val === Number(val) ? val : null),
    height: yup
        .number('Height should be a decimal')
        .required('Height required'),
    nok_name: yup
        .string('Next of Kin Name must be a string')
        .min(5, 'Minimum length for Next of Kin Name is 5 characters')
        .max(100, 'Maximum length for Next of Kin Name is 100 characters')
        .required('Next of Kin Name required'),
    nok_contact: yup
        .string('Next of Kin Contact')
        .min(10, 'Minimum length for Next of Kin Contact is 10 characters')
        .max(100, 'Maximum length for Next of Kin Contact is 100 characters')
        .required('Next of Kin Contact required')
});