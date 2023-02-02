import React from "react";
import styled from "styled-components";
import {
  Circle,
  CommonHeader,
  HeadingMedium,
  HeadingSmall,
  Image,
  Paragraph,
  Wrapper,
} from "../styles/GlobalStyledComponents";

import Doc1Img from "../images/Doc1.png";
import Doc2Img from "../images/Doc2.png";
import Doc3Img from "../images/Doc3.png";
import Doc4Img from "../images/Doc4.png";

const TeamMembersData = [
  {
    name: "Dr.Awatif Al",
    designation: "Dental Care",
    image: Doc1Img,
  },
  {
    name: "Dr.Filipa Gaspar",
    designation: "cardiology",
    image: Doc2Img,
  },
  {
    name: "Dr.Siri Jakbosson",
    designation: "NeuroLogical",
    image: Doc3Img,
  },
  {
    name: "Dr.Shushmita",
    designation: "Prediatrics",
    image: Doc4Img,
  },
];
const TeamMembers = () => {
  return (
    <Wrapper>
      <Circle w="300px" top="-100px" right="-100px" incircle/>
      <CommonHeader>
        <HeadingMedium> We Have The Best Specialists</HeadingMedium>
        <Paragraph small>
          We Provide the Most full medical services, <br /> so every persone
          could have the opportunity.
        </Paragraph>
      </CommonHeader>

      <CardsContainer>
        {TeamMembersData.map((element) => {
          return (
            <Card key={Math.random()}>
              <ImageBox>
                <Image src={element.image} contain />
              </ImageBox>
              <Details className="details">
                <HeadingSmall>{element.name}</HeadingSmall>
                <Paragraph>{element.designation}</Paragraph>
              </Details>
            </Card>
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
};

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 3rem;
`;
const Card = styled.div`
  background-color: ${({ theme }) => theme.color.secondaryColor};
  box-shadow: 1px 1px 10px ${({ theme }) => theme.color.primaryColor};
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;

  &:hover{
    background-color: ${({ theme }) => theme.color.primaryColor};
  box-shadow: 1px 1px 10px ${({ theme }) => theme.color.secondaryColor};
  }
  &:hover>div>img{
   transform: scale(1.1);
  }
  &:hover div.details{
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.secondaryColor};
  }
`;
const ImageBox = styled.div`
  height: 70%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export default TeamMembers;
