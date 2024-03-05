import React, { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, MenuItem, Drawer } from '@mui/material';
import { LogoDev, MenuOpen, Menu } from '@mui/icons-material';
import Navigation from '../../Navigation';
import { Link } from 'react-router-dom';
import Colors from '../../assets/style';

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: "20px", justifyContent: "space-between", }}>
          <Box
            sx={{ display: "flex" }}
          >
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/home"
              sx={{
                mr: 2,
                display: 'flex',
                justifyContent: "space-between",
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: "center"
              }}
            >
              Sajid.<LogoDev sx={{ display: 'flex', mr: 1 }} />
            </Typography>
          </Box>

          <Box sx={{ flexGrow: { md: 1, sm: 0, xs: 0 }, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <Menu />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor='right'
              sx={{
                display: { xs: 'block', md: 'none' },
                width: "200px",
              }}
              PaperProps={{
                sx: {
                  background: Colors.secondary,
                  color: Colors.primary
                }
              }}
            >
              <MenuItem>
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/home"
                  sx={{
                    mr: 2,
                    display: 'flex',
                    justifyContent: "space-between",
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    alignItems: "center"
                  }}
                >
                  Sajid.<LogoDev sx={{ display: 'flex', mr: 1 }} />
                </Typography>
                <IconButton onClick={toggleDrawer(false)}>
                  <MenuOpen />
                </IconButton>
              </MenuItem>
              {Navigation.map((page, ind) => (
                <MenuItem key={ind}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", gap: "20px" }}>
            {Navigation.map((page, ind) => (
              <Button
                component={Link}
                to={page.path}
                key={ind}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant='body2' sx={{
                  transition: "0.3s all ease-in-out",
                  borderRight: `4px solid  transparent`,
                  px: 1,
                  ":hover": {
                    borderRight: `4px solid ${Colors.white}`,
                  }

                }}>
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;