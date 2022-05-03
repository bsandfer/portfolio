import {useState} from 'react'
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, OutlinedInput, TextField } from '@mui/material'


const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  return (
    <>

    <Grid container justifyContent="center">
      <Grid item>
        <h1>Contact</h1>
      </Grid>
    </Grid>

    <Grid container justifyContent="center" spacing={3} padding={3}>

        <Grid item xs={11} md={9} lg={8}>
        <FormControl fullWidth>
        <TextField
          required
          id="outlined-input"
          label="Name"
          type="text"
          name='name'
          onChange={handleInputChange}
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
          name='email'
          onChange={handleInputChange}
          autoComplete="email"
          helperText="i won't share your email!"
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
          name='message'
          onChange={handleInputChange}
          multiline
          rows={3}
          autoComplete="off"
        />
        </FormControl>
        </Grid>

        <Grid container justifyContent="center" spacing={3} padding={3}>
          <Grid item xs={11} md={9} lg={8}>
            <Button variant="contained">Send</Button>
          </Grid>
        </Grid>

    </Grid>

    </>
  )
}

export default Contact