import React from "react";
import styled from "styled-components";
import {
  CommonHeader,
  FourColGrid,
  HeadingMedium,
  HeadingSmall,
  Image,
  Paragraph,
  Wrapper,
} from "../styles/GlobalStyledComponents";

import { FaChevronRight } from "react-icons/fa";

import TeechImage from "../images/teeth.png";
import Lungs from "../images/lungs.png";
import Brain from "../images/brain.png";
import report from "../images/report.png";

const Services = () => {
  return (
    <Wrapper style={{overflow:"visible"}}>
      <ServicesSection>
        <CommonHeader>
          <HeadingMedium> Our Services</HeadingMedium>
          <Paragraph small>
            We Provide the Most full medical services, so every persone could
            have the opportunity to recieve qualitative medical help.
          </Paragraph>
        </CommonHeader>

        <FourColGrid>
          <Box>
            <BoxImage contain src={TeechImage} />
            <HeadingSmall>Dental care</HeadingSmall>
            <ParagraphExtended>
              <span>Learn More</span>
              <span>
                <FaChevronRight />
              </span>
            </ParagraphExtended>
          </Box>
          <Box>
            <BoxImage contain src={Lungs} />
            <HeadingSmall>PulMonary</HeadingSmall>
            <ParagraphExtended>
              <span>Learn More</span>
              <span>
                <FaChevronRight />
              </span>
            </ParagraphExtended>
          </Box>
          <Box>
            <BoxImage contain src={Brain} />
            <HeadingSmall>Neurological</HeadingSmall>
            <ParagraphExtended>
              <span>Learn More</span>
              <span>
                <FaChevronRight />
              </span>
            </ParagraphExtended>
          </Box>
          <Box>
            <BoxImage contain src={report} />
            <HeadingSmall>Prediatrics</HeadingSmall>
            <ParagraphExtended>
              <span>Learn More</span>
              <span>
                <FaChevronRight />
              </span>
            </ParagraphExtended>
          </Box>
        </FourColGrid>
      </ServicesSection>
    </Wrapper>
  );
};


const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
  max-width: 300px;
  justify-self: center;
  overflow: hidden;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.color.primaryColor};
  padding: 2rem 0.5rem;
  padding-left: 2rem;
  gap: 2rem;
  transition: 100ms;
  p {
    transform: translatex(-200%);
    cursor: pointer;
  }
  &:hover > p {
    transform: translatex(0%);
  }
  &:hover {
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
  }
`;

const BoxImage = styled(Image)`
  width: 60%;
`;

const ParagraphExtended = styled(Paragraph)`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  font-size: 1rem;
  span > svg {
    padding: 0;
    margin: 0;
  }
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export default Services;
