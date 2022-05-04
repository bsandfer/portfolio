import { Grid, IconButton } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import React from 'react'
import { teal } from '@mui/material/colors';

const Footer = () => {
  return (
    <>
        <Grid container justifyContent="center" spacing={2} padding={2} sx={{ bgcolor: teal['400']}}>
            <Grid item>
                {/* <IconButton aria-label="add to favorites">
                  <a href={github} target="_blank" rel="noreferrer">
                    <GitHubIcon sx={{ color: 'white'}}></GitHubIcon>
                  </a>
                 
                </IconButton> */}
                <GitHubIcon></GitHubIcon>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer