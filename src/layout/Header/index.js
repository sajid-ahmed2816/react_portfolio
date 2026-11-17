import { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, MenuItem, Drawer, List, Grid } from '@mui/material';
import { Menu, Download, Close } from '@mui/icons-material';
import Navigation from '../../Navigation';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Colors from '../../assets/style';
import { SecondaryButton } from '../../Components/Buttons';

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Container maxWidth={"xl"}>
      <AppBar
        position="fixed"
        style={{
          top: 14,
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item md={10} xs={12}>
            <Toolbar sx={{
              px: { md: 2.25, xs: 2.25 },
              minHeight: { md: "70px", xs: "70px" },
              gap: "20px",
              justifyContent: "space-between",
              background: Colors.black + 40,
              borderRadius: "16px",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
            }}
            >
              <Box sx={{ display: "flex" }}>
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
                    letterSpacing: '.05rem',
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
                  anchor='top'
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                  PaperProps={{
                    sx: {
                      background: "#001025b0",
                      color: Colors.white,
                      backdropFilter: "blur(8px)"
                    }
                  }}
                >
                  <List>
                    <MenuItem sx={{ justifyContent: "space-between" }}>
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
                          letterSpacing: '.05rem',
                          color: Colors.white,
                          textDecoration: 'none',
                          alignItems: "center",
                        }}
                      >
                        Sajid.
                      </Typography>
                      <IconButton onClick={toggleDrawer(false)}>
                        <Close sx={{ color: Colors.white, transform: "scaleX(-1)" }} />
                      </IconButton>
                    </MenuItem>
                    {Navigation.map((page, ind) => (
                      <MenuItem
                        key={ind}
                        sx={{
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
                    <MenuItem>
                      <a
                        href="download/resume.pdf"
                        download
                        style={{
                          color: Colors.white,
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 3
                        }}
                      >
                        Download CV
                        <Download />
                      </a>
                    </MenuItem>
                  </List>
                </Drawer>
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "flex-end", gap: "20px" }}>
                {Navigation.map((page, ind) => (
                  <Button
                    component={Link}
                    to={page.path}
                    key={ind}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      borderRadius: "32px",
                      transition: "all 0.3s ease-in-out",
                      textTransform: "capitalize",
                      ":hover": {
                        background: "transparent",
                        "& .button-text": {
                          color: Colors.primary2,
                          "::before": {
                            width: "100%",
                            height: "4px",
                            background: Colors.primary2
                          },
                        },
                      },
                    }}
                  >
                    <Typography
                      variant='body2'
                      className='button-text'
                      sx={{
                        color: pathname === page.path ? Colors.primary2 : Colors.white,
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        px: 1,
                        "::before": {
                          content: "''",
                          display: "block",
                          background: pathname === page.path ? Colors.primary2 : "transparent",
                          width: pathname === page.path ? "100%" : 0,
                          height: "4px",
                          position: "absolute",
                          bottom: -8,
                          left: 0,
                          zIndex: -1,
                          transition: "all 0.3s ease-in-out",
                          borderRadius: "32px"
                        }
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <a
                  href="download/resume.pdf"
                  download
                >
                  <SecondaryButton
                    endIcon={<Download />}
                    title={"Download CV"}
                    sx={{
                      borderRadius: "4px",
                      textTransform: "capitalize",
                    }}
                  />
                </a>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Container >
  );
}
export default Header;