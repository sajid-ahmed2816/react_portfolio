import { useEffect, useState, useRef, cloneElement } from 'react';
import { Box, CardMedia, Container, Grid, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import Images, { Mongodb, ExpressJs, ReactJs, NodeJs, Firebase, Redux, TailwindCSS, MaterialUi, LinkedIn, Github } from '../../assets/images/Images';
import { TypeAnimation } from 'react-type-animation';
import Colors from '../../assets/style';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons';
import { Api, ArrowForwardIosSharp, Dashboard, ShoppingCart, Web } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// import ParticlesCanvas from '../../Components/Custom';
import GlowGrid from '../../Components/Glowgrid';
import AnimatedCounter from '../../Components/Stats';

const CustomAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} {...props} sx={{ background: "#072131" }} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const CustomAccordionSummary = styled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem', color: Colors.white }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    color: Colors.white
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  color: `${Colors.primary2} !important`
}));

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", desc: "Building dynamic, reusable UI components.", icon: <ReactJs /> },
      { name: "TailwindCSS", desc: "Utility-first CSS for rapid custom designs.", icon: <TailwindCSS /> },
      { name: "Material UI", desc: "Beautiful, accessible component library.", icon: <MaterialUi /> },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "Scalable server-side runtime.", icon: <NodeJs /> },
      { name: "Express.js", desc: "Robust API & server framework.", icon: <ExpressJs /> },
      { name: "MongoDB", desc: "NoSQL database for flexible data storage.", icon: <Mongodb /> },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git / GitHub", desc: "Version control & collaboration.", icon: <Github /> },
      { name: "Firebase", desc: "Realtime backend & authentication.", icon: <Firebase /> },
      { name: "Redux", desc: "State management for complex apps.", icon: <Redux /> },
    ]
  },
];

const services = [
  {
    icon: <Web sx={{ fontSize: 40, color: Colors.primary2 }} />,
    title: "Landing Pages & Websites",
    desc: "Pixel-perfect, high-converting landing pages built from Figma designs. Fully responsive and optimized for speed.",
  },
  {
    icon: <Dashboard sx={{ fontSize: 40, color: Colors.primary2 }} />,
    title: "Web Applications",
    desc: "Interactive dashboards, SaaS tools, and admin panels powered by React and Node.js for seamless user experiences.",
  },
  {
    icon: <ShoppingCart sx={{ fontSize: 40, color: Colors.primary2 }} />,
    title: "E-commerce Solutions",
    desc: "Full-featured online stores with secure payment integration, inventory management, and mobile-first design.",
  },
  {
    icon: <Api sx={{ fontSize: 40, color: Colors.primary2 }} />,
    title: "API Development & Integration",
    desc: "Custom RESTful APIs and third-party service integration to connect your app with the tools you need.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, audience, and requirements to define the perfect solution." },
  { step: "02", title: "Design & Prototype", desc: "I create wireframes and UI mockups for your approval before writing a single line of code." },
  { step: "03", title: "Development", desc: "Clean, scalable code is written with regular progress updates and feedback loops." },
  { step: "04", title: "Launch & Support", desc: "Rigorous testing, deployment, and ongoing maintenance to keep your app running smoothly." },
];

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Pixel-Perfect Delivery", value: 100, suffix: "%" },
];

const testimonials = [
  {
    quote: "Sajid delivered our landing page ahead of schedule, exactly matching the Figma design. Highly recommend his frontend skills.",
    name: "Ahmed Khan",
    role: "Project Manager, MangoTech",
  },
  {
    quote: "Great communication and clean code. He built our dashboard in record time with all the features we needed.",
    name: "Sara Ali",
    role: "CEO, WeSudo",
  },
  {
    quote: "Professional MERN stack developer. Our e-commerce site is now faster and looks amazing on mobile devices.",
    name: "Usman Raza",
    role: "Founder, GE Solucions",
  },
];

const blogPosts = [
  {
    title: "Why a Custom Website Outperforms Templates",
    excerpt: "Discover how custom development boosts speed, SEO, and user engagement...",
    link: "https://medium.com/@sajid.ahmed2816/why-a-custom-website-outperforms-templates-10f1676c6820",
    date: "May 2026"
  },
  {
    title: "Getting Started with MERN Stack in 2026",
    excerpt: "A beginner's guide to building full-stack apps with MongoDB, Express, React, and Node...",
    link: "https://medium.com/@sajid.ahmed2816/getting-started-with-mern-stack-in-2026-9257a6310b71",
    date: "April 2026"
  },
  {
    title: "5 React Performance Optimization Tips",
    excerpt: "Improve your app's speed with these simple yet effective techniques...",
    link: "https://medium.com/@yourhandle/react-perf",
    date: "March 2026"
  },
];

const faqs = [
  {
    question: "What frontend development services do you provide?",
    answer: "I specialize in creating responsive and modern user interfaces using React.js, Material UI, and Tailwind CSS, ensuring a smooth and visually appealing user experience."
  },
  {
    question: "How do you handle backend development?",
    answer: "I develop robust server-side applications using Node.js and Express.js, focusing on scalability, security, and performance."
  },
  {
    question: "Can you help with API integration and development?",
    answer: "Yes, I provide seamless integration of third-party services and create RESTful APIs for your web applications."
  },
  {
    question: "Do you develop e-commerce platforms and custom dashboards?",
    answer: "Absolutely! I develop full-featured e-commerce platforms and custom dashboards with user-friendly admin panels."
  },
  {
    question: "Will my web application be cross-browser compatible and mobile responsive?",
    answer: "Yes, I ensure that all web applications I develop work flawlessly across different browsers and devices, delivering a consistent user experience."
  },
];

const whiteHeading = { fontSize: { md: "48px", xs: "40px" }, fontWeight: 600, textTransform: "uppercase", color: Colors.white };

function Home() {
  const [expanded, setExpanded] = useState('panel0');
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  const navigate = useNavigate();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const handleDownload = async () => {
  //   setLoading(true);
  //   try {
  //     // Direct link to your resume file on Google Drive
  //     const resumeUrl = "https://drive.google.com/uc?id=1vureuZiFy6IQEK2StYiczJLA0-GsS5ry";
  //     // Create a temporary link element to trigger the download 
  //     const link = document.createElement('a');
  //     link.href = resumeUrl;
  //     link.download = 'resume.pdf'; // Change 'YourResume.pdf' to your desired filename
  //     document.body.appendChild(link);

  //     // Trigger the click event to start the download
  //     link.click();

  //     // Remove the temporary link element
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Grid container>
      <Grid item md={12}>
        <Grid container>
          <Grid
            item
            md={12}
            sx={{
              background: "linear-gradient(36deg, #072131 10%, #001025 100%)"
            }}
          >
            {/* Intro Sec */}
            <Box
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              component={"section"}
              sx={{
                width: "100%",
              }}
            >
              <GlowGrid
                mousePos={mousePos}
                width={dimensions.width}
                height={dimensions.height}
              />
              {/* <ParticlesCanvas position={"absolute"} zIndex={1} /> */}
              <Container maxWidth={"xl"}>
                <Grid
                  container
                  sx={{
                    mt: 0,
                    height: { xl: "100vh", lg: "100vh", md: "100vh", sm: "100vh", xs: "100%" },
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item md={10} xs={12}>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        alignItems: "center",
                        pt: { xl: 6, lg: 6, md: 6, sm: 4, xs: 9 },
                        pb: { xs: 3 },
                        flexWrap: "wrap-reverse",
                      }}
                    >
                      <Grid item xl={8} lg={8} md={7} sm={7} xs={12}>
                        <Grid container spacing={2} justifyContent={{ xs: "center" }} sx={{ pr: { xl: "40px", lg: "40px", md: "40px", sm: 2.5 } }}>
                          <Grid item md={12} sm={12} xs={12} data-aos="fade-down">
                            <Typography
                              sx={{
                                color: Colors.white,
                                fontSize: { lg: "64px", md: "48px", sm: "36px", xs: "24px" },
                                textAlign: { xs: "center", md: "left" }
                              }}
                            >
                              Hi, I am&nbsp;
                              <Typography
                                component={"span"}
                                sx={{
                                  color: Colors.secondary,
                                  fontSize: { lg: "64px", md: "48px", sm: "36px", xs: "24px" },
                                  textShadow: `${Colors.primary} -1px -1px 2px, ${Colors.primary1} 1px -1px 2px, ${Colors.primary} -1px 1px 2px, ${Colors.secondary} 1px 1px 2px`
                                }}
                              >
                                Sajid Ahmed.
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <Typography
                              sx={{
                                color: Colors.primary2,
                                fontSize: { lg: "48px", md: "40px", sm: "28px", xs: "18px" },
                                fontWeight: 700,
                                textAlign: { xs: "center", md: "left" },
                              }}
                            >
                              <TypeAnimation
                                sequence={[
                                  'Software Engineer',
                                  1000,
                                  'MERN Stack Developer',
                                  1000,
                                  'Frontend Developer',
                                  1000,
                                  'React JS Developer',
                                  1000,
                                  'Backend Developer',
                                  1000,
                                  'Node JS Developer',
                                  1000,
                                  'HTML/CSS Developer',
                                  1000,
                                  'Quick Learner',
                                  1000,
                                  'Gamer',
                                  1000,
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                              />
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12} data-aos="fade-left">
                            <Typography
                              variant={"h1"}
                              sx={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: Colors.white,
                                lineHeight: 2,
                              }}
                            >
                              I build fast, conversion-focused web apps that grow your business.
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12} data-aos="fade-left">
                            <Typography
                              variant={"h1"}
                              sx={{
                                fontSize: 16,
                                fontWeight: 400,
                                color: "#c0c0c0",
                                lineHeight: 2,
                              }}
                            >
                              Custom MERN stack solutions delivered on time. Let’s turn your idea into a live product.
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12} data-aos="fade-right">
                            <Box
                              sx={{
                                py: "16px",
                                display: "flex",
                                justifyContent: { md: "flex-start", sm: "center", xs: "center" },
                                gap: "16px"
                              }}
                            >
                              <IconButton
                                sx={{
                                  p: 0,
                                  color: Colors.primary2,
                                  transition: "all .3s ease-in-out",
                                  ":hover": {
                                    color: Colors.primary1
                                  },
                                  // ":hover": {
                                  //   filter: `drop-shadow(0px 0px 2px ${Colors.secondary})`
                                  // }
                                }}
                                onClick={() => window.open("https://www.linkedin.com/in/sajid-ahmed-8a60073a7")}
                              >
                                <LinkedIn />
                              </IconButton>
                              <IconButton
                                sx={{
                                  p: 0,
                                  color: Colors.primary2,
                                  ":hover": {
                                    color: Colors.primary1
                                  }
                                }}
                                onClick={() => window.open("https://github.com/sajid-ahmed2816")}
                              >
                                <Github />
                              </IconButton>
                            </Box>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12} data-aos="fade-up">
                            <Grid container columnSpacing={2} rowSpacing={2}>
                              <Grid item md={6} sm={6} xs={12} width={"100%"}>
                                <a
                                  href="download/resume.pdf"
                                  download
                                >
                                  <PrimaryButton
                                    fullWidth={true}
                                    title={"Download Resume"}
                                  />
                                </a>
                              </Grid>
                              <Grid item md={6} sm={6} xs={12}>
                                <SecondaryButton
                                  fullWidth={true}
                                  onClick={() => navigate("/contact")}
                                  title={"Start a Project"}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xl={4} lg={4} md={5} sm={5} xs={12}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "stretch",
                            position: "relative",
                            height: "100%",
                            borderRadius: "16px",
                            boxShadow: `1px 1px 5px 0px inset #4c00ff, -1px -1px 5px 0px inset #5f1cfc, 1px 1px 2px 0px #c300ff, -1px -1px 2px 0px #e695ff`
                          }}
                          data-aos="zoom-in"
                        >
                          <Box
                            sx={{
                              borderRadius: "16px",
                              p: 2,
                            }}
                          >
                            <CardMedia
                              component={"img"}
                              src={Images.developerImage}
                              sx={{
                                opacity: 0.6,
                                border: `1px solid ${Colors.primary2}`,
                                height: { md: "480px", sm: "400px", xs: "340px" },
                                width: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                                borderRadius: "8px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            {/* Intro Sec */}
          </Grid>
          <Grid item md={12}>
            <Box
              sx={{
                background: "linear-gradient(36deg, #072131 10%, #001025 100%)",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                gap: { md: "120px", sm: "80px", xs: "80px" },
                pt: { xl: 15, lg: 15, md: 15, sm: 12, xs: 12 },
              }}
            >
              {/* Service Sec */}
              <Box component={"section"}>
                <Container maxWidth="xl">
                  <Grid container justifyContent="center">
                    <Grid item md={10}>
                      <Grid container spacing={4}>
                        <Grid item md={12}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: { md: "48px", xs: "40px" },
                              fontWeight: 600,
                              textTransform: "uppercase",
                              color: Colors.white,
                              textAlign: "center"
                            }}
                            data-aos="fade-up"
                          >
                            What I Do
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <Grid container spacing={4}>
                            {services.map((service, index) => (
                              <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={index} data-aos="flip-left">
                                <Box
                                  sx={{
                                    p: 3,
                                    borderRadius: "12px",
                                    background: "rgba(7, 33, 49, 0.8)",
                                    border: `1px solid ${Colors.primary2}`,
                                    boxShadow: `0 0 10px rgba(0, 255, 255, 0.1)`,
                                    transition: "all 0.3s",
                                    height: "100%",
                                    ":hover": {
                                      borderColor: Colors.secondary,
                                      boxShadow: `0 0 20px rgba(0, 255, 255, 0.3)`,
                                      transform: "translateY(-5px)",
                                    },
                                  }}
                                >
                                  <Box mb={2}>{service.icon}</Box>
                                  <Typography sx={{ color: Colors.white, fontWeight: 600, fontSize: 20, mb: 1 }}>
                                    {service.title}
                                  </Typography>
                                  <Typography sx={{ color: Colors.primary2, fontSize: 15 }}>
                                    {service.desc}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                        <Grid item md={12}>
                          <Box
                            sx={{
                              textAlign: 'center',
                              p: { md: 4, xs: 2 },
                              borderRadius: '16px',
                              background: `linear-gradient(135deg, #2c4949, ${Colors.secondary})`,
                              border: `1px solid ${Colors.primary2}`,
                              boxShadow: `0 0 12px ${Colors.primary2}`,
                            }}
                          >
                            <Grid container justifyContent="center" spacing={4}>
                              {stats.map((stat, i) => (
                                <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={i} data-aos="zoom-in">
                                  <Box sx={{ textAlign: "center", p: 2 }}>
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    <Typography sx={{ color: Colors.primary2, fontSize: 18, mt: 1 }}>
                                      {stat.label}
                                    </Typography>
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Service Sec */}

              {/* Skills Sec */}
              <Box component={"section"}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item md={10}>
                      <Grid container>
                        <Grid item md={12}>
                          <Typography sx={{ ...whiteHeading, textAlign: "center", mb: 6 }} data-aos="fade-up">
                            My Tech Stack
                          </Typography>
                        </Grid>
                        {techCategories.map((cat, idx) => (
                          <Box key={idx} mb={6}>
                            <Typography sx={{ color: Colors.white, fontSize: 28, fontWeight: 600, mb: 3 }} data-aos="fade-right">
                              {cat.category}
                            </Typography>
                            <Grid container spacing={3}>
                              {cat.items.map((tech, i) => (
                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                  <Box
                                    sx={{
                                      p: 3,
                                      borderRadius: "12px",
                                      background: "rgba(7,33,49,0.6)",
                                      border: `1px solid ${Colors.primary2}40`,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 2,
                                      transition: "0.3s",
                                      ":hover": {
                                        background: "rgba(0,255,255,0.05)",
                                        borderColor: Colors.secondary,
                                      }
                                    }}
                                  >
                                    <Box sx={{ fontSize: 36 }}>{cloneElement(tech.icon, { fill: Colors.white })}</Box>
                                    <Box>
                                      <Typography sx={{ color: Colors.white, fontWeight: 600, fontSize: 18 }}>{tech.name}</Typography>
                                      <Typography sx={{ color: Colors.primary2, fontSize: 14 }}>{tech.desc}</Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Skills Sec */}

              {/* Process Sec */}
              <Box component={"section"}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item md={10}>
                      <Grid container>
                        <Grid item md={12}>
                          <Typography sx={{ ...whiteHeading, textAlign: "center", mb: 6 }} data-aos="fade-up">
                            How I Work
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <Grid container justifyContent="center" spacing={4}>
                            {processSteps.map((step, i) => (
                              <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <Box
                                  sx={{
                                    textAlign: "center",
                                    p: 3,
                                    position: "relative",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "inline-flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: 80,
                                      height: 80,
                                      borderRadius: "50%",
                                      border: `3px solid ${Colors.primary2}`,
                                      color: Colors.primary2,
                                      fontSize: 30,
                                      fontWeight: 700,
                                      mb: 2,
                                      background: "rgba(0,255,255,0.05)",
                                    }}
                                  >
                                    {step.step}
                                  </Box>
                                  <Typography sx={{ color: Colors.white, fontSize: 22, fontWeight: 600, mb: 1 }}>
                                    {step.title}
                                  </Typography>
                                  <Typography sx={{ color: Colors.primary2, fontSize: 15 }}>
                                    {step.desc}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Process Sec */}

              {/* Testimonials Sec */}
              <Box component={"section"}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item md={10}>
                      <Grid container>
                        <Grid item md={12}>
                          <Typography
                            variant="h3"
                            sx={{ ...whiteHeading, textAlign: "center", mb: 6 }}
                            data-aos="fade-up"
                          >
                            What People Say
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <Grid container justifyContent="center" spacing={4}>
                            {testimonials.map((t, i) => (
                              <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                                <Box
                                  sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    background: `linear-gradient(135deg, rgba(0,16,37,0.9), rgba(7,33,49,0.9))`,
                                    border: `1px solid ${Colors.primary2}40`,
                                    boxShadow: `0 0 15px ${Colors.primary2}20`,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    position: "relative",
                                    ":before": {
                                      content: '"“"',
                                      position: "absolute",
                                      top: -10,
                                      left: 20,
                                      fontSize: 60,
                                      color: Colors.secondary,
                                      opacity: 0.5,
                                      lineHeight: 1,
                                    },
                                  }}
                                >
                                  <Typography sx={{ color: Colors.white, fontSize: 16, mb: 3, fontStyle: "italic" }}>
                                    {t.quote}
                                  </Typography>
                                  <Box>
                                    <Typography sx={{ color: Colors.primary1, fontWeight: 600, fontSize: 18 }}>
                                      {t.name}
                                    </Typography>
                                    <Typography sx={{ color: Colors.primary2, fontSize: 14 }}>
                                      {t.role}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Testimonials Sec */}

              {/* Blogs Sec */}
              <Box component={"section"}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item md={10}>
                      <Grid container>
                        <Grid item md={12}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={6} >
                            <Typography sx={{ ...whiteHeading }}>
                              Insights & Articles
                            </Typography>
                            <Button
                              variant="outlined"
                              sx={{ borderColor: Colors.primary2, color: Colors.primary2, ":hover": { borderColor: Colors.secondary, color: Colors.secondary } }}
                              onClick={() => window.open('https://medium.com/@sajid.ahmed28', '_blank')}
                            >
                              View All
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={12}>
                          <Grid container justifyContent="center" spacing={4}>
                            {blogPosts.map((post, i) => (
                              <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={i} data-aos="flip-up" data-aos-delay={i * 100}>
                                <Box
                                  sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    background: "rgba(7,33,49,0.8)",
                                    border: `1px solid ${Colors.primary2}30`,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    transition: "0.3s",
                                    ":hover": {
                                      borderColor: Colors.secondary,
                                      boxShadow: `0 0 20px ${Colors.primary2}40`,
                                    }
                                  }}
                                >
                                  <Box>
                                    <Typography sx={{ color: Colors.primary2, fontSize: 14, mb: 1 }}>{post.date}</Typography>
                                    <Typography sx={{ color: Colors.white, fontWeight: 600, fontSize: 20, mb: 2 }}>
                                      {post.title}
                                    </Typography>
                                    <Typography sx={{ color: Colors.primary1, fontSize: 15, mb: 3 }}>
                                      {post.excerpt}
                                    </Typography>
                                  </Box>
                                  <Button
                                    onClick={() => window.open(post.link, '_blank')}
                                    sx={{
                                      alignSelf: "flex-start",
                                      color: "#A0A0A0",
                                      textTransform: "none",
                                      fontWeight: 600,
                                      ":hover": { background: "transparent", textDecoration: "underline" }
                                    }}
                                  >
                                    Read More →
                                  </Button>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Blogs Sec */}

              {/* Faqs Sec */}
              <Box component={"section"}>
                <Container maxWidth={"xl"}>
                  <Grid container justifyContent={"center"}
                    sx={{ height: { xl: "100vh", lg: "100vh", md: "100vh", sm: "100%", xs: "100%" }, }}
                    alignItems={"center"}
                  >
                    <Grid item md={10}>
                      <Grid
                        container
                        sx={{
                          rowGap: "20px",
                        }}
                      >
                        <Grid item md={12}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            data-aos="fade-up"
                          >
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: { md: "48px", xs: "40px" },
                                fontWeight: 600,
                                textTransform: "uppercase",
                                color: Colors.white
                              }}
                            >
                              Faqs
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={12}>
                          <Grid container spacing={3} alignItems={"center"}>
                            <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
                              <Box
                                data-aos="fade-bottom"
                                sx={{
                                  borderRadius: "16px",
                                  p: 2,
                                  boxShadow: `#00ffffc9 1px 1px 5px 0px inset, #00ffffc9 -1px -1px 5px 0px inset, #00ffffc9 1px 1px 2px 0px, #00ffffc9 -1px -1px 2px 0px`
                                }}
                              >
                                <CardMedia
                                  component={"img"}
                                  src={Images.faqImage}
                                  sx={{
                                    width: "100%",
                                    height: "400px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    border: `1px solid ${Colors.primary}`
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
                              <Box data-aos="fade-bottom">
                                {faqs.map((item, ind) => (
                                  <CustomAccordion
                                    key={ind}
                                    disableGutters
                                    expanded={expanded === `panel${ind}`}
                                    onChange={handleChange(`panel${ind}`)}
                                  >
                                    <CustomAccordionSummary
                                      aria-controls={`panel${ind}-content`}
                                      id={`panel${ind}-header`}
                                      sx={{
                                        color: Colors.black,
                                        fontWeight: 600,
                                        fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 16 },
                                        "& .MuiAccordionSummary-content": {
                                          m: { xl: "12px 0 12px 8px", lg: "12px 0 12px 8px", md: "12px 0 12px 8px", sm: "8px 0 8px 8px", xs: "12px 0 12px 8px" },
                                        }
                                      }}
                                    >
                                      {item.question}
                                    </CustomAccordionSummary>
                                    <CustomAccordionDetails
                                      sx={{
                                        color: Colors.primary1,
                                        fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 16 },
                                        padding: { xl: 2, lg: 2, md: 1.5, sm: 1, xs: 2 },
                                      }}
                                    >
                                      {item.answer}
                                    </CustomAccordionDetails>
                                  </CustomAccordion>
                                ))}
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              {/* Faqs Sec */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Home