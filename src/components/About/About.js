// import Paper from "@mui/material/Paper";
// import headshot from "../../assets/images/parkPup.png";
// import { Avatar } from "@mui/material";
// import styled from "@emotion/styled";
// import Resume from "../../assets/other/resume.pdf"
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import { Tooltip } from "@mui/material";
import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {  Typography } from "@mui/material";
import TypeAnimation from "react-type-animation"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";



// const SizedAvatar = styled(Avatar)`
//   ${({ size, theme }) => `
//     width: ${theme.spacing(size)}px; 
//     height: ${theme.spacing(size)}px; 
//   `};
// `;


function MyRotatingBox() {
  const myMesh = React.useRef()
  
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.x = a;
  });
  return (
    <>
      <mesh ref={myMesh} scale={1.5}>
        <boxBufferGeometry />
        <meshPhongMaterial color="#E3B23C" />
      </mesh>
    </>
  );
}



const About = () => {
  return (
    <>
      <Box margin={3}>
        <Grid
          // sx={{ mx: "auto" }}
          justifyContent="center"
          container
          // padding={2}
          // spacing={2}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Brendan Sandfer</Typography>
            <br></br>
            <Typography paragraph>
              <div style={{width: '7em', height: '1.5em'}}>
            <TypeAnimation
            cursor={true}
            sequence={['', 1000, '"Hello, world."', 1000]}
            wrapper="p"
            repeat={1}
            />
            </div>
            My name is Brendan Sandfer, and I design and develop software solutions. I am a full-stack web developer and I aim to stay on the cutting edge by continually learning new technologies and growing as a developer and software engineer. I bring passion and dedication to all my projects, with empathy for users, and curiosity for the ever-evolving business. I am experienced working in fast-paced team-oriented environments, and enthusiastic to take on new problems and push the next-generation of technology forward.
            </Typography>
          </Grid>
        </Grid>
       <Grid container justifyContent="center">
         <Grid item xs={12} md={4}>
            <p align="left"><a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/></a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/></a> <a href="https://bulma.io/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="bulma" width="40" height="40"/></a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/></a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/></a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/></a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/></a> <a href="https://materializecss.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="40" height="40"/></a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/></a> <a href="https://www.python.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/></a> <a href="https://developer.apple.com/swift/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" alt="swift" width="40" height="40"/></a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>
         </Grid>
       </Grid>
        <Canvas>
          <Suspense fallback={null}>
            <MyRotatingBox/>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <OrbitControls />
            
          </Suspense>
        </Canvas>     
      </Box>

    </>
  );
};

export default About;
