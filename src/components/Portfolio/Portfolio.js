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
      technologies: "Utilizing HTML, CSS, Javascript, jQuery and Server side APIs. This amiibo locator application is devoted to helping gamers find all the information they want about amiibos from a select list of various games.",
    },
    {
      title: "Weather Dashboard",
      letter: <ThermostatIcon/>,
      github: "https://github.com/bsandfer/weather-dashboard",
      heroku: "https://bsandfer.github.io/weather-dashboard/",
      description: "A Weather Dashboard applicaton.",
      image:
        "https://github.com/bsandfer/weather-dashboard/blob/main/assets/WeatherDashboardScreenshot.png?raw=true",
      technologies: "Utilizing HTML, CSS, Javascript, and APIs This Weather app gives users the latest weather data according to their specified location along with a 5 day forecast. "
    },
    {
      title: "Hospital Management System",
      letter: <LocalPharmacyIcon/>,
      github: "https://github.com/NGGKI/GHW--Hospital-Management-System",
      heroku: "https://hosp-man-sys.herokuapp.com/",
      description: "An application that helps manage the information related to health care and aids in the job completion of health care providers effectively. ",
      image:
        "https://github.com/NGGKI/GHW--Hospital-Management-System/blob/main/assets/login.png?raw=true",
      technologies: "Utilizing HTML, CSS, Javascript, MySQL, Sequelize ORM, Node.js, Express.js and RESTful API.   This HMS is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively. Admins/staff/doctors of small health clinics can use this application to easily access information about all employees, patients, and their appointments, as well as update/delete info."
    },
    {
      title: "Note Taker",
      letter: <SpeakerNotesIcon/>,
      github: "https://github.com/bsandfer/note-taker",
      heroku: "https://note-taker-bsandfer.herokuapp.com/",
      description: "An Application for writing, saving and deleting notes.",
      image:
        "https://github.com/bsandfer/note-taker/blob/main/assets/NoteTakerScreenshot.png?raw=true",
      technologies: "An Application for writing, saving and deleting notes. Express is used to save and retrieve note data from a JSON file."
    },
    {
      title: "README Generator",
      letter: <MenuBookIcon/>,
      github: "https://github.com/bsandfer/readme-generator",
      heroku: "https://github.com/bsandfer/readme-generator",
      description: "This is a command line application for generating README.md files.",
      image:
        "https://github.com/bsandfer/readme-generator/blob/main/READMEmdScreenshot.png?raw=true",
      technologies: "This is a Node.js application that utilizes the Inquirer package for generating README.md files. Answer a series of questions and the application will format then generate a newREADME.md file in the project directory from the command line interface."
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
                  technologies={project.technologies}
                ></Card>
              </div>
            ))}
          </Masonry>
      </Box>
    </>
  );
};

export default Portfolio;
