import { Link, Text } from "@chakra-ui/react"

import React, { Component } from "react";
import Slider from "react-slick";
import 'pure-react-carousel/dist/react-carousel.es.css';
function NewArrivals(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <>
        <div>
        <Text lineHeight="28px" marginTop="50px" fontFamily=" Montserrat,sans-serif" letterSpacing=".4px" fontWeight="300" display="block"  wordBreak="breakWord" fontSize="28px">NEW ARRIVALS</Text>
        <br /><br />
        <Link fontSize="13px" lineHeight="16px" fontWeight="600" textDecoration="underline" >VIEW-ALL</Link>
        </div>
      <div >
    
        <Slider {...settings}>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
         <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />
          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
          <div>
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" />

          </div>
        </Slider>
      </div>
      </>
    );
    
}
export default NewArrivals