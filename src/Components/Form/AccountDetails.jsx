import React from 'react'
import ThemeProvider from "@emotion/styled";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {
  Grid,
  TextField,
  FormHelperText
} from "@mui/material";


const  AccountDetails = (props) =>
{
const { formik } = props;
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <TextField
          id = "email"
          name="email"
          label="email"
          variant="outlined"
          type="email"
          fullWidth
          size="small"
          error={Boolean(formik.touched.email && formik.errors.email)}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}


        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          size='small'
          type="password"
          fullWidth
          error={Boolean(formik.touched.password && formik.errors.password)}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          size="small"
          type="password"
          fullWidth
          error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </Grid>
      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  )
}

export default AccountDetails