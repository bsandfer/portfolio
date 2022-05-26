import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";
import ToysIcon from '@mui/icons-material/Toys';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Masonry from 'react-masonry-css'



const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Portfolio = () => {
  let projects = [
    {
      title: "Amiibo Locator",
      letter: <ToysIcon/>,
      github: "https://github.com/bsandfer/amiibo-locator",
      heroku: "https://bsandfer.github.io/amiibo-locator/",
      description: "This application is for gamers to find amiibos from a list of games.",
      image:
        "https://raw.githubusercontent.com/bsandfer/amiibo-locator/main/images/wireFrame.png",
    },
    {
      title: "Weather Dashboard",
      letter: <ThermostatIcon/>,
      github: "https://github.com/bsandfer/weather-dashboard",
      heroku: "https://bsandfer.github.io/weather-dashboard/",
      description: "A Weather Dashboard applicaton.",
      image:
        "https://github.com/bsandfer/weather-dashboard/blob/main/assets/WeatherDashboardScreenshot.png?raw=true",
    },
    {
      title: "Hospital Management System",
      letter: <LocalPharmacyIcon/>,
      github: "https://github.com/NGGKI/GHW--Hospital-Management-System",
      heroku: "https://hosp-man-sys.herokuapp.com/",
      description: "An application that helps manage the information related to health care and aids in the job completion of health care providers effectively. ",
      image:
        "https://github.com/NGGKI/GHW--Hospital-Management-System/blob/main/assets/login.png?raw=true",
    },
    {
      title: "Note Taker",
      letter: <SpeakerNotesIcon/>,
      github: "https://github.com/bsandfer/note-taker",
      heroku: "https://note-taker-bsandfer.herokuapp.com/",
      description: "An Application for writing, saving and deleting notes.",
      image:
        "https://github.com/bsandfer/note-taker/blob/main/assets/NoteTakerScreenshot.png?raw=true",
    },
    {
      title: "README Generator",
      letter: <MenuBookIcon/>,
      github: "https://github.com/bsandfer/readme-generator",
      heroku: "https://github.com/bsandfer/readme-generator",
      description: "This is a command line application for generating README.md files.",
      image:
        "https://github.com/bsandfer/readme-generator/blob/main/READMEmdScreenshot.png?raw=true",
    },
  ];

  
  

  return (
    <>
      <Box margin={3} paddingBottom={6} marginLeft={6} marginRight={6}>
          <Grid container justifyContent="center">
            <Typography variant="h3">Portfolio</Typography>
          </Grid>

          <br></br>

          <Masonry 
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {projects.map((project) => (
              <div>
                <Card
                  title={project.title}
                  letter={project.letter}
                  github={project.github}
                  heroku={project.heroku}
                  image={project.image}
                  description={project.description}
                ></Card>
              </div>
            ))}
          </Masonry>
      </Box>
    </>
  );
};

export default Portfolio;
