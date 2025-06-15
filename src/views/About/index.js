import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import Colors from '../../assets/style';
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesCanvas from '../../Components/Custom';

const hobbies = [
  "Programming",
  "Coding",
  "Learning",
  "Gaming",
  "Technology",
  "Movies",
  "Music",
  "Travelling",
  "History"
]

function About() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xl: 2, lg: 2, md: 2, sm: 2, xs: 2 },
      }}
    >
      <ParticlesCanvas position={"fixed"} zIndex={-1} />
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
                  <Grid item sm={4} xs={12} data-aos="fade-right" sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "16px",
                          p: 2,
                          boxShadow: `#48CFCB 1px 1px 5px 0px inset, #48cfcb -1px -1px 5px 0px inset, #48cfcb 1px 1px 2px 0px, #48cfcb -1px -1px 2px 0px`
                        }}
                      >
                        <CardMedia
                          component={"img"}
                          src={Images.developerImage}
                          sx={{
                            border: `1px solid ${Colors.primary}`,
                            height: "400px",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px"
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={8} xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%"
                      }}
                    >
                      <Typography
                        sx={{
                          lineHeight: "42px",
                          fontSize: "20px",
                          p: 2
                        }}
                      >
                        Welcome to my portfolio! I am a skilled and passionate front-end developer with expertise in a variety of technologies. My proficiency includes React.js, allowing me to build powerful and dynamic user interfaces, ensuring that my designs are both aesthetically pleasing and highly functional. My deep understanding of HTML and CSS ensures that every project I undertake is built with a solid foundation and polished to perfection.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  sx={{
                    height: { xl: "100vh", lg: "100vh", md: "100vh", sm: "100vh", xs: "100%" },
                    flexWrap: "wrap-reverse"
                  }}
                >

                  {/* about 2 */}
                  <Grid item sm={7} xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%"
                      }}
                    >
                      <Typography
                        sx={{
                          lineHeight: "42px",
                          fontSize: "20px",
                          p: 2
                        }}
                      >
                        The MERN Stack combines MongoDB for data storage, Express.js for server-side operations, React.js for interactive user interfaces, and Node.js for server runtime. Together, they facilitate full-stack JavaScript development, offering efficiency and scalability for building modern web applications.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={5} xs={12} data-aos="fade-left" sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          borderRadius: "16px",
                          p: 2,
                          boxShadow: `#48CFCB 1px 1px 5px 0px inset, #48cfcb -1px -1px 5px 0px inset, #48cfcb 1px 1px 2px 0px, #48cfcb -1px -1px 2px 0px`
                        }}
                      >
                        <CardMedia
                          component={"img"}
                          src={Images.about2}
                          sx={{
                            border: `1px solid ${Colors.primary}`,
                            height: { md: "400px", sm: "400px", xs: "400px" },
                            width: { md: "100%", sm: "100%", xs: "100%" },
                            objectFit: "cover",
                            borderRadius: "8px"
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About