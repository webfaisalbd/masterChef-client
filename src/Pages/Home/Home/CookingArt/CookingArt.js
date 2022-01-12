import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import Typed from 'react-typed';
import './CookingArt.css';
import { Box } from '@mui/system';
const CookingArt = () => {
    return (
        <div style={{marginBottom:'40px',marginTop:'40px'}}>
            <Box sx={{ flexGrow: 1 }}>
          <Typography  variant="h4" component="div">
             <Typed
                    strings={['Cooking Art']}
                    typeSpeed={250}
                />
          </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16} sm={8} md={8} lg={10}>
          <div>
          <div style={{marginTop:'40px',marginLeft:'80px'}}>
          <CardMedia
        component="img"
        height="350"
        image="https://i.ibb.co/s1RkFn1/chefs-holding-dishes-from-4-countries.jpg"
      />
          </div>
          </div>
        </Grid>
        <Grid item xs={16} sm={8} md={8} lg={6}>
        <div  data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000" style={{marginTop:'40px',marginLeft:'10px'}}> 
        <CardMedia
        component="img"
        height="200"
        image="https://i.ibb.co/Mc3SmF5/testChef.png"
        alt="Paella dish"
      /> 
        <div  data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000"  style={{marginTop:'20px',marginLeft:'20px'}}>
        <Typography paragraph>
        Cooking is both an art and a science. The technical parts of cooking involve chemistry, mathematics and physics. The art of cooking involves pleasing the eye and the palate.
          </Typography>
        </div>
        
</div>
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default CookingArt;