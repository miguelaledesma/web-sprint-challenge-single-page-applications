import * as yup from 'yup'

const formSchema = yup.object().shape({
    

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Size is required to continue!'),

    special: yup
    .string()
    .required('Special request required, if none, type N/A.'),

    name: yup
        .string()
        .trim()
        .required('Please enter your name to place your order')
        .min(2, 'name must be at least 2 characters'),

    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    cheese: yup.boolean(), 
    veggies: yup.boolean()


})


export default formSchema