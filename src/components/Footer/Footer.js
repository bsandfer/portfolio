import { Grid, IconButton } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import React from 'react'

const Footer = () => {
  return (
    <>
        <Grid container justifyContent="center" spacing={2} padding={2}>
            <Grid item>
                <IconButton aria-label="add to favorites">
                  <a href='https://github.com/bsandfer' target="_blank" rel="noreferrer">
                    <GitHubIcon></GitHubIcon>
                  </a>
                </IconButton>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer