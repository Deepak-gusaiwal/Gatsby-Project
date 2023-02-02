import React from "react";
import styled from "styled-components";
import {
  Button,
  Flex,
  HeadingMedium,
  HeadingSmall,
  Image,
  Paragraph,
  TwoColFlex,
  Wrapper,
} from "../styles/GlobalStyledComponents";

import DoctorImg from "../images/doctor.png";
import AmbulenceImg from "../images/ambulance.png";
import wheelChairImg from "../images/wheelchair.png";
import TeamMembers from "../components/TeamMembers";
const About = () => {
  return (
    <>
      <Wrapper style={{overflow:"visible"}}>
        <AboutSection>
          <TwoColFlex>
            <FlexExtended>
              <HeadingMedium>Clinic with Innovations</HeadingMedium>
              <ExtendedPragraph>
                we Provide the Most Full Medical Services,so every persone could
                have the opportunity to recieve qualitative medical help.
              </ExtendedPragraph>
              <ButtonExtended primary="true" large>
                Learn More
              </ButtonExtended>
            </FlexExtended>
            <RightFlex>
              <Box>
                <ExtendedImage src={DoctorImg} contain />
                <HeadingSmall>Qualified Doctors</HeadingSmall>
              </Box>
              <Box>
                <ExtendedImage src={AmbulenceImg} contain />
                <HeadingSmall>Emergency Care</HeadingSmall>
              </Box>
              <Box>
                <ExtendedImage src={wheelChairImg} contain />
                <HeadingSmall>24 Hours Service</HeadingSmall>
              </Box>
            </RightFlex>
          </TwoColFlex>
        </AboutSection>
      </Wrapper>

      {/* Team Members started */}
      <TeamMembers />
      {/* Team Members ended */}
     
    </>
  );
};

const AboutSection = styled.section`
  padding: 0rem 0;
`;
const FlexExtended = styled(Flex)`
  gap: 2rem;
`;
const RightFlex = styled(Flex)`
  gap: 2rem;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-flow: repeat(1fr);
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const ExtendedPragraph = styled(Paragraph)`
  line-height: 1.8;
`;
const ButtonExtended = styled(Button)`
  padding: 1.2rem 2.3rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.lightGrayColor};
  box-shadow: 1px 1px 10px ${({ theme }) => theme.color.primaryColor};
  border-radius: 0.8rem;
  padding: 1rem;
  width: 18vw;
  height: 15vw;
  position: relative;
  align-items: center;
  img {
    position: absolute;
    top: -50%;
  }
  &:nth-child(even) {
    left: 60%;
  }
  &:first-child {
    top: 50px;
    right: 30px;
  }
  &:last-child {
    bottom: 50px;
    right: 30px;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    img {
      position: relative;
      top: 0;
    }
    &:nth-child(even) {
      inset: 0;
    }
    &:first-child {
      inset: 0;
    }
    &:last-child {
      inset: 0;
    }
    width: auto;
    height: 200px;
  }
`;
const ExtendedImage = styled(Image)`
  width: 80%;
`;
export default About;
