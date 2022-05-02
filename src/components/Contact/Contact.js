import React from 'react'
import { FormControl, FormHelperText, Grid, Input, InputLabel } from '@mui/material'

const Contact = () => {
  return (
    <>
    <Grid container justifyContent="center">
      <Grid item>
        <h1>Contact</h1>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
        <Grid item xs={11} md={9} lg={8}>
        <FormControl fullWidth>
          <InputLabel variant="outlined" htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">your secrets are safe with me. || send me an email.</FormHelperText>
        </FormControl>
        </Grid>
    </Grid>
    </>
  )
}

export default Contact