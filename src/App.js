import Navbar from "./components/Navbar"
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
