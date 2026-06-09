import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import Colors from '../../assets/style';
import "aos/dist/aos.css";
import { SecondaryButton } from '../../Components/Buttons';

const qualifications = [
  { year: '2022', qualification: 'Diploma', institution: 'Sir Adamjee Institute' },
  { year: '2016', qualification: 'Intermediate', institution: 'Government Degree College' },
  { year: '2013', qualification: 'Matriculation', institution: 'Hill Crest School System' },
];

const experiences = [
  { year: '2025 - continue', position: 'React JS Developer', organization: 'GE Solucions' },
  { year: '2023 - 2025', position: 'Frontend / React JS Developer', organization: 'MangoTech Solutions' },
  { year: '2022 - 2023', position: 'MERN Stack Developer', organization: 'WeSudo' },
];

function About() {
  const navigate = useNavigate();
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xl: 2, lg: 2, md: 2, sm: 2, xs: 2 },
        background: "linear-gradient(36deg, #072131 10%, #001025 100%)"
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container justifyContent={"center"} sx={{ pt: { sm: 0, xs: 8 } }}>
          <Grid item md={10}>
            <Grid container rowGap={"50px"}>
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
                        sx={{
                          lineHeight: "42px",
                          fontSize: "20px",
                          color: Colors.white,
                        }}
                      >
                        You need a developer who understands both design and functionality, delivers on time, and communicates clearly. That’s where I come in – I’m Sajid, a MERN stack developer with 3+ years of experience turning complex ideas into smooth web apps. I focus on clean code, mobile‑first design, and transparent collaboration. Let’s discuss your project.
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