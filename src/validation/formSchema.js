import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required to continue')
    .min(2, 'Name must be at least 2 characters'), 

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Size is required to continue!'),

    special: yup
    .string()
    .required('Special request required, if none, type N/A.'),

    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    cheese: yup.boolean(), 
    veggies: yup.boolean()


})


export default formSchema