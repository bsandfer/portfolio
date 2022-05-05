import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import headshot from "../../assets/images/parkPup.png";
import { Avatar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;
    
 

const About = () => {
  return (
    <>
      <Box marginTop={3}>
          <Grid  sx={{mx: "auto"}}  justifyContent="center" container padding={2} spacing={2}>
            
            <Grid item md={4}>
              <SizedAvatar
                alt="photo of me"
                size="300"
                src={headshot}
                // sx={{ width: 1, height: 1 }}
              ></SizedAvatar>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={3}>
              <Typography variant='h4'>Brendan Sandfer</Typography>
              <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
              </Typography>
            </Grid>

          </Grid>
      </Box>
    </>
  );
};

export default About;
