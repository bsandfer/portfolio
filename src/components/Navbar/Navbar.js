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
  const handleOpenContact = () => {
    setPageState({...pageState, about: false, portfolio: false, contact: true})
  }


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
  const handleCloseNavMenu3 = () => {
    setAnchorElNav(null);
    handleOpenContact()
  };
  const handleCloseNavMenu4 = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  

  return (
    <AppBar padding="0" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Brendan Sandfer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              <MenuItem onClick={handleCloseNavMenu3}>
                <Typography>Contact</Typography>
              </MenuItem>
              <a href={Resume} target="_blank" rel="noreferrer" style={{ color: 'black', textDecoration: 'underline #E3B23C' }}>
              <MenuItem onClick={handleCloseNavMenu4}>
                <Typography >Resume</Typography>
              </MenuItem>
              </a>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Brendan Sandfer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleOpenAbout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={handleOpenPortfolio}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={handleOpenContact}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact
            </Button>
            <a href={Resume} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline #E3B23C' }}>
              <Button
                onClick={handleOpenNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Resume
              </Button>
            </a>
          </Box>
{/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
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
              ))} */}
            {/* </Menu> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;