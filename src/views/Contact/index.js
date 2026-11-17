import { useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import InputField from '../../Components/InputField';
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons';
import { SuccessToaster } from '../../Components/Toaster';
import Colors from '../../assets/style';

const pageSx = {
  '--project-bg': '#001025',
  '--project-panel': '#072131',
  '--project-line': 'rgba(0, 255, 255, .14)',
  '--project-muted': '#94aaa9',
  '--project-ink': '#f1f5ef',
  '--project-accent': '#00ffffc9',
  minHeight: '100vh',
  overflow: 'hidden',
  pt: { xs: '105px', sm: '125px', md: '14vh' },
  pb: { xs: 6, md: 9 },
  color: 'var(--project-ink)',
  fontFamily: 'Poppins, sans-serif',
  background: 'radial-gradient(ellipse at 75% 5%, rgba(0, 255, 255, .08), transparent 32%), linear-gradient(36deg, #072131 10%, #001025 100%)',
  '& *': { boxSizing: 'border-box' },
  '@media (prefers-reduced-motion: reduce)': {
    '& *, & *::before, & *::after': {
      scrollBehavior: 'auto !important',
      transitionDuration: '0.01ms !important'
    }
  },
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const submitForm = async (formData) => {
    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/mrgnabdk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "First Name": formData.fName,
          "Last Name": formData.lName,
          "Contact Number": formData.contact,
          "Email Address": formData.email,
          "Message": formData.message,
        }),
      });
      if (response.ok) {
        SuccessToaster('Submitted Successfully');
        handleClear();
      } else {
        console.error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false)
    }
  };

  const handleClear = () => {
    setValue("fName", "")
    setValue("lName", "")
    setValue("contact", "")
    setValue("email", "")
    setValue("message", "")
  };

  return (
    <Box
      component={"section"}
      sx={pageSx}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={12}>
            <Grid container justifyContent={"center"}>
              <Grid item md={10} sm={12}>
                <Box sx={{ py: { md: 6, xs: 3 } }}>
                  <Typography
                    data-aos="fade-down"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      color: Colors.primary2,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.17em',
                      '&::before': {
                        content: '""',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: Colors.primary2,
                        boxShadow: '0 0 13px rgba(0,255,255,.45)'
                      }
                    }}
                  >
                    GET IN TOUCH
                  </Typography>
                  <Typography
                    data-aos="fade-right"
                    component="h1"
                    sx={{
                      mt: 3,
                      mb: 3.25,
                      color: Colors.white,
                      fontSize: {
                        xs: 'clamp(52px, 12vw, 76px)',
                        sm: 'clamp(54px, 8vw, 100px)'
                      },
                      fontWeight: 500,
                      lineHeight: .98,
                      letterSpacing: '-.075em'
                    }}
                  >
                    Let’s build something
                    <br />
                    <Box
                      component="span"
                      sx={{ color: Colors.primary2 }}
                    >
                      useful together.
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'flex-start', sm: 'end' },
                      justifyContent: 'space-between',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: { xs: 1.75, sm: 3.75 }
                    }}
                  >
                    <Typography
                      data-aos="fade-up"
                      sx={{
                        maxWidth: 520,
                        color: '#b6c4c1',
                        fontSize: { xs: 14, sm: 16 },
                        lineHeight: 1.75
                      }}
                    >
                      Have an idea, a project you’re excited about, or a question you’d like to discuss? Need help with an existing project, exploring a potential collaboration, or simply want to discuss something interesting. I’m always open to exploring new opportunities, exchanging ideas, and finding creative ways to turn concepts into meaningful results. I’ll take the time to understand your requirements so we can discuss your ideas, explore possible solutions, and figure out the best way to move forward together.
                    </Typography>
                    <Typography
                      sx={{
                        color: Colors.primary2,
                        fontSize: 10,
                        letterSpacing: '.15em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      AVAILABLE FOR SELECT PROJECTS
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={10}>
                <Box>
                  <Grid container justifyContent="center">
                    <Grid item xs={12}>
                      <Box
                        component={"form"}
                        onSubmit={handleSubmit(submitForm)}
                      >
                        <Grid container spacing={2}>
                          <Grid item md={12} xs={12}>
                            <Typography
                              component="h2"
                              sx={{
                                fontSize: { md: 28, sm: 25, xs: 24 },
                                fontWeight: 500,
                                color: Colors.white,
                                letterSpacing: '-.03em',
                                mb: 4
                              }}
                            >
                              Tell me about your project
                            </Typography>
                          </Grid>
                          <Grid item md={6} sm={6} xs={12}>
                            <Box>
                              <InputField
                                label={"First Name"}
                                fullWidth={true}
                                register={register("fName", {
                                  required: "First Name Required"
                                })}
                                error={errors?.fName && true}
                                helperText={errors?.fName?.message}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={6} sm={6} xs={12}>
                            <Box>
                              <InputField
                                label={"Last Name"}
                                fullWidth={true}
                                register={register("lName", {
                                  required: "Last Name Required"
                                })}
                                error={errors?.lName && true}
                                helperText={errors?.lName?.message}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={6} sm={12} xs={12}>
                            <Box>
                              <InputField
                                label={"Contact No."}
                                fullWidth={true}
                                register={register("contact", {
                                  required: "Contact Number Required"
                                })}
                                error={errors?.contact && true}
                                helperText={errors?.contact?.message}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={6} sm={12} xs={12}>
                            <Box>
                              <InputField
                                label={"Email"}
                                fullWidth={true}
                                register={register("email", {
                                  required: "Email Address Required"
                                })}
                                error={errors?.email && true}
                                helperText={errors?.email?.message}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <Box>
                              <InputField
                                label={"Your Message"}
                                multiline={true}
                                rows={5}
                                fullWidth={true}
                                register={register("message", {
                                  required: "Your Message Required"
                                })}
                                error={errors?.message && true}
                                helperText={errors?.message?.message}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={6} sm={6} xs={12}>
                            <Box>
                              <PrimaryButton
                                disabled={loading ? true : false}
                                loading={loading}
                                fullWidth={true}
                                type={"submit"}
                                title={"Submit"}
                                sx={{
                                  zIndex: 1
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item md={6} sm={6} xs={12}>
                            <Box>
                              <SecondaryButton
                                title={"Clear"}
                                fullWidth={true}
                                onClick={() => handleClear()}
                                sx={{
                                  zIndex: 1
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
