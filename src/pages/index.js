import React from "react";
import styled from "styled-components";
import {
  Button,
  Circle,
  Flex,
  HeadingLarge,
  HeadingSmall,
  Image,
  Paragraph,
  TwoColFlex,
  Wrapper,
} from "../styles/GlobalStyledComponents";
import Services from "./services";

import image from "../images/banner.png";
import About from "./about";
import Testimonials from "../components/Testimonials";
import News from "./news";
const Home = () => {
  return (
    <>
      <Wrapper>
        {/* home page started */}
        <TwoColFlex>
          <Flex>
            <HeadingSmall>Welcome to MediCare+ Clinic</HeadingSmall>
            <HeadingLarge>Best Specialists</HeadingLarge>
            <Paragraph>
              We are on the Leading Edge of cancer care. Providing Full
              continnum of cancer treatements and supportive carve services in a
              single Conveninet location
            </Paragraph>
            <ButtonBox>
              <Button primary="true" large>
                Make An Appoinment
              </Button>
              <Button secondary="true" large>
                Departments
              </Button>
            </ButtonBox>
          </Flex>
          <Flex>
            <Image src={image} />
          </Flex>
        </TwoColFlex>
        {/* home page edned */}
        <Circle w="400px" top="-250px" left="-150px" incircle/>
        <Circle w="500px" top="-250px" right="-150px" />
      </Wrapper>
      {/* services section started */}
      <Services />
      {/* services section ended */}
      {/* About section started */}
      <About />
      {/* About section ended */}
       {/* Testimonials started */}
       <Testimonials />
      {/* Testimonials ended */}
       {/* News started */}
       <News />
      {/* News ended */}
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.8rem;
  justify-content: center;
  margin-top: 1rem;
  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;


export default Home;

export const Head = () => <title>Home Page</title>;
