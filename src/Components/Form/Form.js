import React, { useState} from 'react'
import AccountDetails from './AccountDetails.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import ReviewInfo from './ReviewInfo.jsx'
import {BasicSchema} from '../../Schemas/Schemas.jsx'
import { useFormik } from 'formik';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';


const steps = ['Personal Info', ' Account Details', 'Review and Submit'];


function Form()
{

    const [activeStep, setActiveStep] = useState(0);


const onSubmit = () =>
{
          if (activeStep === steps.length - 1) {
         console.log('last step');
       }
     else {
         setActiveStep((prevStep) => prevStep + 1);
   }
}


    const handleBack = () =>
    {
        setActiveStep((prevStep) => prevStep  - 1);
    };

const handleNext = () =>
    {
        setActiveStep((prevStep) => prevStep + 1);
    };


    

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            residence: ''
        },
        validationSchema: BasicSchema,
        onSubmit,
        handleBack,
        handleNext
  
    });

    const formContent = (step) =>
    {
        switch(step) {
            case 0:
        return <   PersonalInfo   formik={formik} />;
      case 1:
        return <AccountDetails formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>
        } 
    }
console.log('activeStep', activeStep)
        console.log(steps)

    
 
    return (
    <Box
    sx={{
        maxWidth: '600px',
        padding: 2}}
        
        >
            <Stepper
                activeStep={activeStep}
                orientation="horizontal"
            >
            {steps.map((label, index) => (
            <Step key={index}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}  
            </Stepper>
                <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{ padding: '20px' }}
                >
                    {formContent(activeStep )}
                </Grid>

                {formik.errors.submit && (
                    <Grid
                        item
                        xs={12}
                    >
                        <FormHelperText error>
                        {}
                        </FormHelperText>
                    </Grid>
                )}
                
            <Grid
                item
                xs={12}
                >
                    <Button
                    disabled={activeStep === 0}
                        onClick={handleBack}
                > 
                 Back 
                    </Button>   
                    {activeStep === steps.length - 1 ? <Button type= "submit" onClick={onSubmit} >  Submit137 </Button> : <Button  onClick={onSubmit}> Next  </Button>}
                    
             </Grid>
      </Grid>
    </Box>
        
)


    
}

export default Form