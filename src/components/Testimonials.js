import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  HeadingMedium,
  HeadingSmall,
  Image,
  Paragraph,
  Wrapper,
} from "../styles/GlobalStyledComponents";

import img1 from "../images/doctor.png";

import { FaQuoteLeft } from "react-icons/fa";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const [testimonialsData,setTestimonialsData]=useState([])

const getTestimonialsData = async()=>{
 try {
	 const url = "https://admin.tomedes.com/api/v1/get-reviews?page=1";
	  const response = await axios.get(url)
	  const {data} = response.data;
	 setTestimonialsData(data);
} catch (error) {
	console.log('some error occured',error)
}
}

console.log(testimonialsData)
useEffect(()=>{
  getTestimonialsData()
},[])

  return (
    <Wrapper>
      <HeadingMedium>What Our Customers Says</HeadingMedium>
      <TestimonialsContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
        {
          testimonialsData.length !==0 ?
          testimonialsData.map((element)=>{
            return <SwiperSlide key={Math.random()} style={{display:'flex',justifyContent:"center",padding:"2rem",width:'100%'}}>
            <TestimonialCard>
              <ExtendedParagraph small>
                {element.Reviews}
              </ExtendedParagraph>
              <Details>
                <ImageBox>
                  <Image src={img1} />
                </ImageBox>
                <div>
                  <HeadingSmall>{element.Name}</HeadingSmall>
                  <Paragraph small>{element.Company}</Paragraph>
                </div>
              </Details>
              <ColonIcon>
                <FaQuoteLeft />
              </ColonIcon>
            </TestimonialCard>
        </SwiperSlide>
          })
      :
      <span></span>
        }
         
         
        </Swiper>
      </TestimonialsContainer>
    </Wrapper>
  );
};

const TestimonialsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
const TestimonialCard = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: white;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.color.text};
  border-radius: 0.8rem;
  max-width: 550px;
  min-height: 250px;
  justify-content: center;
  padding: 2rem 3rem;
  @media (max-width: 425px) {
    padding: 1rem 2rem;
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  padding: 0.5rem;
`;
const ExtendedParagraph = styled(Paragraph)`
  line-height: 2;
  font-weight: 500;
  @media (max-width: 425px) {
    line-height: 1.5;
  }
`;
const ColonIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -20px;
  top: -20px;
`;


export default Testimonials;
