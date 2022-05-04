import { Grid } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import React from 'react'

const Footer = () => {
  return (
    <>
        <Grid container justifyContent="center" spacing={2} padding={2}>
            <Grid item>
                <GitHubIcon></GitHubIcon>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer