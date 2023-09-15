import yup from 'yup';
import pkgValidator from 'validator';
const { isEmail } = pkgValidator;

const emailChecker = (eml) => {
    return isEmail(eml)
}

export const RegisterSchema = yup.object().shape({
    first_name: yup
        .string('First Name must be a string')
        .min(2, 'Minimum length for First Name is 2')
        .max(50, 'Maximum length for First Name is 50')
        .required('First Name required'),
    last_name: yup
        .string('Last Name must be a string')
        .min(2, 'Minimum length for Last Name is 2')
        .max(50, 'Maximum length for Last Name is 50')
        .required('Last Name required'),
    email: yup
        .string()
        .min(10, 'Email should be at least 10 characters')
        .max(100, 'Email should be at most 100 characters')
        .test('custom-email-validation', 'Invalid email address', function (value) {
        return emailChecker(value);
      })
      .required('Email is required'),
    phone: yup
        .string('Phone must be a numbers')
        .min(10, 'Minimum length for Phone is 10')
        .max(15, 'Maximum length for Phone is 15')
        .required('Phone is required'),
    password: yup
        .string('Password must be a string')
        .min(6, 'Minimum characters allowed for Password is 6')
        .max(25, 'Maximum characters allowed for Password is 25')
        .required('Password is required'),
    confirm_password: yup
        .string('Password must be a string')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirmed Password is required'),
})


export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .min(10, 'Email should be at least 10 characters')
        .max(100, 'Email should be at most 100 characters')
        .test('custom-email-validation', 'Invalid email address', function (value) {
        return emailChecker(value);
      })
      .required('Email is required'),
    password: yup
        .string('Password must be a string')
        .min(6, 'Minimum characters allowed is 6')
        .max(25, 'Maximum characters allowed is 25')
        .required('Password is required'),
})

// first_name varchar(50),
// last_name varchar(50),
// email varchar(100),
// phone varchar(15),
// password varchar(100),

    // email: yup
    //     .string('Email must be a string')
    //     .max(100)
    //     .required('Email is required'),