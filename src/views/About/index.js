import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import Colors from '../../assets/style';
import "aos/dist/aos.css";
import { SecondaryButton } from '../../Components/Buttons';

const pageSx = {
  '--project-bg': '#001025',
  '--project-panel': '#072131',
  '--project-line': 'rgba(0, 255, 255, .14)',
  '--project-muted': '#94aaa9',
  '--project-ink': '#f1f5ef',
  '--project-accent': '#00ffffc9',
  minHeight: '100vh',
  overflow: 'hidden',
  pt: { xs: '105px', sm: '125px', md: '14vh' },
  pb: { xs: 6, md: 9 },
  color: 'var(--project-ink)',
  fontFamily: 'Poppins, sans-serif',
  background: 'radial-gradient(ellipse at 75% 5%, rgba(0, 255, 255, .08), transparent 32%), linear-gradient(36deg, #072131 10%, #001025 100%)',
  '& *': { boxSizing: 'border-box' },
  '@media (prefers-reduced-motion: reduce)': {
    '& *, & *::before, & *::after': {
      scrollBehavior: 'auto !important',
      transitionDuration: '0.01ms !important'
    }
  },
};

const qualifications = [
  { year: '2021 -2022', qualification: 'Diploma', institution: 'Sir Adamjee Institute' },
  { year: '2013 - 2016', qualification: 'Intermediate', institution: 'Government Degree College' },
  { year: '2012 - 2013', qualification: 'Matriculation', institution: 'Hill Crest School System' },
];

const experiences = [
  { year: '09/2024 - 08/2026', position: 'Frontend / React JS Developer', organization: 'MangoTech Solutions' },
  { year: '09/2023 - 07/2024', position: 'React JS Developer', organization: 'GE Solucions' },
  { year: '01/2023 - 06/2023', position: 'MERN Stack Developer', organization: 'WeSudo' },
];

function About() {
  const navigate = useNavigate();
  return (
    <Box
      component={"section"}
      sx={pageSx}
    >
      <Container maxWidth={"xl"}>
        <Grid container justifyContent={"center"}>
          <Grid item md={10}>
            <Grid container rowGap={"50px"}>
              <Grid item md={12} sm={12} xs={12}>
                <Box sx={{ py: { md: 6, xs: 3 } }}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      color: Colors.primary2,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.17em',
                      '&::before': {
                        content: '""',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: Colors.primary2,
                        boxShadow: '0 0 13px rgba(0,255,255,.45)'
                      }
                    }}
                  >
                    A LITTLE ABOUT ME
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      mt: 3,
                      mb: 3.25,
                      color: Colors.white,
                      fontSize: {
                        xs: 'clamp(52px, 12vw, 76px)',
                        sm: 'clamp(54px, 8vw, 100px)'
                      },
                      fontWeight: 500,
                      lineHeight: .98,
                      letterSpacing: '-.075em'
                    }}
                  >
                    Building thoughtful
                    <br />
                    <Box
                      component="span"
                      sx={{ color: Colors.primary2 }}
                    >
                      digital experiences.
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'flex-start', sm: 'end' },
                      justifyContent: 'space-between',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: { xs: 1.75, sm: 3.75 }
                    }}
                  >
                    <Typography
                      sx={{
                        maxWidth: 520,
                        color: '#b6c4c1',
                        fontSize: { xs: 14, sm: 16 },
                        lineHeight: 1.75
                      }}
                    >
                      I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js. My strengths include developing RESTful APIs, designing scalable database structures, creating responsive user interfaces, and integrating seamless frontend-backend functionality. I also work with TypeScript, Next.js, and Tailwind CSS to deliver modern, maintainable web experiences. I enjoy turning ideas into practical digital solutions that provide smooth and engaging user experiences.
                    </Typography>
                    <Typography
                      sx={{
                        color: Colors.primary2,
                        fontSize: 10,
                        letterSpacing: '.15em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Box
                        component="strong"
                        sx={{
                          mr: 1.1,
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: 500,
                          letterSpacing: '-.05em'
                        }}
                      >03+
                      </Box>
                      YEARS BUILDING FOR THE WEB
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  sx={{
                    height: { xl: "100vh", lg: "100vh", md: "100vh", sm: "100vh", xs: "100%" },
                  }}
                >
                  <Grid item sm={5} xs={12} data-aos="fade-right" sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          borderRadius: "16px",
                          p: 2,
                          boxShadow: `#00ffffc9 1px 1px 5px 0px inset, #00ffffc9 -1px -1px 5px 0px inset, #00ffffc9 1px 1px 2px 0px, #00ffffc9 -1px -1px 2px 0px`
                        }}
                      >
                        <CardMedia
                          component={"img"}
                          src={Images.heroImage}
                          sx={{
                            border: `1px solid ${Colors.primary}`,
                            height: "400px",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                            objectPosition: "top"
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={7} xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                        height: "100%",
                        width: "100%",
                        gap: 1
                      }}
                    >
                      <Typography
                        component="h2"
                        sx={{
                          mt: 1,
                          mb: 1,
                          lineHeight: 1.2,
                          fontSize: { xs: 28, md: 36 },
                          fontWeight: 500,
                          letterSpacing: '-.04em',
                          color: Colors.white,
                        }}
                      >
                        Developer with a detail-first mindset.
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: 1.75,
                          color: '#b6c4c1',
                          fontSize: { xs: 14, sm: 16 },
                        }}
                      >
                        From the very first design concept to the final deployment, I believe every detail plays a role in creating a great digital experience. I focus on writing clean, maintainable code, crafting responsive and intuitive interfaces, and making thoughtful decisions that balance functionality with visual appeal. Whether it's refining a small interaction, improving performance, or building a complete web application, my goal is to turn ideas into meaningful, reliable, and user-friendly digital experiences that feel just as good to use as they are to look at.
                      </Typography>
                      <SecondaryButton
                        fullWidth={false}
                        onClick={() => navigate("/contact")}
                        title={"I’m just a message away"}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                {/* Q & E Sec */}
                <Box component={"section"}>
                  <Container maxWidth={"xl"}>
                    <Grid
                      container
                      sx={{
                        height: { xl: "100vh", lg: "100vh", md: "100vh", sm: "100vh", xs: "100%" },
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      spacing={5}
                    >
                      <Grid item md={6} sm={6} xs={12} >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "20px",
                          }}
                        >
                          <Box data-aos="fade-right">
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: { md: "48px", xs: "40px" },
                                textAlign: { md: "left", sm: "center", xs: "center" },
                                fontWeight: 600,
                                textTransform: "uppercase",
                                color: Colors.white
                              }}
                            >
                              My Qualification
                            </Typography>
                          </Box>

                          <Box sx={{ position: "relative", width: "100%" }}>
                            {qualifications.map((qualification, index) => (
                              <Fragment key={index}>
                                <Box sx={{ display: "flex" }}
                                  data-aos="fade-up"
                                >
                                  <Box
                                    sx={{
                                      left: 1,
                                      position: 'absolute',
                                      transform: 'translateX(-50%)',
                                      width: "10px",
                                      height: "10px",
                                      borderRadius: "50%",
                                      background: Colors.primary2,
                                      boxShadow: `0px 0px 1px 2px ${Colors.primary2}`,
                                      padding: "2px",
                                      border: `2px solid ${Colors.secondary}`
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      borderLeft: index === qualifications.length - 1 ? "2px solid transparent" : `2px solid ${Colors.primary2}`,
                                      flex: 1
                                    }}
                                  >
                                    <Box sx={{ pl: 2, pb: 2 }}>
                                      <Box
                                        sx={{
                                          p: 2,
                                          border: `1px solid ${Colors.primary2}`,
                                          borderRadius: 1,
                                          boxShadow: `0px 0px 2px 1px ${Colors.primary2}`,
                                          transition: "all .3s ease-in-out",
                                          ":hover": {
                                            translate: "scale(2)"
                                          }
                                        }}
                                      >
                                        <Typography sx={{ fontSize: "18px", color: Colors.primary1 }}>
                                          {qualification.year}
                                        </Typography>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 600, color: Colors.white }}>
                                          {qualification.qualification}
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", color: Colors.primary2 }}>
                                          {qualification.institution}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Fragment>
                            ))}
                          </Box>
                        </Box>
                      </Grid>
                      {/* Qualification Section */}
                      {/* Experience Section */}
                      <Grid item md={6} sm={6} xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "20px",
                          }}
                        >
                          <Box data-aos="fade-left">
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: { md: "48px", xs: "40px" },
                                textAlign: { md: "left", sm: "center", xs: "center" },
                                fontWeight: 600,
                                textTransform: "uppercase",
                                color: Colors.white
                              }}
                            >
                              My Experience
                            </Typography>
                          </Box>

                          <Box sx={{ position: "relative", width: "100%" }}>
                            {experiences.map((experience, index) => (
                              <Fragment key={index}>
                                <Box sx={{ display: "flex" }} data-aos="fade-up">
                                  <Box
                                    sx={{
                                      left: 1,
                                      position: 'absolute',
                                      transform: 'translateX(-50%)',
                                      width: "10px",
                                      height: "10px",
                                      borderRadius: "50%",
                                      background: Colors.primary2,
                                      boxShadow: `0px 0px 1px 2px ${Colors.primary2}`,
                                      padding: "2px",
                                      border: `2px solid ${Colors.secondary}`
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      borderLeft: index === qualifications.length - 1 ? "2px solid transparent" : `2px solid ${Colors.primary2}`,
                                      flex: 1
                                    }}
                                  >
                                    <Box sx={{ pl: 2, pb: 2 }}>
                                      <Box sx={{
                                        p: 2,
                                        border: `1px solid ${Colors.primary2}`,
                                        borderRadius: 1,
                                        boxShadow: `0px 0px 2px 1px ${Colors.primary2}`
                                      }}
                                      >
                                        <Typography
                                          sx={{
                                            fontSize: "19px",
                                            color: Colors.primary1
                                          }}
                                        >
                                          {experience.year}
                                        </Typography>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 600, color: Colors.white }}>
                                          {experience.position}
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", color: Colors.primary2 }}>
                                          {experience.organization}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Fragment>
                            ))}
                          </Box>
                        </Box>
                      </Grid>
                      {/* Experience Section */}
                    </Grid>
                  </Container>
                </Box>
                {/* Q & E Sec */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
