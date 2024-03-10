import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Images from '../../assets/images/Images';
import { useSpring, animated, config } from 'react-spring';
import Colors from '../../assets/style';

function About() {
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimateImage(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const imageAnimation = useSpring({
    opacity: animateImage ? 1 : 0,
    transform: `translateX(${animateImage ? 0 : 100}%)`,
    overflow: 'hidden',
    config: config.gentle
  });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container>
        <Box sx={{ mt: "60px" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "90vh",
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
        </Box>
      </Container>
    </Box>
  )
}

export default About