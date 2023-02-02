import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styles/GlobalStyledComponents";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterSection>
      <Wrapper noMb>
        <SocialIcons>
          <FaFacebookF/>
          <FaGoogle/>
          <FaTwitter/>
        </SocialIcons>
        <p>
          Copyright{new Date().getFullYear()} PodPayment-
          {new Date().getFullYear()}
        </p>
      </Wrapper>
      
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGrayColor};
  min-height: 30vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.7;
    @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  }
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  svg {
    cursor: pointer;
   font-size: 2.5rem;
   padding: 0.6rem;
   border-radius: 100%;
   color: gray;
   background-color: ${({theme})=>theme.color.background};
}
  svg:hover{
 color: ${({theme})=>theme.color.text};
}
`;

export default Footer;
