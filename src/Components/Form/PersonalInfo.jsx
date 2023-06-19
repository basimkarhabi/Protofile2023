import React from 'react'
import {
  TextField,
  Grid
} from '@mui/material';

function PersonalInfo(props) {
  const { formik } = props;
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={6}
      >
        <TextField
          id= "firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          type="text"
          size='small'
          fullWidth
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastNamel)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="phone"
          label="Phone Number"
          variant="outlined"
          type="number"
          fullWidth
          size="small"
         onBlur={formik.handleBlur}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="residence"
          label="Residence"
          variant="outlined"
          type="text"
          size="small"
          fullWidth
          onBlur={formik.handleBlur}
          value={formik.values.residence}
          onChange={formik.handleChange}
          error={formik.touched.residence && Boolean(formik.errors.residence)}
          helperText={formik.touched.residence && formik.errors.residence}
        />
      </Grid>
    </Grid>
  )
}

export default PersonalInfo