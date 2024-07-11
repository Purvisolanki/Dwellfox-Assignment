import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid,IconButton, Drawer, List, ListItem, ListItemText, Box, Link as MUILink, Hidden, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/discover">
          <ListItemText primary="Discover" />
        </ListItem>
        <ListItem button component={Link} to="/special-deals">
          <ListItemText primary="Special Deals" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginRight: 'auto', marginLeft: '5%', fontWeight: 700 }}>
            Travlog
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <nav>
              <MUILink component={Link} to="/" sx={{ marginRight: '50px', textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                Home
              </MUILink>
              <MUILink component={Link} to="/discover" sx={{ marginRight: '50px', textDecoration: 'none', color: 'inherit' }}>
                Discover
              </MUILink>
              <MUILink component={Link} to="/special-deals" sx={{ marginRight: '50px', textDecoration: 'none', color: 'inherit' }}>
                Special Deals
              </MUILink>
              <MUILink component={Link} to="/contact" sx={{ marginRight: '50px', textDecoration: 'none', color: 'inherit' }}>
                Contact
              </MUILink>
            </nav>
          </Box>



          <Button component={Link} to="/login" color="inherit" sx={{ marginLeft: 'auto', marginRight: '20px' }}>
            Log In
          </Button>
          <Button component={Link} to="/register" variant="contained" sx={{ marginRight: '20px', background: "#5D50C6", borderRadius: "20px" }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </Drawer>
  

      <Grid container justifyContent="center" sx={{ marginTop: '50px' }}>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', marginTop: isMobile ? '20%' : '11%' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, marginBottom: '20px' }}>
            Travel <span style={{ color: '#FF4081' }}>top destination</span> of the world
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: '30px' }}>
            We always make our customers happy by providing as many choices as possible
          </Typography>
          <Box>
            <Button variant="contained" component={Link} to="/get-started" sx={{ marginRight: '20px', background: "#5D50C6", borderRadius: "20px" }}>
              Get Started
            </Button>
            <Button variant="outlined" component={Link} to="/watch-demo">
              Watch Demo
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', position: 'relative' }}>
          <img src='assets/bg.png' alt='Background' style={{ position: 'absolute', width: '100%', height: 'auto', zIndex: -1 }} />
          <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1, marginLeft: "10%", marginTop: "8%" }}>
            <Grid item xs={6}>
              <img src='assets/photo1.png' alt='Travel 1' />
            </Grid>
            <Grid item xs={6} sx={{ width: '272px', height: '300px' }}>
              <img src='assets/photo.png' alt='Travel 2' className='mt-28 w-52 ' />
            </Grid>
            <Grid item xs={12} sx={{ width: '272px', height: '300px' }}>
              <img src='assets/photo2.png' alt='Travel 3' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ marginTop: '50px' }}>
      <Grid item xs={12} md={10}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <Box sx={{ flexBasis: { xs: '45%', sm: '30%', md: '22%' }, margin: '10px 0' }}>
            <img src='assets/tripadvisor.png' alt='Tripadvisor' style={{ width: '100%' }} />
          </Box>
          <Box sx={{ flexBasis: { xs: '45%', sm: '30%', md: '22%' }, margin: '10px 0' }}>
            <img src='assets/expedia.png' alt='Expedia' style={{ width: '100%' }} />
          </Box>
          <Box sx={{ flexBasis: { xs: '45%', sm: '30%', md: '22%' }, margin: '10px 0' }}>
            <img src='assets/booking.png' alt='Booking.com' style={{ width: '100%' }} />
          </Box>
          <Box sx={{ flexBasis: { xs: '45%', sm: '30%', md: '22%' }, margin: '10px 0' }}>
            <img src='assets/airbnb.png' alt='Airbnb' style={{ width: '100%' }} />
          </Box>
          <Box sx={{ flexBasis: { xs: '45%', sm: '30%', md: '22%' }, margin: '10px 0' }}>
            <img src='assets/orbitz.png' alt='Orbitz' style={{ width: '100%' }} />
          </Box>
        </Box>
      </Grid>
    </Grid>

      <footer className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Travlog</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
              in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Career</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mobile</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Why Travlog?</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Partner with us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FAQ's</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Meet Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">+00 92 1234 56789</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">info@travlog.com</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">205. R Street, New York BD23200</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="inline-flex text-sm text-center sm:text-left sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
