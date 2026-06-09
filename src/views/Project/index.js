import React, { Fragment, useEffect, useRef, useState } from 'react'
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
import GlowGrid from '../../Components/Glowgrid';

const projectsData = [
  {
    title: "RU Kids Club ",
    description: "Converted a Figma landing page into a fully responsive website using HTML, CSS, and Tailwind CSS, ensuring pixel-perfect design, clean code structure, and smooth responsiveness across all screen sizes with cross-browser compatibility.",
    link: "https://ru-kids-learning.netlify.app/",
    image: Images.kids_learning
  },
  {
    title: "Learn Hub",
    description: "This website is adapted from a Figma design into a HTML & CSS website, utilizing TailwindCSS for reponsiveness. The site is fully media responsive, ensuring it looks great on any device with cross-browser compatibility.",
    link: "https://hub-learning-web.netlify.app/",
    image: Images.learning_hub
  },
  {
    title: "Tara & Shine",
    description: "This website is adapted from a Figma design into a React.js application, utilizing MUI for styling. The site is fully media responsive, ensuring it looks great on any device. By combining React.js for dynamic functionality and MUI for a consistent.",
    link: "https://tara-web.netlify.app/",
    image: Images.taraShine
  },
  {
    title: "WizardZ",
    description: "This website is adapted from a Figma design into a React.js application, utilizing TailwindCSS for styling and GSAP for creative animation. The site is fully media responsive, ensuring it looks and feel great on any device. By combining React.js and GSAP for modern aesthetic.",
    link: "https://react-wizard-gsap.vercel.app/",
    image: Images.wizard_z
  },
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
    title: "Ecommerce Website",
    description: "This is a e-commerce web app, developed in React.js, utilizing react-bootstrap for styling the UI, used fakestore API to fetch products, used google maps API for store locater. Admin dashboard and backend is under developement, In future this app will be a fullstack MERN App.",
    link: "https://e-commerce-react-js-web.netlify.app/",
    image: Images.ecommerceWeb
  },
  {
    title: "Strindberg Bilvard",
    description: "Converted a Figma landing page web application using Next.js with a custom admin dashboard, styled and made fully responsive using Material UI (MUI). Implemented a clean, scalable layout with optimized components, ensuring smooth performance and consistent UI across all screen sizes.",
    link: "https://strindbergs-bilvard.vercel.app/",
    image: Images.strindberg_bilvard
  },
]
  ;
function Project() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null)

  // Container size track karna
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Mouse events container par
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -100, y: -100 });
  };

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
        <Container
          ref={containerRef}
          maxWidth={"xl"}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <GlowGrid
            mousePos={mousePos}
            width={dimensions.width}
            height={dimensions.height}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: "center",
              pt: { xl: "66px", lg: "66px", md: "66px", sm: "66px", xs: "44px" },
              height: '100vh'
            }}
          >
            <Swiper
              modules={[Scrollbar, A11y, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
            >
              {projectsData.map((item, i) => (
                <SwiperSlide key={i}>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={2}
                    px={{ xl: 3, lg: 3, md: 3, sm: 0, xs: 0 }}
                    py={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                  >
                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
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
                            display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
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
                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "16px",
                          boxShadow: `#00ffffc9 1px 1px 5px 0px inset, #00ffffc9 -1px -1px 5px 0px inset, #00ffffc9 1px 1px 2px 0px, #00ffffc9 -1px -1px 2px 0px`
                        }}
                      >
                        <CardMedia
                          component={"img"}
                          src={item.image}
                          sx={{
                            aspectRatio: "16/7",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            borderRadius: "8px",
                            border: `1px solid ${Colors.primary}`
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                      <Box
                        sx={{
                          p: 1
                        }}
                      >
                        <Typography variant='body2' style={{ color: Colors.white }}>{item.description}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
                      <Box
                        sx={{
                          p: 1,
                          width: "100%"
                        }}
                      >
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
                      </Box>
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