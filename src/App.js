import React, { useState } from "react";
import Navbar from "./components/Navbar"
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';




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






function App() {
  const [pageState, setPageState] = useState({
    about: true,
    portfolio: false,
    // contact: false
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
      </ThemeProvider>
    </>

    
  );
}


export default App;
