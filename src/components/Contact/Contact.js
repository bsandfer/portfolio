import React from 'react'
import { FormControl, FormHelperText, Grid, Input, InputLabel, OutlinedInput, TextField } from '@mui/material'

const Contact = () => {
  return (
    <>

    <Grid container justifyContent="center">
      <Grid item>
        <h1>Contact</h1>
      </Grid>
    </Grid>

    <Grid container justifyContent="center" spacing={3}>

        <Grid item xs={11} md={9} lg={8}>
        <FormControl fullWidth>
        <TextField
          required
          id="outlined-input"
          label="Name"
          type="text"
          autoComplete="name"
        />
        </FormControl>
        </Grid>

        <Grid item xs={11} md={9} lg={8}>
        <FormControl fullWidth>
        <TextField
          required
          id="outlined-input"
          label="Email address"
          type="email"
          autoComplete="email"
          helperText="i won't share your info!"
        />
        </FormControl>
        </Grid>

        <Grid item xs={11} md={9} lg={8}>
        <FormControl fullWidth>
        <TextField
          required
          id="outlined-input"
          label="Your message:"
          type="text"
          multiline
          rows={3}
          autoComplete="off"
        />
        </FormControl>
        </Grid>

    </Grid>

    </>
  )
}

export default Contact