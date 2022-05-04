import {useState} from 'react'
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { teal } from '@mui/material/colors'


const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameNeeded: false,
    messageNeeded: false,
    invalidEmail: false
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleNameBlur = () => {
    if(formState.name==='') {
      setFormState({...formState, nameNeeded: true,invalidEmail:false, messageNeeded: false})
    }
  }
  
  const handleMessageBlur = () => {
    if(formState.message==='') {
      setFormState({...formState, messageNeeded: true,invalidEmail:false, nameNeeded: false})
    }
  }

  const validateEmail = (inputText) => {
    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(inputText.match(mailFormat))
        {
          return true
        }
          else {
            return false
          }
  }

  const handleEmailBlur = () => {
    if(validateEmail(formState.email)){
      console.log("valid")
    } else {
      setFormState({...formState, invalidEmail:true, nameNeeded:false, messageNeeded:false})
    }
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
          autoComplete="name"
          onChange={handleInputChange}
          onBlur={handleNameBlur}
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
          autoComplete="email"
          helperText="i won't share your email!"
          onChange={handleInputChange}
          onBlur={handleEmailBlur}
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
          multiline
          rows={3}
          autoComplete="off"
          onChange={handleInputChange}
          onBlur={handleMessageBlur}
        />
        </FormControl>
        </Grid>

        <Grid container justifyContent="center" spacing={3} padding={3}>
          <Grid item xs={11} md={9} lg={8}>
            <Button sx={{ bgcolor: teal['400'] }} variant="contained">Send</Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={3} padding={3}>
          {
            formState.nameNeeded? <p>name required!</p> : ''
          } 
          {
            formState.messageNeeded? <p>message required!</p> : ''
          } 
          {
            formState.invalidEmail? <p>invalid email!</p> : ''
          } 
        </Grid>

    </Grid>

    </>
  )
}

export default Contact