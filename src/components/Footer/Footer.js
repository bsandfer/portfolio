import { Grid, Paper } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import { Tooltip } from "@mui/material";
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <>
      <Paper>
        <Grid
          position="fixed"
          left="0"
          right="0"
          bottom="0"
          container
          justifyContent="center"
          spacing={1}
          padding={1.2}
          bgcolor="#a6a69b"
        >
          <Grid item>
            
          </Grid>
          <Grid item>
            <Tooltip title="send me an Email">
            <a href="mailto:bsandfer@gmail.com"> 
            <Typography>bsandfer@gmail.com</Typography>
            </a> 
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Footer;
