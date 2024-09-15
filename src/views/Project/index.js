import React from 'react'
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Scrollbar, A11y, Navigation } from 'swiper/modules';

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
      title: "Todo App",
      description: "A task management tool developed with React.js and Firebase. It offers real-time updates with Firebase, a responsive design for all devices, and intuitive task management. The frontend is built with React.js, and the backend is powered by Firebase.",
      link: "https://app-reactjs-todo.netlify.app/",
      image: Images.todoApp
    },
    {
      title: "Quiz App",
      description: "The Quiz App is built with React.js and styled using Tailwind CSS for a modern, responsive design. It fetches diverse questions from Quiz.io, offering an engaging and easy-to-navigate interface. This combination ensures a seamless and enjoyable quizzing experience.",
      link: "https://react-js-quizapp.netlify.app/",
      image: Images.quizApp
    },
    {
      title: "Tara & Shine",
      description: "This website is adapted from a Figma design into a React.js application, utilizing MUI for styling. The site is fully media responsive, ensuring it looks great on any device. By combining React.js for dynamic functionality and MUI for a consistent, modern aesthetic, the website delivers a seamless and visually appealing user experience.",
      link: "https://tara-web.netlify.app/",
      image: Images.taraShine
    },
    {
      title: "Ecommerce Website",
      description: "This is a e-commerce web app, developed in React.js, utilizing react-bootstrap for styling the UI, used fakestore API to fetch products, used google maps API for store locater. Admin dashboard and backend is under developement, In future this app will be a fullstack MERN App.",
      link: "https://e-commerce-react-js-web.netlify.app/",
      image: Images.ecommerceWeb
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
          modules={[Scrollbar, A11y, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projectsData.map((item, i) => (
            <SwiperSlide key={i}>
              <Grid container alignItems={"center"} justifyContent={"center"} gap={"24px"} p={3}>
                <Grid item md={6.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2
                    }}
                  >
                    <Typography variant='h4'>{item.title}</Typography>
                    <Button
                      size={"small"}
                      sx={{
                        gap: "8px",
                        color: Colors.white,
                        ":hover": {
                          backgroundColor: `${Colors.primary}`,
                          boxShadow: `0px 0px 5px 2px ${Colors.primary1}`,
                        }
                      }}
                      variant={"contained"}
                      onClick={() => window.open(item.link)}
                      endIcon={<Launch sx={{ color: Colors.white }} />}
                    >
                      Visit
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={6.5}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      border: `1px solid ${Colors.primary}`,
                      boxShadow: `5px 10px ${Colors.white} inset`
                    }}
                  >
                    <CardMedia
                      component={"img"}
                      src={item.image}
                      sx={{
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                        border: `1px solid ${Colors.primary}`
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={6.5}>
                  <Box
                    sx={{
                      p: 1
                    }}
                  >
                    <Typography variant='body2'>{item.description}</Typography>
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