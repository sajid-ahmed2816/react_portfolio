import { Box, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email, ArrowForward } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import Colors from '../../assets/style';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box
      component="footer"
      sx={{
        background: Colors.black,
        color: Colors.white,
        borderTop: `2px solid ${Colors.primary2}`,
      }}
    >
      {/* CTA Section */}
      <Container maxWidth="xl" sx={{ py: { md: 7, xs: 5 } }}>
        <Grid container justifyContent="center">
          <Grid item md={10}>
            <Box
              sx={{
                textAlign: 'center',
                p: { md: 4, xs: 2 },
                borderRadius: '16px',
                background: `linear-gradient(135deg, #2c4949, ${Colors.secondary})`,
                border: `1px solid ${Colors.primary2}`,
                boxShadow: `0 0 12px ${Colors.primary2}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { md: 42, xs: 28 },
                  fontWeight: 700,
                  color: Colors.white,
                  mb: 2,
                }}
              >
                Have a project in mind?
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: 18, xs: 16 },
                  color: Colors.primary,
                  mb: 4,
                  maxWidth: 900,
                  mx: 'auto',
                }}
              >
                Let’s turn your idea into a live, fast, and beautiful web application.
                I’m just a message away!
              </Typography>
              <Button
                onClick={() => navigate('/contact')}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  background: `linear-gradient(45deg, ${Colors.primary2}, ${Colors.secondary})`,
                  color: Colors.white,
                  fontWeight: 700,
                  px: 5,
                  py: 1.5,
                  fontSize: 18,
                  borderRadius: '50px',
                  transition: 'all .3s ease-in-out !important',
                  ':hover': {
                    background: `linear-gradient(45deg, ${Colors.secondary}, ${Colors.primary2})`,
                  },
                }}
              >
                Start a Project
              </Button>
            </Box>

            {/* Footer Grid: Links, Social, Contact */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {/* Quick Links */}
              <Grid item md={4} sm={6} xs={12}>
                <Typography
                  sx={{ fontSize: 20, fontWeight: 600, mb: 2, color: Colors.primary2 }}
                >
                  Quick Links
                </Typography>
                {quickLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    onClick={() => navigate(link.path)}
                    sx={{
                      display: 'block',
                      color: pathname === link.path ? Colors.primary2 : Colors.white,
                      textTransform: 'none',
                      py: 0.5,
                      px: 0,
                      justifyContent: 'flex-start',
                      textAlign: "start",
                      textDecoration: pathname === link.path ? 'underline' : 'none',
                      ':hover': {
                        color: Colors.primary2,
                        background: 'transparent',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Grid>

              {/* Social + Contact Info */}
              <Grid item md={4} sm={6} xs={12}>
                <Typography
                  sx={{ fontSize: 20, fontWeight: 600, mb: 2, color: Colors.primary2, px: 1 }}
                >
                  Connect
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <IconButton
                    onClick={() => window.open('https://www.linkedin.com/in/sajid-ahmed-8a60073a7')}
                    sx={{ color: Colors.primary2, ':hover': { color: Colors.secondary } }}
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open('https://github.com/sajid-ahmed2816')}
                    sx={{ color: Colors.primary2, ':hover': { color: Colors.secondary } }}
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => window.location.href = 'mailto:sajid.ahmed2816@gmail.com'}
                    sx={{ color: Colors.primary2, ':hover': { color: Colors.secondary } }}
                  >
                    <Email fontSize="large" />
                  </IconButton>
                </Box>
                <Typography sx={{ color: Colors.white, fontSize: 15, p: 1 }}>
                  📧 sajid.ahmed2816@example.com
                </Typography>
                <Typography sx={{ color: Colors.white, fontSize: 15, p: 1 }}>
                  📱 +92 324 0258505
                </Typography>
              </Grid>

              {/* Availability / Brief Info */}
              <Grid item md={4} sm={12} xs={12}>
                <Typography
                  sx={{ fontSize: 20, fontWeight: 600, mb: 2, color: Colors.primary2 }}
                >
                  Availability
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: '#00ff00',
                      boxShadow: '0 0 8px #00ff00',
                    }}
                  />
                  <Typography sx={{ color: Colors.white }}>
                    Open for freelance & full‑time roles
                  </Typography>
                </Box>
                <Typography sx={{ color: Colors.primary2, fontSize: 14 }}>
                  Based in Pakistan · Working worldwide
                </Typography>
              </Grid>
            </Grid>

            {/* Bottom Bar */}
            <Box
              sx={{
                mt: "25px",
                pt: 2,
                borderTop: `1px solid ${Colors.primary2}`,
                textAlign: 'center',
              }}
            >
              <Typography sx={{ color: Colors.primary2, fontSize: 14 }}>
                © {new Date().getFullYear()} Sajid Ahmed. Built with ❤️ and React.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;