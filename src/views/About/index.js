import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import Colors from '../../assets/style';
import AOS from "aos";
import "aos/dist/aos.css";

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
        py: { xl: "50px", lg: "50px", md: "50px", sm: 2, xs: 2 }
      }}
    >
      <Container>
        <Box>
          <Grid container rowGap={{ md: "50px", sm: 0, xs: 0 }} flexDirection={"column"}>
            <Grid item md={12} sm={12} xs={12}>
              <Grid
                container
                spacing={2}
                alignItems={"center"}
              >
                <Grid item md={6} sm={12} xs={12} data-aos="fade-right" sx={{ display: "flex" }}>
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
                        border: `1px solid ${Colors.primary}`,
                        borderRadius: "16px",
                        p: 2,
                        boxShadow: `5px 10px ${Colors.white} inset`
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
                <Grid item md={6} sm={12} xs={12}>
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
              >

                {/* about 2 */}
                <Grid item md={6} sm={12} xs={12}>
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
                <Grid item md={6} sm={12} xs={12} data-aos="fade-left" sx={{ display: "flex" }}>
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
                        border: `1px solid ${Colors.primary}`,
                        borderRadius: "16px",
                        p: 2,
                        boxShadow: `5px 10px ${Colors.white} inset`
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
        </Box>
      </Container>
    </Box>
  )
}

export default About