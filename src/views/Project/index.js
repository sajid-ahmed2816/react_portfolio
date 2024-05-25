import React from 'react'
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Images from '../../assets/images/Images';
import { Launch } from '@mui/icons-material';
import Colors from '../../assets/style';


function Project() {
  const projectsData = [
    {
      title: "TodoApp",
      description: "A task management tool developed with React.js and Firebase. It offers real-time updates with Firebase, a responsive design for all devices, and intuitive task management. The frontend is built with React.js, and the backend is powered by Firebase.",
      link: "https://app-todo-reactjs.netlify.app/",
      image: Images.todoApp
    },
    {
      title: "QuizApp",
      description: "The Quiz App is built with React.js and styled using Tailwind CSS for a modern, responsive design. It fetches diverse questions from Quiz.io, offering an engaging and easy-to-navigate interface. This combination ensures a seamless and enjoyable quizzing experience.",
      link: "https://react-js-quizapp.netlify.app/",
      image: Images.quizApp
    },
  ]
  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          display: 'flex',
          alignItems: { md: "center", sm: "flex-start", xs: "flex-start" },
          mt: { md: 0, sm: "90px", xs: "75px" }
        }}
      >
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projectsData.map((item, i) => (
            <SwiperSlide key={i}>
              {/* <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "40px 40px 60px 40px"
              }}
              >
                <Box>
                  <CardMedia
                    component={"img"}
                    src={item}
                    sx={{
                      minWidth: "300px",
                      objectFit: "cover",
                      height: "450px"
                    }}
                  />
                </Box>
                <Box>
                  <Typography>
                    Title Here
                  </Typography>
                </Box>
              </Box> */}
              <Grid container alignItems={"center"} justifyContent={"center"} gap={"24px"} p={3}>
                <Grid item md={5}>
                  <Box>
                    <CardMedia
                      component={"img"}
                      src={item.image}
                      sx={{
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "8px"
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      alignItems: "flex-start",
                      p: 1
                    }}
                  >
                    <Typography variant='h4'>{item.title}</Typography>
                    <Typography variant='body2'>{item.description}</Typography>
                    <Button
                      sx={{
                        gap: "8px",
                        ":hover": {
                          backgroundColor: `${Colors.primary}`,
                          boxShadow: `0px 0px 5px 2px ${Colors.secondary}`,
                        }
                      }}
                      variant={"contained"}
                      onClick={() => window.open(item.link)}
                    >
                      <Typography sx={{ fontSize: "14px" }}>Visit</Typography>
                      <Launch sx={{ fontSize: "20px" }} /></Button>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}

export default Project