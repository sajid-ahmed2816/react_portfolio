import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./index.css"

function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box className="text-container">
              <Typography className="animated-text">
                Welcome to My Website
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home