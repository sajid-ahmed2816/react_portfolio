import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Box, CardMedia, Container, Grid, Typography, IconButton } from '@mui/material';
import Images, { Html, Css, Javascript, Mongodb, ExpressJs, ReactJs, NodeJs, Firebase, Redux, Github, Bootstrap, MaterialUi, LinkedIn } from '../../assets/images/Images';
import { TypeAnimation } from 'react-type-animation';
import Colors from '../../assets/style';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons';
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: <Html />,
  },
  {
    name: "CSS",
    icon: <Css />,
  },
  {
    name: "JavaScript",
    icon: <Javascript />,
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
    name: "Github",
    icon: <Github />,
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
  { year: '2022', qualification: 'Diploma', institution: 'Sir Adamjee Institute Of Management Science' },
  { year: '2016', qualification: 'Intermediate', institution: 'Government Degree College' },
  { year: '2013', qualification: 'Matriculation', institution: 'Hill Crest School System' },
];

const experiences = [
  { year: '2023 - continue', position: 'Frontend / ReactJs Developer', organization: 'MangoTech Solutions' },
  { year: '2022 - 2023', position: 'MERN Stack Developer', organization: 'WeSudo' },
  { year: '2020 - 2022', position: 'Document Processing Executive', organization: 'Systems Limited' },
];

function Home() {
  const [loading, setLoading] = useState(false);
  const gitUserName = "sajid-ahmed28"

  const navigate = useNavigate();

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Direct link to your resume file on Google Drive
      const resumeUrl = "https://drive.google.com/uc?id=151HRHJLRFTBdpzDJrBx7DZq5A-cBTfFI";

      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'resume.pdf'; // Change 'YourResume.pdf' to your desired filename
      document.body.appendChild(link);

      // Trigger the click event to start the download
      link.click();

      // Remove the temporary link element
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: 0, sm: "80px", xs: "80px" }
          }}
        >
          {/* Intro Sec */}
          <Grid
            container
            spacing={{ md: 0, sm: 2, xs: 2 }}
            sx={{
              height: { md: "100vh", sm: "100%", xs: "100%" },
              // flexDirection: { md: "row", sm: "column-reverse", xs: "column-reverse" },
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap-reverse",
              mt: { md: 0, sm: "120px", xs: "120px" },
              pt: { md: "50px", sm: 0, xs: 0 }
            }}
          >
            <Grid item md={6}>
              <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12} data-aos="fade-down">
                  <Typography sx={{ color: Colors.white, fontSize: { lg: "59px", md: "48px", sm: "36px", xs: "24px" }, }}>
                    Hi, I am&nbsp;
                    <Typography
                      component={"span"}
                      sx={{
                        color: Colors.secondary,
                        fontSize: { lg: "59px", md: "48px", sm: "36px", xs: "24px" },
                      }}
                    >
                      Sajid Ahmed.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography
                    sx={{
                      color: Colors.secondary,
                      fontSize: { lg: "48px", md: "40px", sm: "28px", xs: "18px" },
                      fontWeight: 700
                    }}
                  >
                    <TypeAnimation
                      sequence={[
                        'MERN Stack Developer',
                        1000,
                        'React JS Developer',
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
                <Grid item md={12} sm={12} sx={12} data-aos="fade-right">
                  <Box sx={{ py: "16px", display: "flex", gap: "16px" }}>
                    <IconButton
                      sx={{
                        p: 0,
                        color: Colors.secondary,
                        ":hover": {
                          color: Colors.secondary + 50
                        }
                      }}
                      onClick={() => window.open("https://linkedin.com/in/sajid-ahmed-9b5089279")}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      sx={{
                        p: 0,
                        color: Colors.secondary,
                        ":hover": {
                          color: Colors.secondary + 50
                        }
                      }}
                      onClick={() => window.open("https://github.com/sajid-ahmed2816")}
                    >
                      <Github />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item md={12} sm={12} sx={12} data-aos="fade-up">
                  <Grid container columnSpacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                      <PrimaryButton
                        fullWidth={true}
                        onClick={handleDownload}
                        title={"Download Resume"}
                        loading={loading}
                      />
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
            <Grid item md={6}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: "100%",
                }}
                data-aos="fade-left"
              >
                <Box
                  sx={{
                    position: "absolute",
                    height: { md: "400px", sm: "400px", xs: "400px" },
                    width: { md: "400px", sm: "100%", xs: "100%" },
                    borderRadius: "8px",
                    backgroundColor: "#00000082"
                  }}
                />
                <CardMedia
                  component={"img"}
                  src={Images.dev3}
                  sx={{
                    height: { md: "400px", sm: "400px", xs: "400px" },
                    width: { md: "400px", sm: "100%", xs: "100%" },
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* Intro Sec */}

          <Grid
            container
            sx={{
              height: { md: "100vh", sm: "100%", xs: "100%" },
              alignItems: "center"
            }}
          >
            {/* Qualification Section */}
            <Grid item md={6} sm={12} xs={12} data-aos="fade-right">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box>
                  <Typography variant="h3">
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
                            mt: "7px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: Colors.primaryGradient,
                            boxShadow: `0px 0px 5px 1px ${Colors.secondary}`
                          }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography sx={{ fontSize: "19px" }}>
                            {qualification.year}
                          </Typography>
                          <Box>
                            <Typography sx={{ fontSize: "18px" }}>
                              {qualification.qualification}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "18px" }}>
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
            <Grid item md={6} sm={12} xs={12} data-aos="fade-left">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box>
                  <Typography variant="h3">
                    My Experience
                  </Typography>
                </Box>

                <Box sx={{ position: "relative", p: 2 }}>
                  {experiences.map((experience, index) => (
                    <Fragment key={index}>
                      <Box sx={{ display: "flex", p: 2 }} data-aos="fade-up">
                        <Box
                          sx={{
                            mt: "7px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: Colors.primaryGradient,
                            boxShadow: `0px 0px 5px 1px ${Colors.secondary}`
                          }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            sx={{
                              fontSize: "19px",
                            }}
                          >
                            {experience.year}
                          </Typography>
                          <Box>
                            <Typography sx={{ fontSize: "18px" }}>
                              {experience.position}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "18px" }}>
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
              height: { md: "100vh", sm: "100%", xs: "100%" },
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
                    color: Colors.white
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
                    md={3}
                    sm={6}
                    xs={12}
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
                        ":hover": {
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

          {/* Graph Sec */}
          <div id="gh" data-login={gitUserName}></div>
          {/* Graph Sec */}
        </Box>
      </Container>
    </Box >
  )
}

export default Home