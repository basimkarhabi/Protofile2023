import React,{useState } from 'react'
import { Card, CardContent,Box ,Checkbox , Button} from '@mui/material'
import { Field, Form, Formik,FormikConfig, FormikValues  } from 'formik'
import {CheckboxWithLabel, TextField } from 'formik-material-ui' 
import CustomInput from '../Form2/CustomInput.jsx'
import {BasicSchema } from '../../Schemas/Schemas.jsx'
import CustomCheclbox from '../Form2/CustomCheclbox.jsx'
import { Pick } from 'typescript'




const onSubmit = async (values) => {
        console.log(values);

};

const FormMain = () =>
{

  return (
    <Card>
      <CardContent>
              <FormikStepper
          initialValues={{
                  firstName: '',
                  lastName: '', 
                  millionaire: false, 
                  money:'',
                   description: '',
                  }}

         validationSchema = {BasicSchema}
          onSubmit= {onSubmit}     
              >
    
              
              <FormikStep validationSchema = {BasicSchema }>       
                <Box paddingBottom={2} > 
                  <CustomInput paddingBottom={2}
                     label="First Name"
                    name="firstName"
                    type="text"
                  placeholder="Enter UserName " 
                  component={TextField}
                />  
                </Box>
                
              <Box  paddingBottom={2} >
                  <CustomInput paddingBottom={2}
                     label="last Name"
                    name="lastName"
                    type="text"
                  placeholder="Enter UserName " 
                  component={TextField}
                />                  
              </Box>
                <Box paddingBottom={2}>   
                  <CustomCheclbox 
                    name="millionaire"
                    type="checkbox"
                    component={CheckboxWithLabel} 
                    // Label={{ label: "I am a millionaire" }}
                  />                 
                </Box>

              </FormikStep>
              <FormikStep  validationSchema = {BasicSchema }>
                <Box paddingBottom={2}>
                  
                 <CustomInput paddingBottom={2}
                     label="All The money I have"
                    name="money"
                    type="number"
                  placeholder="Enter money " 
                  component={TextField}
                /> 
     
                </Box>                  
            </FormikStep>
              
              <FormikStep validationSchema = {BasicSchema}>
                <Box paddingBottom={2}>
                  <Field  type="text" name="description" placeholder= "description" component={TextField} label="Description " />
                </Box>
              </FormikStep>
              <button type="submit" addingBottom={2}> Submit</button> 
  
            
                                   
              </FormikStepper>   
          </CardContent>
    </Card>

  )

}

export default FormMain

export interface FormikStepProps extends Pick <FormikConfig<FormikValues> , 'childern' | 'validationSchema'>
{
}

export function FormikStep({ children, ...props }: FormikStepProps)
{
    return <>{children} </>

  
}

export function FormikStepper({ children,...props}:FormikConfig<FormikValues> )
{
  const childrenArray = React.Children.toArray(children) ;
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step] 
  console.log('currentChild' , currentChild)
  function isLastStep()
  {
    return step === childrenArray.length - 1
  }

  return (

    <Formik  {...props}
      onSubmit={ async(values , helpers  ) =>
      {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep(s => s + 1);
        }
       
      }}
    
    >
            
      <Form autoComplet="off"  >
        {currentChild}
        
        {step > 0 ? <Button onClick={() => setStep(s => s - 1)} > Back</Button> : null} 
        <Button type="submit" >{isLastStep() ? 'Submit' : 'Next ' } </Button>  

      </Form>
    </Formik> 
  )
}