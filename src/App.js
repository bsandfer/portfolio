import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar"
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";



const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#423E37',
    },
    secondary: {
      main: '#E3B23C',
      light: '#f5bd6b',
    },
    background: {
      default: '#cecdbe',
      paper: '#e0ddd0',
    },
    textPrimary: {
      default: 'black',
    },
    textSecondary: {
      default: 'white',
    },
    error: {
      main: '#c3474c',
    },
    info: {
      main: '#ba68c8',
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function MyRotatingBox() {
  const myMesh = React.useRef()
  
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.x = a;
  });
  return (
    <>
      <mesh ref={myMesh} scale={3}>
        <boxBufferGeometry />
        <meshPhongMaterial color="#E3B23C" />
      </mesh>
    </>
  );
}



function App() {
  const [pageState, setPageState] = useState({
    about: true,
    work: false,
    contact: false
  })



  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar pageState={pageState} setPageState={setPageState} />
        {pageState.about? <About/>: ''}
        {pageState.portfolio? <Portfolio/>: ''}
        {/* {pageState.contact? <Contact/>: ''} */}
        {/* <Footer/> */}
        <Canvas>
          <Suspense fallback={null}>
            <MyRotatingBox/>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <OrbitControls />
            
          </Suspense>
        </Canvas>
      </ThemeProvider>
    </>

    
  );
}


export default App;
