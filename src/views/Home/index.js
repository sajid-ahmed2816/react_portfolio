import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Box, CardMedia, Container, Grid, Typography, IconButton, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import Images, { Html, CSS, Javascript, Mongodb, ExpressJs, ReactJs, NodeJs, Firebase, Redux, TailwindCSS, Bootstrap, MaterialUi, LinkedIn, Github } from '../../assets/images/Images';
import { TypeAnimation } from 'react-type-animation';
import Colors from '../../assets/style';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons';
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} {...props} />
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
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
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
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const skills = [
  {
    name: "HTML",
    icon: <Html />,
  },
  {
    name: "CSS",
    icon: <CSS />,
  },
  {
    name: "JavaScript",
    icon: <Javascript />,
  },
  {
    name: "TailwindCSS",
    icon: <TailwindCSS />,
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
  },
  {
    name: "Material UI",
    icon: <MaterialUi />,
  },
  {
    name: "Firebase",
    icon: <Firebase />,
  },
  {
    name: "Redux",
    icon: <Redux />,
  },
  {
    name: "MongoDB",
    icon: <Mongodb />,
  },
  {
    name: "Express.js",
    icon: <ExpressJs />,
  },
  {
    name: "React.js",
    icon: <ReactJs />,
  },
  {
    name: "Node.js",
    icon: <NodeJs />,
  },
]

const qualifications = [
  { year: '2022', qualification: 'Diploma', institution: 'Sir Adamjee Institute' },
  { year: '2016', qualification: 'Intermediate', institution: 'Government Degree College' },
  { year: '2013', qualification: 'Matriculation', institution: 'Hill Crest School System' },
];

const experiences = [
  { year: '2023 - continue', position: 'Frontend / ReactJs Developer', organization: 'MangoTech Solutions' },
  { year: '2022 - 2023', position: 'MERN Stack Developer', organization: 'WeSudo' },
  { year: '2020 - 2022', position: 'Document Processing Executive', organization: 'Systems Limited' },
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
]

function Home() {
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState('panel0');
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

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "120px", sm: "80px", xs: "80px" },
            py: { xl: "50px", lg: "50px", md: "50px", sm: 2, xs: 2 }
          }}
        >
          {/* Intro Sec */}
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap-reverse",
            }}
          >
            <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
              <Grid container spacing={2} justifyContent={{ xs: "center" }} sx={{ pr: { xl: "60px", lg: "60px", md: "60px", sm: 0, xs: 0 } }}>
                <Grid item md={12} sm={12} xs={12} data-aos="fade-down">
                  <Typography
                    sx={{
                      color: Colors.black,
                      fontSize: { lg: "52px", md: "48px", sm: "36px", xs: "24px" },
                      textAlign: { xs: "center", md: "left" }
                    }}
                  >
                    Hi, I am&nbsp;
                    <Typography
                      component={"span"}
                      sx={{
                        color: Colors.white,
                        fontSize: { lg: "52px", md: "48px", sm: "36px", xs: "24px" },
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
                      // color: Colors.secondary,
                      fontSize: { lg: "48px", md: "40px", sm: "28px", xs: "18px" },
                      fontWeight: 700,
                      textAlign: { xs: "center", md: "left" },
                      background: `linear-gradient(to right, #48CFCB, #229799)`,
                      "-webkit-background-clip": "text",
                      "-webkit-text-fill-color": "transparent",
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
                        'UI/UX Developer',
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
                    sx={{
                      color: Colors.black,
                    }}
                  >
                    Skilled in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel at turning designs into functional apps with robust features and seamless API integration.
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
                        color: Colors.primary,
                        transition: "all .3s ease-in-out",
                        ":hover": {
                          color: Colors.primary1
                        },
                        // ":hover": {
                        //   filter: `drop-shadow(0px 0px 2px ${Colors.secondary})`
                        // }
                      }}
                      onClick={() => window.open("https://linkedin.com/in/sajid-ahmed-9b5089279")}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      sx={{
                        p: 0,
                        color: Colors.primary,
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
                        title={"Contact Me"}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  position: "relative",
                  height: "100%",
                }}
                data-aos="zoom-in"
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
                    src={Images.heroImage}
                    sx={{
                      border: `1px solid ${Colors.primary}`,
                      height: { md: "480px", sm: "400px", xs: "340px" },
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* Intro Sec */}

          <Grid
            container
            sx={{
              alignItems: "center"
            }}
          >
            {/* Qualification Section */}
            <Grid item md={6} sm={12} xs={12} >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box data-aos="fade-right">
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { md: "48px", xs: "40px" },
                      textAlign: { md: "left", sm: "center", xs: "center" },
                      color: Colors.secondary
                    }}
                  >
                    My Qualification
                  </Typography>
                </Box>

                <Box sx={{ position: "relative", p: 2 }}>
                  {qualifications.map((qualification, index) => (
                    <Fragment key={index}>
                      <Box sx={{ display: "flex", p: 2 }}
                        data-aos="fade-up"
                      >
                        <Box
                          sx={{
                            mt: "10px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: Colors.secondary,
                            boxShadow: `0px 0px 5px 1px ${Colors.primary1}`
                          }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography sx={{ fontSize: "18px", color: Colors.secondary }}>
                            {qualification.year}
                          </Typography>
                          <Box>
                            <Typography sx={{ fontSize: "20px", fontWeight: 600, color: Colors.secondary }}>
                              {qualification.qualification}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "18px", color: Colors.primary1 }}>
                              {qualification.institution}
                            </Typography>
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
            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box data-aos="fade-left">
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { md: "48px", xs: "40px" },
                      textAlign: { md: "left", sm: "center", xs: "center" },
                      color: Colors.secondary
                    }}
                  >
                    My Experience
                  </Typography>
                </Box>

                <Box sx={{ position: "relative", p: 2 }}>
                  {experiences.map((experience, index) => (
                    <Fragment key={index}>
                      <Box sx={{ display: "flex", p: 2 }} data-aos="fade-up">
                        <Box
                          sx={{
                            mt: "10px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: Colors.secondary,
                            boxShadow: `0px 0px 5px 1px ${Colors.primary1}`
                          }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            sx={{
                              fontSize: "19px",
                              color: Colors.secondary
                            }}
                          >
                            {experience.year}
                          </Typography>
                          <Box>
                            <Typography sx={{ fontSize: "20px", fontWeight: 600, color: Colors.secondary }}>
                              {experience.position}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "18px", color: Colors.primary1 }}>
                              {experience.organization}
                            </Typography>
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

          {/* Skills Sec */}
          <Grid
            container
            spacing={2}
            sx={{
              rowGap: "20px",
            }}
          >
            <Grid item md={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%"
                }}
                data-aos="fade-up"
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: Colors.white,
                    fontSize: { md: "48px", xs: "40px" },
                    color: Colors.secondary
                  }}
                >
                  My Skills
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Grid container spacing={3} data-aos="fade-right">
                {skills.map((skill, ind) => (
                  <Grid
                    key={ind}
                    item
                    xl={3}
                    lg={3}
                    md={3}
                    sm={4}
                    xs={6}
                    data-aos="fade-right"
                  >
                    <Box
                      className="skill-container"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2,
                        boxShadow: `0px 0px 5px 1px ${Colors.primary1}`,
                        borderRadius: "8px",
                        color: Colors.white,
                        transition: "all .3s",
                        background: Colors.primary,
                        ":hover": {
                          background: Colors.primary1,
                          boxShadow: `0px 0px 5px 1px ${Colors.secondary}`,
                          "& .icon-wrapper": {
                            transform: "rotateY(360deg)",
                          },
                        },
                      }}
                    >
                      <Box className="icon-wrapper"
                        sx={{
                          transition: "transform .3s",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography>
                        {skill.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {/* Skills Sec */}

          {/* Faqs Sec */}
          <Grid
            container
            spacing={2}
            sx={{
              rowGap: "20px",
            }}
          >
            <Grid item md={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%"
                }}
                data-aos="fade-up"
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: Colors.white,
                    fontSize: { md: "48px", xs: "40px" },
                    color: Colors.secondary
                  }}
                >
                  Faqs
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Box
                    data-aos="fade-right"
                    sx={{
                      border: `1px solid ${Colors.primary}`,
                      borderRadius: "16px",
                      p: 2,
                      boxShadow: `5px 10px ${Colors.white} inset`
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
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Box data-aos="fade-left">
                    {faqs.map((item, ind) => (
                      <CustomAccordion key={ind} disableGutters expanded={expanded === `panel${ind}`} onChange={handleChange(`panel${ind}`)}>
                        <CustomAccordionSummary
                          aria-controls={`panel${ind}-content`}
                          id={`panel${ind}-header`}
                          sx={{
                            color: Colors.black,
                            fontWeight: 600
                          }}
                        >
                          {item.question}
                        </CustomAccordionSummary>
                        <CustomAccordionDetails
                          sx={{
                            color: Colors.primary1
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
          {/* Faqs Sec */}
        </Box>
      </Container>
    </Box >
  )
}

export default Home