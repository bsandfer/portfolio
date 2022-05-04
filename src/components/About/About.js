import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import headshot from "../../assets/images/parkPup.png";
import { Avatar, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Grid justifyContent="center" container padding={2} spacing={2}>
        
        <Grid item xs={12} md={4}>
          <Avatar
            alt="photo of me"
            src={headshot}
            sx={{ width: 1, height: 1 }}
          ></Avatar>
        </Grid>

        <Grid item md={1}></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant='h4'>Brendan Sandfer</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. 
          </Typography>
        </Grid>

      </Grid>
    </>
  );
};

export default About;
