import { Grid, IconButton, Paper } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'


const Footer = () => {
  return (
    <>
      
      <Paper>
        <Grid position="absolute" left="0" right="0" bottom="0" container justifyContent="center" spacing={1} padding={1.2}>
            <Grid item>
               
                  <IconButton href='https://github.com/bsandfer' target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize='large' color="primary"></GitHubIcon>
                  </IconButton>
                
            </Grid>
            <Grid item>
                
                  <IconButton href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize='large' color="primary"></LinkedInIcon>
                  </IconButton>
               
            </Grid>
        </Grid>
      </Paper>
      
    </>
  )
}

export default Footer