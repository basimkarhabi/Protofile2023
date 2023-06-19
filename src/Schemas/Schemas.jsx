import * as yup from 'yup';
import { number,boolean } from 'yup'

export const BasicSchema = yup.object().shape({
  firstName: yup
    .string().min(3, 'it is 9')
    .required('First Name is required'),
  lastName: yup
    .string()
    .required('Last Name is required'),
  millionaire: boolean()
      .oneOf([true], "Please accept the terms of service"),
      // .required('Last Name is required'),
  
  money: number().when('millionaire', { 
    is: true,
    then: (BasicSchema) => BasicSchema.min(1000_000, 'you said Befor I have one Millioner'),
    otherwise: (BasicSchema)=>BasicSchema.required('plaese tell me what you have ')
   })
   
 });