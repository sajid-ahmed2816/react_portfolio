import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import { useSpring, animated, config } from 'react-spring';
import Colors from '../../assets/style';

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

  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimateImage(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const imageAnimation = useSpring({
    // opacity: animateImage ? 1 : 0.7,
    transform: `translateX(${animateImage ? 0 : 100}%)`,
    overflow: 'hidden',
    config: config.gentle
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container>
        <Box sx={{ mt: "40px" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: { md: "100vh", sm: "100%", xs: "100%" },
            }}
          >
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
                    fontSize: "26px",
                    p: 2
                  }}
                >
                  Welcome to my portfolio! I am a skilled and passionate front-end developer with expertise
                  in a variety of technologies. My proficiency includes JavaScript, ECMAScript, and HTML,
                  allowing me to create dynamic and interactive web experiences. I am well-versed in CSS and
                  CSS3, ensuring that my designs are not only functional but also visually appealing.
                </Typography>
              </Box>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: "100%",
                  overflow: 'hidden'
                }}
              >
                <animated.div sx={{
                  ...imageAnimation,
                  position: 'absolute',
                  height: '400px',
                  width: '400px',
                  borderRadius: '8px',
                  backgroundColor: "#00000082",
                }}
                />

                <animated.img
                  src={Images.dev3}
                  style={{
                    ...imageAnimation,
                    // ... your existing styles
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                {/* <Box
                  sx={{
                    position: "absolute",
                    height: { md: "400px", sm: "400px", xs: "400px" },
                    width: { md: "400px", sm: "100%", xs: "100%" },
                    borderRadius: "8px",
                    backgroundColor: "#00000082"
                  }}
                /> */}
                {/* <CardMedia
                  component={"img"}
                  src={Images.dev3}
                  sx={{
                    height: { md: "400px", sm: "400px", xs: "400px" },
                    width: { md: "400px", sm: "100%", xs: "100%" },
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                /> */}
              </Box>
            </Grid>
          </Grid>
          {/* <Grid
            container
            sx={{
              height: { md: "100vh", sm: "100%", xs: "100%" },
            }}
          >
            <Grid item md={12} sm={12} sx={12}>
              <Typography
                variant='h2'
              >
                Hobbies & Interest
              </Typography>
              <Stack
                gap={"20px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                flexWrap={"wrap"}
              >
                {hobbies.map((hobby, ind) => (
                  <Chip
                    key={ind}
                    label={hobby}
                    sx={{
                      background: Colors.primaryGradient,
                      fontSize: "24px",
                      p: "10px 20px"
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid> */}
        </Box>
      </Container>
    </Box>
  )
}

export default About