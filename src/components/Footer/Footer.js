import { Grid, IconButton, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import { Tooltip } from "@mui/material";

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
            <Tooltip title="Github">
            <IconButton
              href="https://github.com/bsandfer"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
            </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
            </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="send me an Email">
            <IconButton
              href="mailto:bsandfer@gmail.com"
            >
              <EmailIcon fontSize="large" color="primary"></EmailIcon>
            </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Footer;
