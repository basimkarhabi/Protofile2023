import React,{useState } from 'react'
import { Card, CardContent,Box ,Checkbox , Button , StepLabel ,Step , Stepper,Grid , CircularProgress} from '@mui/material'
import { Field, Form, Formik,FormikConfig, FormikValues  } from 'formik'
import {CheckboxWithLabel, TextField } from 'formik-material-ui' 
import CustomInput from '../Form2/CustomInput.jsx'
import {BasicSchema } from '../../Schemas/Schemas.jsx'
import CustomCheclbox from '../Form2/CustomCheclbox.jsx'
import { Pick } from 'typescript'


const sleep = (time)=> new Promise((acc)=>setTimeout(acc , time))

const onSubmit = async (values) =>
{
  await sleep (3000)
        console.log( 'values',values);

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
    
              
          <FormikStep
            label="Pernoal Info"
            validationSchema={BasicSchema}>       
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
          <FormikStep
                        label="Car Info"
            validationSchema={BasicSchema}>
                <Box paddingBottom={2}>
                  
                 <CustomInput paddingBottom={2}
                     label="All The money I have"
                    name="money"
                    type="number"
                  placeholder="Enter money " 
                  component={TextField}
                /> 
     
                </Box>                  
            </FormikStep  >
              
          <FormikStep
            label="Payment Info"
            validationSchema={BasicSchema}>
                <Box paddingBottom={2}>
                  <Field  type="text" name="description" placeholder= "description" component={TextField} label="Description " />
                </Box>
              </FormikStep>
                                   
              </FormikStepper>   
          </CardContent>
    </Card>

  )

}

export default FormMain

export interface FormikStepProps extends Pick <FormikConfig<FormikValues> , 'childern' | 'validationSchema'>
{
  label : string
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
  const [completed, setCompleted] = useState(false)
  
  // console.log('currentChild111' , currentChild.props.validationSchema)
  function isLastStep()
  {
    return step === childrenArray.length - 1
  }

  return (

    <Formik  {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={ async(values , helpers  ) =>
      {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true)
          helpers.resetForm()
          // setStep(0)
        } else {
          setStep(s => s + 1);
        }
       
      }}
    
    >
      {({ isSubmitting }) => (
        
         
      <Form autoComplet="off"  >
         <Stepper alternativeLabel activeStep={step}>
          {childrenArray.map((child,index) => (
            <Step key={child.props.label} completed={step > index || completed}        >
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
      </Stepper>




        {currentChild}
        
          <Grid container spacing= {3}>
            {step > 0 ? (
              <Grid item>
                <Button disabled={isSubmitting} color="primary" variant="contained" onClick={() => setStep(s => s - 1)} > Back
                </Button>
             </Grid>
            )   : null} 

            <Grid item >
              <Button
                startIcon= {  isSubmitting ? <CircularProgress color="secondary"  size= "1rem"/> : null}
                disabled={isSubmitting} color="primary" variant="contained" type="submit" >{isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next '} </Button>
             </Grid>
           </Grid>
        </Form>    
         )}  
    </Formik> 
  )
}