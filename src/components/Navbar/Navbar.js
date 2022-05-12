import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Resume from "../../assets/other/resume.pdf"
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
 


// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({pageState, setPageState}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenAbout = () => {
    setPageState({...pageState, about: true, portfolio: false, contact: false})
  }
  const handleOpenPortfolio = () => {
    setPageState({...pageState, about: false, portfolio: true, contact: false})
  }
  // const handleOpenContact = () => {
  //   setPageState({...pageState, about: false, portfolio: false, contact: true})
  // }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenu1 = () => {
    setAnchorElNav(null);
    handleOpenAbout()
  };
  const handleCloseNavMenu2 = () => {
    setAnchorElNav(null);
    handleOpenPortfolio()
  };
  // const handleCloseNavMenu3 = () => {
  //   setAnchorElNav(null);
  //   handleOpenContact()
  // };
  // const handleCloseNavMenu4 = () => {
  //   setAnchorElNav(null);
  //   alert('Thank you for your consideration! Have a nice day 🙂')
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  

  return (
    <AppBar padding="0" position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Brendan Sandfer
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu1}>
                <Typography >About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu2}>
                <Typography>Portfolio</Typography>
              </MenuItem>
              {/* <a href="mailto:bsandfer@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                >Contact</Typography>
              </MenuItem>
              </a>
              <a href={Resume} target="_blank" rel="noreferrer" style={{ color: 'black', textDecoration: 'underline #E3B23C' }}>
              <MenuItem onClick={handleCloseNavMenu4}>
                <Typography >Resume</Typography>
              </MenuItem>
              </a> */}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Brendan Sandfer
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              size="small"
              onClick={handleOpenAbout}
              sx={{ my: 2, color: "primary", display: "block" }}
            >
              About
            </Button>
            <Button
              size="small"
              onClick={handleOpenPortfolio}
              sx={{ my: 2, color: "primary", display: "block" }}
            >
              Portfolio
            </Button>
            {/* <Button
              size="small"
              href="mailto:bsandfer@gmail.com"
              sx={{ my: 2, color: "primary", display: "block" }}
            >
              Contact
            </Button>
            <a href={Resume} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline #E3B23C' }}>
              <Button
                size="small"
                onClick={() => {
                  alert('Thank you for your consideration! Have a nice day 🙂')}}
                sx={{ my: 2, color: "primary", display: "block" }}
              >
                Resume
              </Button>
            </a> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Github">
            <IconButton
              href="https://github.com/bsandfer"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
            </IconButton>
            </Tooltip>
          
            <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/bsandfer/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
            </IconButton>
            </Tooltip>
          
            <Tooltip title="send me an Email">
            <IconButton
              href="mailto:bsandfer@gmail.com"
            >
              <EmailIcon fontSize="large" color="primary"></EmailIcon>
            </IconButton>
            </Tooltip>
            
            <Tooltip title="view my resume">
            <IconButton
            onClick={() => {
              alert('Thank you for your consideration! Have a nice day 🙂')
            }}
            href={ Resume }
            target="_blank"
            rel="noreferrer"
            >
              <DownloadForOfflineIcon
              fontSize="large"
              color="primary"
              paddingTop="2"
              />
            </IconButton>
            
            </Tooltip>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} 
             </Menu>  */}
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
