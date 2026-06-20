import React, { Fragment } from 'react'
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

const projectsData = [
  {
    title: "RU Kids Club ",
    description: "Converted a Figma landing page into a fully responsive website using HTML, CSS, and Tailwind CSS, ensuring pixel-perfect design, clean code structure, and smooth responsiveness across all screen sizes with cross-browser compatibility.",
    link: "https://ru-kids-learning.netlify.app/",
    image: Images.kids_learning,
    techStacks: ["HTML", "TailwindCSS"]
  },
  {
    title: "Learn Hub",
    description: "This website is adapted from a Figma design into a HTML & CSS website, utilizing TailwindCSS for reponsiveness. The site is fully media responsive, ensuring it looks great on any device with cross-browser compatibility.",
    link: "https://hub-learning-web.netlify.app/",
    image: Images.learning_hub,
    techStacks: ["HTML", "TailwindCSS", "Swiper"]
  },
  {
    title: "Tara & Shine",
    description: "This website is adapted from a Figma design into a React.js application, utilizing MUI for styling. The site is fully media responsive, ensuring it looks great on any device. By combining React.js for dynamic functionality and MUI for a consistent.",
    link: "https://tara-web.netlify.app/",
    image: Images.taraShine,
    techStacks: ["React JS", "Material UI", "Swiper", "React Hook Form"]
  },
  {
    title: "WizardZ",
    description: "This website is adapted from a Figma design into a React.js application, utilizing TailwindCSS for styling and GSAP for creative animation. The site is fully media responsive, ensuring it looks and feel great on any device. By combining React.js and GSAP for modern aesthetic.",
    link: "https://react-wizard-gsap.vercel.app/",
    image: Images.wizard_z,
    techStacks: ["React JS", "Material UI", "GSAP", "Swiper", "React Hook Form"]
  },
  {
    title: "Todo App",
    description: "A task management tool developed with React.js and Firebase. It offers real-time updates with Firebase, a responsive design for all devices, and intuitive task management. The frontend is built with React.js, and the backend is powered by Firebase.",
    link: "https://app-reactjs-todo.netlify.app/",
    image: Images.todoApp,
    techStacks: ["React JS", "Material UI", "Axios", "Firebase"]
  },
  {
    title: "Quiz App",
    description: "The Quiz App is built with React.js and styled using Tailwind CSS for a modern, responsive design. It fetches diverse questions from Quiz.io, offering an engaging and easy-to-navigate interface. This combination ensures a seamless and enjoyable quizzing experience.",
    link: "https://react-js-quizapp.netlify.app/",
    image: Images.quizApp,
    techStacks: ["React", "Material UI", "Axios"]
  },
  {
    title: "Ecommerce Website",
    description: "This is an e-commerce web app developed in React.js, utilizing React-Bootstrap for UI styling. Seamlessly integrated REST APIs and admin dashboard for manage content. This project has successfully evolved into a complete fullstack MERN application.",
    link: "https://e-commerce-react-js-web.netlify.app/",
    image: Images.ecommerceWeb,
    techStacks: ["MongoDB", "Express JS", "React JS", "Node JS", "React Bootstrap", "Swiper", "Axios", "Redux", "JWT", "OAuth"]
  },
  {
    title: "Strindberg Bilvard",
    description: "Converted a Figma landing page web application using Next.js with a custom admin dashboard, styled and made fully responsive using Material UI (MUI). Implemented a clean, scalable layout with optimized components, ensuring smooth performance and consistent UI across all screen sizes.",
    link: "https://strindbergs-bilvard.vercel.app/",
    image: Images.strindberg_bilvard,
    techStacks: ["MongoDB", "Express JS", "React JS", "Node JS", "Next JS", "Material UI", "Axios", "Swiper", "React Hook Form"]
  },
]
  ;
function Project() {
  return (
    <Fragment>
      <Box
        component={"section"}
        sx={{
          background: "linear-gradient(36deg, #072131 10%, #001025 100%)",
          width: "100%",
          height: "100%"
        }}
      >
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: 'flex',
              alignItems: "center",
              pt: { xl: "66px", lg: "66px", md: "66px", sm: "90px", xs: "72px" },
              height: { md: '100vh', sm: "100vh", xs: "100%" }
            }}
          >
            <Swiper
              modules={[Scrollbar, A11y, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              style={{ padding: "4px" }}
            >
              {projectsData.map((item, i) => (
                <SwiperSlide key={i}>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item md={10} sm={12} xs={12}>
                      <Grid container spacing={4}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ flex: 1 }}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: "16px",
                              boxShadow: `#00ffffc9 1px 1px 5px 0px inset, #00ffffc9 -1px -1px 5px 0px inset, #00ffffc9 1px 1px 2px 0px, #00ffffc9 -1px -1px 2px 0px`,
                              height: "100%"
                            }}
                          >
                            <CardMedia
                              component={"img"}
                              src={item.image}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                                borderRadius: "8px",
                                border: `1px solid ${Colors.primary}`
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                          <Grid container rowSpacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2
                                }}
                              >
                                <Typography variant='h4' sx={{ fontSize: { xl: "36px", lg: "36px", md: "36px", sm: "32px", xs: "32px" }, color: Colors.white }}>{item.title}</Typography>
                                <Button
                                  size={"small"}
                                  sx={{
                                    display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" },
                                    gap: "8px",
                                    color: Colors.white,
                                    background: Colors.primary2,
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
                            <Grid item md={12} sm={12} xs={12}>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: 1
                                }}
                              >
                                <Typography
                                  variant={"h2"}
                                  sx={{
                                    fontSize: "24px",
                                    color: Colors.white
                                  }}
                                >Tech Stack</Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: 1
                                  }}
                                >
                                  {item.techStacks.map((tech, ind) => (
                                    <Typography
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: "4px 16px",
                                        border: `1px solid ${Colors.primary2}`,
                                        borderRadius: "32px",
                                        fontSize: "14px",
                                        color: Colors.primary2,
                                        whiteSpace: "nowrap"
                                      }}
                                    >
                                      {tech}
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                              <Box sx={{ pl: "2px" }}>
                                <Typography variant='body2' style={{ color: Colors.white }}>{item.description}</Typography>
                              </Box>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "flex" } }}>
                              <Button
                                fullWidth={true}
                                size={"large"}
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
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Project