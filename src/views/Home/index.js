import React, { Fragment, useState } from 'react';
import { Box, Button, CardMedia, Container, Grid, Typography, CircularProgress } from '@mui/material';
import Images from '../../assets/images/Images';
import { TypeAnimation } from 'react-type-animation';
import Colors from '../../assets/style';
import { Html, Css, Javascript, Mongodb, ExpressJs, ReactJs, NodeJs, Firebase, Redux, Github, Bootstrap, MaterialUi } from '../../assets/images/Images';
import "./index.css"
import { useNavigate } from 'react-router-dom';
import { FiberManualRecord } from '@mui/icons-material';

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
  { year: '2013', qualification: 'Matriculation', institution: 'Hill Crest School System' },
  { year: '2016', qualification: 'Intermediate', institution: 'Government Degree College' },
  { year: '2022', qualification: 'Diploma', institution: 'Sir Adamjee Institute of Management Science' },
];

function Home() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleDownload = async () => {
    setLoading(true);
    try {
      const resumeId = "151HRHJLRFTBdpzDJrBx7DZq5A-cBTfFI"
      const apiUrl = `https://drive.google.com/uc?id=${resumeId}`;

      // Use fetch to download the file
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer YOUR_GOOGLE_DRIVE_API_ACCESS_TOKEN`,
        },
      });
      const blob = await response.blob();

      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Resume.pdf';
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

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "120px"
          }}
        >
          {/* Intro Sec */}
          <Grid
            container
            sx={{
              flexDirection: { md: "row", sm: "column-reverse", xs: "column-reverse" },
              justifyContent: { md: "center", sm: "flex-end", xs: "flex-end" },
              mt: "120px"
            }}
          >
            <Grid item md={6} sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  justifyContent: "center",
                  width: "100%",
                  height: "100%"
                }}
              >
                <Box>
                  <Typography sx={{ color: Colors.white, fontSize: { md: "48px", sm: "36px", xs: "24px" }, }}>
                    Hi, I am&nbsp;
                    <Typography
                      component={"span"}
                      sx={{
                        color: Colors.secondary,
                        fontSize: { md: "48px", sm: "36px", xs: "24px" },
                      }}
                    >
                      Sajid Ahmed.
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      color: Colors.secondary,
                      fontSize: { md: "40px", sm: "28px", xs: "18px" },
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
                </Box>
                <Box sx={{ display: "flex", gap: "10px", mt: "10px" }}>
                  <Button
                    variant='contained'
                    sx={{
                      background: Colors.primary1,
                      color: Colors.white,
                      width: "220px",
                      ":hover": {
                        background: Colors.primary
                      }
                    }}
                    onClick={handleDownload}
                  >
                    {loading ?
                      <CircularProgress
                        sx={{
                          color: Colors.white,
                          width: "20px !important",
                          height: "20px !important",
                        }}
                      /> :
                      "Download Resume"
                    }
                  </Button>
                  <Button
                    variant='outlined'
                    sx={{
                      borderColor: Colors.white,
                      color: Colors.white,
                      ":hover": {
                        background: Colors.primaryGradient
                      }
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative"
                }}
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

          {/* Qualification Section */}
          <Grid container>
            <Grid item md={12}>
              <Box>
                <Typography variant="h4">
                  My Qualification
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box position="relative">
                {qualifications.map((qualification, index) => (
                  <Fragment key={index}>
                    {index > 0 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: '0%',
                          top: '10%',
                          height: "160px",
                          transform: 'translateX(-50%)',
                          width: '1px',
                          backgroundColor: Colors.secondary, // Change the color of the line
                          zIndex: -1,
                        }}
                      />
                    )}
                    <Box sx={{ display: "flex", p: 2 }}>
                      <Box
                        sx={{
                          mt: "5px",
                          position: 'absolute',
                          left: '0%',
                          transform: 'translateX(-50%)',
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: Colors.primaryGradient,
                          boxShadow: `0px 0px 5px 1px ${Colors.secondary}`
                        }}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="body2">
                          {qualification.year}
                        </Typography>
                        <Box>
                          <Typography variant="subtitle1">
                            {qualification.qualification} - {qualification.institution}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Fragment>
                ))}
              </Box>
            </Grid>
          </Grid>
          {/* Qualification Section */}

          {/* Skills Sec */}
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Typography
                variant="h4"
                sx={{
                  color: Colors.white
                }}
              >
                My Skills
              </Typography>
            </Grid>
            <Grid item md={12} sx={{ p: 1 }}>
              <Grid container spacing={3}>
                {skills.map((skill, ind) => (
                  <Grid
                    key={ind}
                    item
                    md={3}
                    sm={6}
                    xs={12}>
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
                        }
                      }}
                    >
                      <Box className="icon-wrapper">
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
        </Box>
      </Container>
    </Box >
  )
}

export default Home