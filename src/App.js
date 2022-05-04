import Navbar from "./components/Navbar"
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
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
      default: '#EDEBD7',
      paper: '#fafafa',
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
  }
})



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </>

    
  );
}


export default App;
