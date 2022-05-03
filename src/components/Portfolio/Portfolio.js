import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card";

const Portfolio = () => {
  let projects = [
    {
      title: "example1",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep one",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example2",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep two",
      image:
        "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "example3",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep three",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "example4",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep four",
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    },
    {
      title: "example5",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep five",
      image:
        "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "example6",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep six",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Portfolio</h1>
      </Grid>

      <Grid container spacing={4} padding={2} justifyContent="center">
        {projects.map((project) => (
          <Grid item>
            <Card
              title={project.title}
              github={project.github}
              heroku={project.heroku}
              image={project.image}
              description={project.description}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Portfolio;
