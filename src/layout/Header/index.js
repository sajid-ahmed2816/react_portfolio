import React, { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, MenuItem, Drawer, useScrollTrigger, Slide, List, Grid } from '@mui/material';
import { LogoDev, MenuOpen, Menu } from '@mui/icons-material';
import Navigation from '../../Navigation';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Colors from '../../assets/style';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" style={{ background: Colors.black }}>
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"center"}>
            <Grid item md={10} xs={12}>
              <Toolbar disableGutters sx={{ gap: "20px", justifyContent: "space-between", }}>
                <Box
                  sx={{ display: "flex" }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                      mr: 2,
                      display: 'flex',
                      justifyContent: "space-between",
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: Colors.white,
                      textDecoration: 'none',
                      alignItems: "center"
                    }}
                  >
                    Sajid.
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: { md: 1, sm: 0, xs: 0 }, display: { xs: 'flex', sm: 'none' } }}>
                  <IconButton
                    size="large"
                    onClick={toggleDrawer(true)}
                    sx={{ color: Colors.white }}
                  >
                    <Menu sx={{ color: Colors.white }} />
                  </IconButton>
                  <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    anchor='right'
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                    PaperProps={{
                      sx: {
                        background: Colors.black,
                        color: Colors.white
                      }
                    }}
                  >
                    <List>
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
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: Colors.white,
                            textDecoration: 'none',
                            alignItems: "center",
                          }}
                        >
                          Sajid.
                        </Typography>
                        <IconButton onClick={toggleDrawer(false)}>
                          <MenuOpen sx={{ color: Colors.white, transform: "scaleX(-1)" }} />
                        </IconButton>
                      </MenuItem>
                      {Navigation.map((page, ind) => (
                        <MenuItem
                          key={ind}
                          sx={{
                            justifyContent: "center",
                            ":hover": {
                              background: Colors.secondary,
                              color: Colors.primary
                            }
                          }}
                          onClick={() => { navigate(page.path); setOpen(false) }}
                        >
                          <Typography sx={{ textAlign: "center", color: Colors.white }}>{page.name}</Typography>
                        </MenuItem>
                      ))}
                    </List>
                  </Drawer>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: "flex-end", gap: "20px" }}>
                  {Navigation.map((page, ind) => (
                    <Button
                      component={Link}
                      to={page.path}
                      key={ind}
                      sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        border: pathname == page.path ? `1px solid ${Colors.primary}` : "1px solid transparent",
                        ":hover": {
                          ".button-text": {
                            borderRight: pathname == page.path ? "4px solid transparent" : `4px solid ${Colors.primary}`,
                          }
                        },
                      }}
                    >
                      <Typography variant='body2'
                        className='button-text'
                        sx={{
                          borderRight: `4px solid transparent`,
                          color: Colors.white,
                          px: 1,
                        }}>
                        {page.name}
                      </Typography>
                    </Button>
                  ))}
                </Box>

              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default Header;