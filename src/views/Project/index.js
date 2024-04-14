import React from 'react'
import { Box, CardMedia, Container, Typography } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Images from '../../assets/images/Images';


function Project() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: 'flex',
        alignItems: "center",
        mt: 2.5
      }}
    >
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {Object.values(Images).map((item, i) => (
            <SwiperSlide key={i}>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "40px 40px 60px 40px"
              }}
              >
                <Box>
                  <CardMedia
                    component={"img"}
                    src={item}
                    sx={{
                      minWidth: "300px",
                      objectFit: "cover",
                      height: "450px"
                    }}
                  />
                </Box>
                <Box>
                  <Typography>
                    Title Here
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default Project