import React from 'react';
import './ShowReview.css'
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography, CardActionArea } from '@mui/material';
import Rating from 'react-rating';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
      <div   data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000">
        <Card  className="ratingCard"  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <img style={{marginTop:"10px", borderRadius:'50%'}} width='25%' src="https://i.ibb.co/qdG3jRx/menIcon.png" alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {email}
          </Typography>
          <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly></Rating>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    );
};

export default ShowReview;