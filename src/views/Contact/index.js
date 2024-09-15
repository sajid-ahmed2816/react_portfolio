import React, { useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import InputField from '../../Components/InputField';
import { PrimaryButton, SecondaryButton } from '../../Components/Buttons';
import { SuccessToaster } from '../../Components/Toaster';

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
  }

  const handleClear = () => {
    setValue("fName", "")
    setValue("lName", "")
    setValue("contact", "")
    setValue("email", "")
    setValue("message", "")
  }

  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          display: 'flex',
          alignItems: "center"
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: { md: 0, sm: "100px", xs: "100px" },
            mb: { md: 0, sm: "40px", xs: "40px" }
          }}
        >
          <Grid item md={10}>
            <Box
              component={"form"}
              onSubmit={handleSubmit(submitForm)}
            >
              <Grid container spacing={2}>
                <Grid item md={12} sx={12} xs={12}>
                  <Typography
                    variant='h2'
                    sx={{
                      fontSize: { md: "64px", sm: "52px", xs: "52px" }
                    }}
                  >
                    Get A Qoute
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
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Box>
                    <SecondaryButton
                      title={"Clear"}
                      fullWidth={true}
                      onClick={() => handleClear()}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Contact