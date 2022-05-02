import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card";

const Portfolio = () => {
  let projects = [
    {
      title: "example1",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example2",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example3",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example4",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example5",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "example6",
      github: "https://github.com/",
      heroku: "https://dashboard.heroku.com/",
      description: "bleep bloop",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    }
  ];

  return (
    <>

      <Grid container justifyContent="center">
          <h1>My Portfolio</h1>
      </Grid>

      <Grid container spacing={4} padding={2} justifyContent="center">

          {projects.map(project =>
                <Grid item>
                    <Card title={project.title} github={project.github} heroku={project.heroku} image={project.image}></Card>
                </Grid>
            )}

      </Grid>

    </>
  );
};

export default Portfolio;
